import React, { useState } from 'react';
import { getResponse, handleUserInput, handleSubmit } from './helpers.jsx';
import '../styles/chat.module.css';

const ChatGPTService = () => {
  const [conversation, setConversation] = useState([]);
  const [content, setContent] = useState("");

  return (
    <div className='chat-container'>
      <ul className='chat-list'>
        {conversation.map((message, index) => (
          <li key={index} className={message.role === 'user' ? 'user-message' : 'assistant-message'}>
            <strong>{message.role}:</strong> {message.content}
          </li>
        ))}
      </ul>
      <form onSubmit={(event) => handleSubmit(event, conversation, content, setContent, setConversation, getResponse)} className='chat-form'>
        <input type='text' value={content} onChange={(event) => handleUserInput(event, setContent)} className='chat-input' />
        <button type='submit' className='chat-button'>Send</button>
      </form>
    </div>
  );
};

export default ChatGPTService;
