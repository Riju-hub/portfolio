// api/session.js
import { GoogleGenAI } from '@google/genai';
import { PORTFOLIO_KNOWLEDGE_BASE } from './portfolioData.js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });
dotenv.config();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

    // Request short-lived ephemeral token for client-side live session
    const token = await ai.authTokens.create({
      config: {
        uses: 1, // Single-use session
        liveConnectConstraints: {
          model: 'gemini-2.0-flash-exp',
          config: {
            responseModalities: ['AUDIO'],
            systemInstruction: {
              parts: [{ text: PORTFOLIO_KNOWLEDGE_BASE }],
            },
            speechConfig: {
              voiceConfig: {
                prebuiltVoiceConfig: { voiceName: 'Aoede' }, // Puck, Charon, Aoede, Fenrir
              },
            },
          },
        },
      },
    });

    return res.status(200).json({ token: token.name });
  } catch (err) {
    console.error('Session generation error:', err);
    return res.status(500).json({ error: 'Failed to create live session' });
  }
}