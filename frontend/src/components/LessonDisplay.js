import React, { useState } from 'react';
import { fetchLesson } from '../api';

function LessonDisplay() {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await fetchLesson(question);
    setResponse(result);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Faça uma pergunta"
        />
        <button type="submit">Enviar</button>
      </form>
      <p>{response}</p>
    </div>
  );
}

export default LessonDisplay;
