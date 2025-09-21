'use client'
import { useState } from 'react';

export default function Scrapbook() {
  const paginas = [
    {
      titulo: "O começo",
      texto: "Mesmo longe, você chegou tão perto…\nInvadiu meu coração com um simples 'oi' e desde então, tudo mudou."
    },
    {
      titulo: "A saudade",
      texto: "A distância não me assusta.\nO que me assusta é imaginar um mundo sem você nele.\nConto os dias, as horas, os segundos… até finalmente te abraçar."
    },
    {
      titulo: "A certeza",
      texto: "Te amo mais do que palavras alcançam.\nE mesmo com quilômetros entre nós,\nvocê é a parte mais próxima de mim."
    }
  ];

  const [paginaAtual, setPaginaAtual] = useState(0);

  const proximaPagina = () => {
    if (paginaAtual < paginas.length - 1) {
      setPaginaAtual(paginaAtual + 1);
    }
  };

  const paginaAnterior = () => {
    if (paginaAtual > 0) {
      setPaginaAtual(paginaAtual - 1);
    }
  };

  return (
    <div className="scrapbook-container">
      <div className="pagina">
        <h2>{paginas[paginaAtual].titulo}</h2>
        <p>
          {paginas[paginaAtual].texto.split('\n').map((linha, i) => (
            <span key={i}>
              {linha}
              <br />
            </span>
          ))}
        </p>
      </div>
      <div className="navegacao">
        <button onClick={paginaAnterior} disabled={paginaAtual === 0}>
          ← Anterior
        </button>
        <button onClick={proximaPagina} disabled={paginaAtual === paginas.length - 1}>
          Próxima →
        </button>
      </div>
    </div>
  );
}
