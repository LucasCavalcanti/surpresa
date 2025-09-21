'use client'
import { useState } from 'react';

export default function Intro({ onClose }) {
  return (
    <div className="intro-fundo">
      <div className="intro-conteudo">
        <h1>Essa é a nossa história...</h1>
        <button onClick={onClose}>Entrar</button>
      </div>
    </div>
  );
}
