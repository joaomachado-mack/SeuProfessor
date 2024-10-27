// src/App.js

import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="navbar">
        <a className="nav-link" href="#">Home</a>
        <a className="nav-link" href="#">Cadastro</a>
        <a className="nav-link" href="#">Contato</a>
        <a className="nav-link" href="#">Entrar</a>
      </header>
      <div className="header">
        <h1>Bem-vindo ao sistema de aulas de música utilizando IA!</h1>
        <h2>Explore e aprenda de forma interativa!</h2>
      </div>
      <div className="card">
        <h3>Instruções</h3>
        <p>Aqui você pode acessar as aulas, se cadastrar, e muito mais.</p>
        <button className="button">Começar</button>
      </div>
    </div>
  );
}

export default App;
