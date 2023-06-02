import axios from 'axios';

const sendToGpt = async (messages) => {
  const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
    prompt: messages.join('\n'),
    max_tokens: 60,
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
    }
  });
  return response.data.choices[0].text.trim();
};