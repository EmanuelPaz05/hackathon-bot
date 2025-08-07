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
"color: #61dafb; font-weight: bold;">const OpenAI = require('openai');
"color: #61dafb; font-weight: bold;">const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

"color: #61dafb; font-weight: bold;">async "color: #61dafb; font-weight: bold;">function processWithOpenAI(userMessage) {
    "color: #61dafb; font-weight: bold;">const prompt = `
    Analiza el siguiente reclamo vecinal y responde de manera profesional:
    
    Reclamo: "${userMessage}"
    
    Responde en formato JSON con:
    - response: Respuesta profesional del bot
    - categoria: Categoría del problema (Baches, Alumbrado, Basura, etc.)
    - enabled: true si es un reclamo válido, false si no
    `;

    "color: #61dafb; font-weight: bold;">const comp"color: #61dafb; font-weight: bold;">letion = "color: #61dafb; font-weight: bold;">await openai.chat.comp"color: #61dafb; font-weight: bold;">letions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "system",
                content: "Eres un asistente municipal que ayuda a categorizar reclamos vecinales."
            },
            {
                role: "user",
                content: prompt
            }
        ],
        temperature: 0.7
    });

    return JSON.parse(comp"color: #61dafb; font-weight: bold;">letion.choices[0].message.content);
}