import axios from "axios";

export const getResponse = async (conversation, content) => {
  const data = {
    conversation,
    content
  };

  try {
    const response = await axios.post(
      "http://localhost:3000/api/openai",
      data
    );

    const gptResponse = response.data.gptResponse;
    return gptResponse;
  } catch (error) {
    console.error("Error getting ChatGPT response:", error);
    return "I'm sorry, but I couldn't process your message.";
  }
};


export const handleSubmit = async (event, conversation, content, setContent, setConversation, getResponse) => {
  event.preventDefault();
  const userMessage = content;
  const updatedConversation = [
    ...conversation,
    { role: "user", content: userMessage },
  ];
  setContent("");
  setConversation(updatedConversation);
  const gptResponse = await getResponse(updatedConversation, userMessage);
  setConversation((prevConversation) => [
    ...prevConversation,
    { role: "assistant", content: gptResponse },
  ]);
};


export const handleUserInput = (event, setContent) => {
  setContent(event.target.value);
};
