// echobridge/backend/elevenlabs-integration/index.js

const express = require('express');
const router = express.Router();
const elevenlabsService = require('./elevenlabs.service');

// POST /speak
router.post('/speak', async (req, res) => {
  const { text } = req.body;

  if (!text || typeof text !== 'string') {
    return res.status(400).json({ error: 'Text is required and must be a string.' });
  }

  try {
    const audioBuffer = await elevenlabsService.textToSpeech(text);
    res.set({
      'Content-Type': 'audio/mpeg',
      'Content-Disposition': 'inline; filename="speech.mp3"',
      'Content-Length': audioBuffer.length,
    });
    res.send(audioBuffer);
  } catch (error) {
    console.error('[ElevenLabs Error]', error.message);
    res.status(500).json({ error: 'Failed to generate speech from text.' });
  }
});

module.exports = router;
