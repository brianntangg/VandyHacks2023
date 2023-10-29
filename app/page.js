'use client';

import { useChat } from 'ai/react';


export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div className='chatContainer'>
      <div className = 'messagesContainer'>
        {messages.map(m => (
          <div key = {m.id} className = {m.role === 'assistant' ? 'systemMessage' : 'userMessage'}>
            <div className = 'messageContainer'>{m.content}</div>
          </div>
        ))}
      </div>
      <form onSubmit = {handleSubmit} className = 'inputForm'>
        <input value = {input} onChange = {handleInputChange} className = "inputField" placeholder = "Type in your answers" />
      </form>
    </div>
  );
}
