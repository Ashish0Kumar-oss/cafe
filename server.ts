import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Server-side Gemini initialization for Barista Jean
  let aiClient: GoogleGenAI | null = null;
  const getAI = () => {
    if (!aiClient && process.env.GEMINI_API_KEY) {
      aiClient = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    }
    return aiClient;
  };

  // API Endpoints FIRST
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', cafe: 'Maison Du Café' });
  });

  app.post('/api/barista', async (req, res) => {
    try {
      const { prompt } = req.body;
      if (!prompt) {
        return res.status(400).json({ error: 'Prompt is required' });
      }

      const ai = getAI();
      if (ai) {
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: [
            {
              role: 'user',
              parts: [
                {
                  text: `You are "Barista Jean", the virtual master coffee sommelier at Maison Du Café, a luxury artisanal coffee roastery in Downtown. Respond in 2 short, warm, elegant sentences in character. Give a specific recommendation for single-origin coffee, lattes, or pastries from our menu. User prompt: "${prompt}"`
                }
              ]
            }
          ]
        });

        const reply = response.text || "I recommend our signature Bourbon Barrel Smoked Latte paired with an artisanal almond croissant!";
        return res.json({ reply });
      } else {
        // Fallback response when key is not set
        return res.json({
          reply: "Bonjour! I recommend our signature Bourbon Barrel Smoked Latte or Panama Geisha pour over today."
        });
      }
    } catch (err: any) {
      console.error('Barista API error:', err);
      return res.json({
        reply: "Pardon! Our espresso grinder was momentarily busy. May I suggest our 24k Gold Leaf Velvet Cappuccino?"
      });
    }
  });

  // Vite middleware for development vs static serve for production
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`☕ Maison Du Café Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
