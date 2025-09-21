'use client'
import { useState, useEffect } from 'react';

export default function Carrossel() {
  const fotos = [
    '/fotos/foto1.jpg',
    '/fotos/foto2.jpg',
    '/fotos/foto3.jpg',
    '/fotos/foto4.jpg',
    '/fotos/foto5.jpg',
    '/fotos/foto6.jpg',
    '/fotos/foto7.jpg',
    '/fotos/foto8.jpg',
    '/fotos/foto10.jpg',
  ];

  const [atual, setAtual] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAtual((prev) => (prev + 1) % fotos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [fotos.length]);

  return (
    <div className="carrossel">
      <img src={fotos[atual]} alt="Foto dela" />
      <div className="botoes">
        <button onClick={() => setAtual((atual - 1 + fotos.length) % fotos.length)}>⟨</button>
        <button onClick={() => setAtual((atual + 1) % fotos.length)}>⟩</button>
      </div>
      <div className="indicadores">
        {fotos.map((_, i) => (
          <span
            key={i}
            className={i === atual ? 'ativo' : ''}
            onClick={() => setAtual(i)}
          >●</span>
        ))}
      </div>
    </div>
  );
}
