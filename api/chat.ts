import { processChatRequest } from '../src/lib/geminiChat';

export default async function handler(req: any, res: any) {
  // CORS & headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({
      error: 'Method Not Allowed',
      message: 'Only POST requests are accepted on this endpoint.',
    });
  }

  try {
    const { message, history } = req.body || {};
    const clientIp = (req.headers['x-forwarded-for'] as string) || req.socket?.remoteAddress || 'client';

    const result = await processChatRequest(message, history, clientIp);
    return res.status(result.success ? 200 : 400).json(result);
  } catch (error: any) {
    console.error('API /api/chat error:', error);
    return res.status(500).json({
      reply: 'An unexpected internal error occurred. Please try again later.',
      success: false,
      error: error?.message || 'Server error',
    });
  }
}
