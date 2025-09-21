'use client'
import { useEffect } from 'react';

export default function CoracoesFlutuantes() {
  useEffect(() => {
    const criarCoracao = () => {
      const coracao = document.createElement('div');
      coracao.className = 'coracao';
      coracao.style.left = `${Math.random() * 100}vw`;
      coracao.style.animationDuration = `${3 + Math.random() * 2}s`;
      document.body.appendChild(coracao);

      setTimeout(() => {
        coracao.remove();
      }, 5000);
    };

    const intervalo = setInterval(criarCoracao, 500);
    return () => clearInterval(intervalo);
  }, []);

  return null;
}
