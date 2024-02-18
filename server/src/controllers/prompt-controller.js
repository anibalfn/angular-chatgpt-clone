const openai = require('../config/openai');

module.exports = {
    async sendText(req, res) {
        const openaiAPI = openai.configuration()
        // retorna instância nova

        try {
            const response = await openaiAPI.createCompletion(
                openai.textComplete('Cite 5 animais')
            )
        }
    }

}