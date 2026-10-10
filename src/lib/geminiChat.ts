import { GoogleGenAI } from '@google/genai';
import { SYSTEM_PORTFOLIO_CONTEXT } from '../data/portfolio';

export interface ChatMessage {
  role: 'user' | 'assistant' | 'model';
  content: string;
}

export interface ChatResponse {
  reply: string;
  success: boolean;
  error?: string;
}

// In-memory simple IP/session rate limiter (up to 20 requests per minute per identifier)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

export function checkRateLimit(clientId: string, limit = 20, windowMs = 60000): boolean {
  const now = Date.now();
  const clientData = rateLimitMap.get(clientId);

  if (!clientData || now > clientData.resetTime) {
    rateLimitMap.set(clientId, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (clientData.count >= limit) {
    return false;
  }

  clientData.count += 1;
  return true;
}

export async function processChatRequest(
  message: string,
  history: ChatMessage[] = [],
  clientId = 'global'
): Promise<ChatResponse> {
  // 1. Validate input
  if (!message || typeof message !== 'string') {
    return {
      reply: 'Please provide a valid question.',
      success: false,
      error: 'Invalid message payload.',
    };
  }

  const trimmedMessage = message.trim();
  if (trimmedMessage.length === 0) {
    return {
      reply: 'Please ask a question about Keerthana’s portfolio, skills, or projects.',
      success: false,
    };
  }

  if (trimmedMessage.length > 1000) {
    return {
      reply: 'Your message is too long (limit is 1000 characters). Please send a shorter question.',
      success: false,
      error: 'Message exceeds 1000 characters.',
    };
  }

  // 2. Rate limit check
  if (!checkRateLimit(clientId)) {
    return {
      reply: 'Too many queries in a short period. Please wait a moment before asking another question.',
      success: false,
      error: 'Rate limit exceeded.',
    };
  }

  // 3. Check API key
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === 'MY_GEMINI_API_KEY' || apiKey.trim() === '') {
    return {
      reply:
        "Ask Sangem AI requires a Google Gemini API key to be configured in the environment (`GEMINI_API_KEY`). In the meantime, you can review all verified details about Keerthana's education, skills, and projects directly on this page, or reach out to her at sangemkeerthana0803@gmail.com.",
      success: true,
      error: 'GEMINI_API_KEY is not configured.',
    };
  }

  try {
    const ai = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });

    // Format conversation history safely (max last 6 entries)
    const recentHistory = Array.isArray(history) ? history.slice(-6) : [];
    
    // Construct contents
    const contents: Array<{ role: 'user' | 'model'; parts: Array<{ text: string }> }> = [];

    for (const item of recentHistory) {
      if (item && item.content && typeof item.content === 'string') {
        const role = item.role === 'assistant' || item.role === 'model' ? 'model' : 'user';
        contents.push({
          role,
          parts: [{ text: item.content.slice(0, 800) }],
        });
      }
    }

    // Add current user message
    contents.push({
      role: 'user',
      parts: [{ text: trimmedMessage }],
    });

    const geminiPromise = ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: contents,
      config: {
        systemInstruction: SYSTEM_PORTFOLIO_CONTEXT,
        temperature: 0.3,
        topP: 0.8,
      },
    });

    const timeoutPromise = new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error('Gemini API request timeout (4s)')), 4000)
    );

    const response = await Promise.race([geminiPromise, timeoutPromise]);

    const replyText = response.text?.trim();
    if (replyText) {
      return {
        reply: replyText,
        success: true,
      };
    }

    return {
      reply: getVerifiedFallbackAnswer(trimmedMessage),
      success: true,
    };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : 'Unknown error';
    console.warn('Gemini API call returned error, providing verified portfolio answer:', errorMsg);

    // Provide verified portfolio answer during upstream service spikes or issues
    const fallbackAnswer = getVerifiedFallbackAnswer(trimmedMessage);
    return {
      reply: fallbackAnswer,
      success: true,
    };
  }
}

function getVerifiedFallbackAnswer(query: string): string {
  const q = query.toLowerCase();
  if (q.includes('certificate') || q.includes('certification') || q.includes('vault') || q.includes('course')) {
    return "Keerthana has earned 6 verified certifications featured in her **Certificate Vault**:\n1. **Foundational Course on Applied Machine Learning and AI** (CII, Sept 2026)\n2. **Basics of Python** (Infosys Springboard, Nov 2025)\n3. **Computer Fundamentals 101** (Infosys Springboard, Nov 2025)\n4. **Prompt Engineering** (Infosys Springboard, April 2026)\n5. **Trust and Security with Google Cloud** (Google Cloud, Aug 2026)\n6. **Ethical Hacking** (Croma Campus, July 2026)\n\nYou can view and download all certificates in the Certificate Vault section!";
  }
  if (q.includes('skill') || q.includes('language') || q.includes('python') || q.includes('java') || q.includes('tech')) {
    return "Keerthana's verified technical skills include **Java**, **Python**, **C**, and **Advanced Java**, alongside **Cybersecurity fundamentals**, **Password strength analysis**, and version control with **Git & GitHub**.";
  }
  if (q.includes('education') || q.includes('college') || q.includes('university') || q.includes('degree') || q.includes('study')) {
    return "Keerthana is currently enrolled in the **B.Tech in Computer Science Engineering (Cyber Security)** program at **Marwadi University**, Rajkot, Gujarat (July 2025 to May 2029).";
  }
  if (q.includes('project') || q.includes('password') || q.includes('checker')) {
    return "Keerthana developed a **Python-based Password Strength Checker** that evaluates password complexity, length, character diversity, and entropy to help users defend against dictionary and brute-force vulnerabilities.";
  }
  if (q.includes('decode') || q.includes('experience') || q.includes('work')) {
    return "Keerthana has technical project experience at **Decode Labs** (as documented in her LinkedIn profile), where she applied software development and engineering practices.";
  }
  if (q.includes('opportunity') || q.includes('intern') || q.includes('role') || q.includes('objective')) {
    return "Keerthana is actively seeking **internship opportunities in cybersecurity or software development** to apply her programming and security knowledge to practical systems and gain real-world engineering experience.";
  }
  if (q.includes('contact') || q.includes('email') || q.includes('reach') || q.includes('linkedin') || q.includes('github')) {
    return "You can contact Keerthana directly via email at **sangemkeerthana0803@gmail.com**, explore her GitHub at **https://github.com/keerthanasangem138944-ctrl**, or connect on LinkedIn at **https://www.linkedin.com/in/keerthana-sangem-a03175384**.";
  }
  return "Keerthana Sangem is a B.Tech Cybersecurity student and Java & Python developer at Marwadi University (2025–2029). She is passionate about digital defense and reliable software engineering. Feel free to explore her skills and projects above, or email her at sangemkeerthana0803@gmail.com.";
}
