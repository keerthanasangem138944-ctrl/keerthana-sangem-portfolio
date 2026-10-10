# Keerthana Sangem — Personal Portfolio Website

A personal portfolio website for **Keerthana Sangem**, B.Tech Cybersecurity student at Marwadi University and Java & Python developer.

Designed with a restrained blue-and-white theme, verified academic & project details, an interactive password strength sandbox, resume preview/download verification, and a Google Gemini-powered AI assistant (**Ask Sangem AI**).

---

## 🌟 Key Highlights & Architecture

- **Clean Blue-and-White Design System**:
  - Primary blue (`#2563EB`), deep navy (`#102A56`), crisp white backgrounds, subtle border tokens.
  - Zero-slop typography, generous whitespace, mobile-first responsive layout.
- **Verified Credentials Only**:
  - Education: B.Tech in Computer Science Engineering (Cyber Security), Marwadi University, Rajkot, Gujarat (July 2025 – May 2029).
  - Technical Project Experience: Decode Labs (as documented on LinkedIn).
  - Skills: Java, Python, C, Advanced Java, Cybersecurity fundamentals, Git & GitHub.
  - Featured Project: Python-based Password Strength Checker.
- **Ask Sangem AI (Gemini Chatbot)**:
  - Powered by Google Gemini (`gemini-3.8-flash`) via the official `@google/genai` TypeScript SDK.
  - Server-side execution ensuring API keys are never exposed to client-side bundles.
  - Strictly grounded in Keerthana's verified credentials.
- **Asset Verification & Graceful Fallbacks**:
  - Image fallback: Elegant initials badge (`KS`) if `public/images/keerthana-profile.jpg` is missing.
  - Resume fallback: Informative helper modal with repository path if `public/resume/Keerthana_Sangem_Resume.pdf` is missing.
- **Production-Ready Full-Stack & Vercel Compatibility**:
  - Serverless function under `api/chat.ts` for Vercel deployment.
  - Express dev server (`server.ts`) for local development on port 3000.

---

## 📁 Repository Structure

```
.
├── api/
│   └── chat.ts                     # Vercel serverless function (Gemini API)
├── public/
│   ├── certificates/
│   │   ├── README.md               # Guide for uploading certificate PDFs
│   │   ├── cii-foundational-ai-ml.pdf
│   │   ├── infosys-basics-of-python.pdf
│   │   ├── infosys-computer-fundamentals-101.pdf
│   │   ├── infosys-prompt-engineering.pdf
│   │   ├── google-cloud-trust-and-security.pdf
│   │   └── ethical-hacking.pdf
│   ├── images/
│   │   ├── README.md               # Guide for uploading keerthana-profile.jpg
│   │   └── keerthana-profile.jpg   # Profile photograph (manual upload)
│   └── resume/
│       ├── README.md               # Guide for uploading Keerthana_Sangem_Resume.pdf
│       └── Keerthana_Sangem_Resume.pdf # Resume PDF document (manual upload)
├── src/
│   ├── components/
│   │   ├── Achievements.tsx        # Experience & Education timeline
│   │   ├── About.tsx               # Academic narrative & career objective
│   │   ├── BackToTop.tsx           # Floating scroll-to-top button
│   │   ├── Certificates.tsx        # Certificate Vault with view & download
│   │   ├── Chatbot.tsx             # Ask Sangem AI floating chat interface
│   │   ├── Contact.tsx             # Contact form with email client fallback
│   │   ├── Footer.tsx              # Minimalist footer & social links
│   │   ├── Hero.tsx                # Hero section with portrait frame
│   │   ├── Navbar.tsx              # Sticky header with active highlight
│   │   ├── ProjectModal.tsx        # Modal with interactive algorithm tester
│   │   ├── Projects.tsx            # Featured & upcoming project cards
│   │   ├── ResumeModal.tsx         # Resume verification and download modal
│   │   ├── ScrollProgress.tsx      # Top reading-progress bar
│   │   └── Skills.tsx              # Filterable technical skill cards
│   ├── data/
│   │   └── portfolio.ts            # Centralized portfolio data
│   ├── lib/
│   │   └── geminiChat.ts           # Server-side Gemini chat handler
│   ├── App.tsx                     # Main page assembly
│   ├── index.css                   # Tailwind CSS styling
│   └── main.tsx                    # React DOM entrypoint
├── .env.example                    # Template environment variables
├── index.html                      # SEO metadata & Schema.org JSON-LD
├── package.json                    # Project dependencies & scripts
├── server.ts                       # Express + Vite development server
├── tsconfig.json                   # TypeScript configuration
├── vercel.json                     # Vercel routing configuration
└── vite.config.ts                  # Vite build configuration
```

---

## 🚀 Local Development

### 1. Clone & Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Add your Gemini API Key in `.env`:
```env
GEMINI_API_KEY="your-gemini-api-key-here"
```
*(Get a key from [Google AI Studio](https://aistudio.google.com/app/apikey))*

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📷 How to Upload Profile Photo & Resume to GitHub

You can upload both files directly through the GitHub web interface:

### Step 1: Upload Profile Photo
1. Go to your GitHub repository in your browser: `https://github.com/keerthanasangem138944-ctrl/<your-repo-name>`
2. Click into the `public` folder, then into the `images` folder.
3. Click **Add file** > **Upload files**.
4. Drag and drop your photo named exactly:
   ```
   keerthana-profile.jpg
   ```
5. Click **Commit changes**.

### Step 2: Upload Resume PDF
1. Navigate to the `public/resume` folder in the repository.
2. Click **Add file** > **Upload files**.
3. Drag and drop your resume file named exactly:
   ```
   Keerthana_Sangem_Resume.pdf
   ```
4. Click **Commit changes**.

### Step 3: Upload Certificate PDFs
1. Navigate to the `public/certificates` folder in the repository.
2. Click **Add file** > **Upload files**.
3. Drag and drop your 6 certificate PDF files with these exact filenames:
   - `cii-foundational-ai-ml.pdf`
   - `infosys-basics-of-python.pdf`
   - `infosys-computer-fundamentals-101.pdf`
   - `infosys-prompt-engineering.pdf`
   - `google-cloud-trust-and-security.pdf`
   - `ethical-hacking.pdf`
4. Click **Commit changes**.

*The portfolio immediately detects all files upon next build or page load!*

---

## 🚀 How to Deploy on Vercel

1. **Sign in to Vercel**:
   Go to [vercel.com](https://vercel.com) and log in with your GitHub account (`keerthanasangem138944-ctrl`).

2. **Import Repository**:
   Click **Add New...** > **Project**, select your portfolio repository, and click **Import**.

3. **Configure Project Settings**:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

4. **Add Environment Variables**:
   Under **Environment Variables**, add:
   - Key: `GEMINI_API_KEY`
   - Value: `your_actual_gemini_api_key_from_google_ai_studio`

5. **Deploy**:
   Click **Deploy**. Vercel will build the Vite frontend and provision the `/api/chat` serverless function.

6. **Verify**:
   Once deployed, click your live URL to test:
   - Floating "Ask Sangem AI" chatbot.
   - Project modal and interactive password strength analyzer.
   - Contact form and direct email client fallback.
   - Smooth navigation and responsive mobile menu.

---

## 🔒 Security & Privacy

- **No Exposed Secrets**: `GEMINI_API_KEY` is loaded only on the server (`api/chat.ts` and `server.ts`). It is never bundled into browser code.
- **Input Validation**: Text inputs and chat questions are sanitized, trimmed, and rate-limited.
- **Truthful Content**: No fabricated awards, degrees, or metrics.
