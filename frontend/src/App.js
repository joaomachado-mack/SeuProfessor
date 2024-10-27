// src/App.js

import React from 'react';
import './App.css';
import QuestionPage from './components/QuestionPage';

function App() {
  const [currentPage, setCurrentPage] = React.useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <div className="header">
            <h1>Bem-vindo ao sistema de aulas de música utilizando IA!</h1>
            <h2>Explore e aprenda de forma interativa!</h2>
          </div>
        );
      case 'question':
        return <QuestionPage />;
      case 'register':
        return <div>Cadastrar-se</div>; // Você pode substituir isso pela sua página de cadastro
      case 'contact':
        return <div>Contato</div>; // Você pode substituir isso pela sua página de contato
      case 'login':
        return <div>Entrar</div>; // Você pode substituir isso pela sua página de login
      default:
        return <div>Bem-vindo!</div>;
    }
  };

  return (
    <div className="App">
      <header className="navbar">
        <button className="nav-link" onClick={() => setCurrentPage('home')}>Home</button>
        <button className="nav-link" onClick={() => setCurrentPage('register')}>Cadastro</button>
        <button className="nav-link" onClick={() => setCurrentPage('contact')}>Contato</button>
        <button className="nav-link" onClick={() => setCurrentPage('question')}>Aulas</button>
      </header>
      {renderPage()}
      <div className="card">
        <h3>Instruções</h3>
        <p>Aqui você pode acessar as aulas, se cadastrar, e muito mais.</p>
        <button className="button" onClick={() => setCurrentPage('question')}>Começar</button>
      </div>
    </div>
  );
}

export default App;
