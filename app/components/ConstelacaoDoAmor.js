'use client';
import { useState } from 'react';

const estrelas = [
  { id: 1, top: '5%', left: '8%', texto: 'Nossa conexão inesperada na Twitch' },
  { id: 2, top: '15%', left: '85%', texto: '208 dias de amor e cumplicidade' },
  { id: 3, top: '85%', left: '10%', texto: 'Você, minha fortaleza e inspiração' },
  { id: 4, top: '75%', left: '88%', texto: 'O dia que nos conhecemos: 09/12' },
  { id: 5, top: '10%', left: '50%', texto: 'Cada mensagem, cada sorriso' },
];

export default function ConstelacaoFundo() {
  const [msg, setMsg] = useState(null);

  return (
    <>
      <div className="constelacao-fundo">
        {estrelas.map((estrela) => (
          <div
            key={estrela.id}
            className="estrela"
            style={{ top: estrela.top, left: estrela.left }}
            onClick={() => setMsg(estrela.texto)}
            title="Clique para ver a mensagem"
          />
        ))}
      </div>

      {msg && (
        <div className="mensagem-constelacao" onClick={() => setMsg(null)}>
          {msg} <br />
          <small>(Clique para fechar)</small>
        </div>
      )}
    </>
  );
}
