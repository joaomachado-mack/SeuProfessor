import React, { useState } from 'react';
import './QuestionPage.css'; // Crie este CSS depois

const QuestionPage = () => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleAskQuestion = () => {
    setResponse(`Você perguntou: "${question}"`);
  };

  return (
    <div className="question-page">
      <h1>Comece aqui suas aulas. Sobre o que você quer saber hoje?</h1>
      <textarea
        value={question}
        onChange={handleQuestionChange}
        placeholder="Digite sua pergunta aqui..."
        rows="4"
      />
      <button onClick={handleAskQuestion}>Enviar Pergunta</button>
      {response && <div className="response">{response}</div>}

      <div className="instructions">
        <h3>Instruções</h3>
        <p>Aqui você pode fazer perguntas à IA. Sinta-se à vontade para explorar e aprender!</p>
      </div>
    </div>
  );
};

export default QuestionPage;
