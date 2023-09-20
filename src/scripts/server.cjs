const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.post('/api/chat', async (req, res) => {
  const { message } = req.body;

  const response = await axios.post('https://api.openai.com/v1/chat/completions', {
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'system', content: 'You are a helpful assistant.' },
      { role: 'user', content: message }
    ]
  }, {
    headers: {
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
    }
  });

  res.json({ response: response.data.choices[0].message.content.trim() });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
