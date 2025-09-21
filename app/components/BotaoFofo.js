'use client'
import { useState, useEffect } from 'react';

export default function BotaoFofo() {
  const mensagem = 'Você é o amor da minha vida. Obrigado por existir e ser tudo o que sou. 💖';
  const [mostrar, setMostrar] = useState(false);
  const [textoDigitado, setTextoDigitado] = useState('');

  useEffect(() => {
    if (!mostrar) {
      setTextoDigitado('');
      return;
    }

    let idx = 0;
    const intervalo = setInterval(() => {
      setTextoDigitado((prev) => {
        const proximoTexto = mensagem.slice(0, idx + 1);
        idx++;
        if (idx === mensagem.length) {
          clearInterval(intervalo);
        }
        return proximoTexto;
      });
    }, 50);

    return () => clearInterval(intervalo);
  }, [mostrar]);

  return (
    <div className="mensagem-fofa">
      <button onClick={() => setMostrar((m) => !m)}>
        {mostrar ? 'Ocultar mensagem' : 'Clique aqui 💌'}
      </button>
      {mostrar && <p>{textoDigitado}</p>}
    </div>
  );
}
