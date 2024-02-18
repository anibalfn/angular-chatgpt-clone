const InputPrompt = require('../models/input-prompt');
const openai = require('../config/openai');

module.exports = {
    async sendText(req, res) {
        const openaiAPI = openai.configuration()
        // retorna instância nova
        const inputModel = new InputPrompt (req.body)

        try {
            const response = await openaiAPI.createCompletion(
                openai.textComplete(inputModel)
            )
        
                return res.status(200).json({
                    success: true,
                    data: response.data.choices[0].text,
                })
        
        } catch (error) {
            return res.status(400).json({
                success: false,
                error: error.response ? error.response : 'Something went wrong',
                // if ternário
        })
    }

}}