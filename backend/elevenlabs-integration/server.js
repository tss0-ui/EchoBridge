// echobridge/backend/elevenlabs-integration/server.js

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { textToSpeech } = require('./elevenlabs.service');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json());

// Health check
app.get('/api/health', (req, res) => {
  res.status(200).send({ status: 'OK', service: 'ElevenLabs Integration' });
});

// Text-to-speech endpoint
app.post('/api/speak', async (req, res) => {
  const { text } = req.body;

  if (!text || typeof text !== 'string') {
    return res.status(400).json({ error: 'Invalid or missing "text" field in request body.' });
  }

  try {
    const audioBuffer = await textToSpeech(text);

    res.set({
      'Content-Type': 'audio/mpeg',
      'Content-Disposition': 'inline; filename="speech.mp3"',
    });

    res.send(audioBuffer);
  } catch (err) {
    console.error('[Speak Endpoint Error]', err.message);
    res.status(500).json({ error: 'Failed to generate speech.' });
  }
});

app.listen(PORT, () => {
  console.log(`🗣️  ElevenLabs TTS Server running at http://localhost:${PORT}`);
});
