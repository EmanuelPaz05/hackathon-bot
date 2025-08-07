const axios = require('axios');

const OPENAI_API_KEY = process.env.OPENAI_API_KEY; // Ensure to set your OpenAI API key in environment variables

async function getOpenAIResponse(prompt) {
    try {
        const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
            prompt: prompt,
            max_tokens: 150
        }, {
            headers: {
                'Authorization': `Bearer ${OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });
        return response.data.choices[0].text.trim();
    } catch (error) {
        console.error('Error communicating with OpenAI API:', error);
        throw error;
    }
}

module.exports = {
    getOpenAIResponse
};