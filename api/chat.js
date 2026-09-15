// api/chat.js
import { GoogleGenAI } from '@google/genai';
import { PORTFOLIO_KNOWLEDGE_BASE } from './portfolioData.js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });
dotenv.config();

// Primary model for @google/genai SDK
const PRIMARY_MODEL = 'gemini-3.6-flash';
const MAX_RETRIES = 3;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    console.error('CRITICAL: GEMINI_API_KEY is missing');
    return res.status(500).json({
      error: 'Missing API key',
      reply: 'The server cannot find the GEMINI_API_KEY. Please verify your environment configuration.'
    });
  }

  const { message, isVoiceMode = false } = req.body;
  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Valid message string is required.' });
  }

  const ai = new GoogleGenAI({ apiKey });

  const systemInstruction = isVoiceMode
    ? `${PORTFOLIO_KNOWLEDGE_BASE}

=========================
VOICE & LIVE CALL MODE RULES (STRICT)
=========================
- You are speaking aloud directly on a real-time voice call.
- Keep answers short, natural, and conversational (1 to 2 sentences maximum, under 30 words).
- DO NOT use bullet points (•) or markdown symbols like asterisks (**).
- Always append: [SUGGESTIONS: Suggestion 1 | Suggestion 2 | Suggestion 3]`
    : PORTFOLIO_KNOWLEDGE_BASE;

  let lastError = null;

  // Retry up to 3 times if Google servers hit 503 high demand spikes
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const response = await ai.models.generateContent({
        model: PRIMARY_MODEL,
        contents: message,
        config: {
          systemInstruction,
        },
      });

      if (response && response.text) {
        return res.status(200).json({ reply: response.text });
      }
    } catch (error) {
      lastError = error;
      console.warn(`Attempt ${attempt} for ${PRIMARY_MODEL} failed (Status: ${error.status || error.code || error.message}).`);

      // If it's a 503 (high demand) or 429 (rate limit), wait briefly and retry
      if (attempt < MAX_RETRIES) {
        const delay = attempt * 800; // 800ms, 1600ms backoff
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  }

  console.error('Gemini Execution Error after retries:', lastError);
  return res.status(500).json({
    error: lastError?.message || 'Failed to process AI response',
    reply: 'I am having trouble connecting right now. Feel free to explore the project sections directly or drop a message via the contact form!'
  });
}