// echobridge/backend/elevenlabs-integration/elevenlabs.service.js

const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;
const ELEVENLABS_VOICE_ID = process.env.ELEVENLABS_VOICE_ID;

const BASE_URL = `https://api.elevenlabs.io/v1/text-to-speech/${ELEVENLABS_VOICE_ID}`;

if (!ELEVENLABS_API_KEY || !ELEVENLABS_VOICE_ID) {
  throw new Error('Missing ElevenLabs API key or voice ID in environment variables.');
}

async function textToSpeech(text) {
  try {
    const response = await axios.post(
      BASE_URL,
      {
        text,
        model_id: 'eleven_monolingual_v1',
        voice_settings: {
          stability: 0.7,
          similarity_boost: 0.8,
        },
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'xi-api-key': ELEVENLABS_API_KEY,
        },
        responseType: 'arraybuffer',
      }
    );

    return Buffer.from(response.data);
  } catch (error) {
    console.error('[Text-to-Speech Error]', error.response?.data || error.message);
    throw new Error('Error generating speech with ElevenLabs.');
  }
}

module.exports = {
  textToSpeech,
};
