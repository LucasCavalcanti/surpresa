'use client'
import { useState } from 'react';

export function EstrelasMagicas() {
  const mensagens = [
    "Você é a estrela mais brilhante do meu céu.",
    "Te amo mais do que palavras podem dizer.",
    "Nosso amor atravessa qualquer distância.",
    "Cada batida do meu coração chama por você."
  ];

  const [mensagem, setMensagem] = useState('');

  const handleClick = () => {
    const random = mensagens[Math.floor(Math.random() * mensagens.length)];
    setMensagem(random);
  };

  return (
    <div className="estrelas-container">
      {[...Array(5)].map((_, i) => (
        <div
          className="estrela"
          key={i}
          onClick={handleClick}
          style={{ top: `${20 + i * 10}%`, left: `${10 + i * 15}%` }}
        ></div>
      ))}
      {mensagem && <div className="mensagem-estrela">{mensagem}</div>}
    </div>
  );
}
