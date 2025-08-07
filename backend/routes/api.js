const express = require('express');
const router = express.Router();
const openaiService = require('../services/openai');
const categorizacionService = require('../services/categorizacion');

// Example route for OpenAI API interaction
router.post('/openai', async (req, res) => {
    try {
        const response = await openaiService.callOpenAI(req.body);
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: 'Error interacting with OpenAI API' });
    }
});

// Example route for categorization
router.post('/categorize', (req, res) => {
    const categorizedData = categorizacionService.categorize(req.body);
    res.json(categorizedData);
});

// Add more routes as needed

module.exports = router;