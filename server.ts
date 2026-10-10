import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';
import { processChatRequest } from './src/lib/geminiChat';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

  app.use(express.json({ limit: '1mb' }));

  // Chat API endpoint
  app.post('/api/chat', async (req, res) => {
    try {
      const { message, history } = req.body || {};
      const clientIp = (req.headers['x-forwarded-for'] as string) || req.socket?.remoteAddress || 'local';

      const result = await processChatRequest(message, history, clientIp);
      res.status(result.success ? 200 : 400).json(result);
    } catch (err: any) {
      console.error('Server /api/chat error:', err);
      res.status(500).json({
        reply: 'An internal server error occurred while processing your query.',
        success: false,
        error: err?.message || 'Server error',
      });
    }
  });

  // Contact form submission endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, subject, message } = req.body || {};

      if (!name || !email || !message) {
        return res.status(400).json({
          success: false,
          error: 'Please fill in all required fields (name, email, and message).',
        });
      }

      // Basic email regex validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({
          success: false,
          error: 'Please provide a valid email address.',
        });
      }

      console.log('Incoming contact message for Keerthana Sangem:');
      console.log(`From: ${name} <${email}>`);
      console.log(`Subject: ${subject || 'Portfolio Inquiry'}`);
      console.log(`Message: ${message}`);

      return res.status(200).json({
        success: true,
        message: 'Thank you for reaching out! Your message has been received.',
        emailClientFallbackUrl: `mailto:sangemkeerthana0803@gmail.com?subject=${encodeURIComponent(
          subject || `Portfolio Inquiry from ${name}`
        )}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`,
      });
    } catch (err: any) {
      console.error('Server /api/contact error:', err);
      res.status(500).json({
        success: false,
        error: 'Failed to process contact submission.',
      });
    }
  });

  // Health check
  app.get('/api/health', (req, res) => {
    res.json({
      status: 'ok',
      portfolio: 'Keerthana Sangem',
      timestamp: new Date().toISOString(),
    });
  });

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Keerthana Sangem Portfolio dev server running at http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
