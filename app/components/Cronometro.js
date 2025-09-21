'use client'
import { useEffect, useState } from "react";
import "../css/ContagemRomantica.css";
import CoracoesFlutuantes from '../components/CoracoesFlutuantes';

export default function ContagemRomantica() {
  const viagem = new Date("2025-09-22T00:00:00");
  const [tempoRestante, setTempoRestante] = useState({ dias: "--", horas: "--", minutos: "--", segundos: "--" });
  const [progresso, setProgresso] = useState(0); // 0 a 1

  useEffect(() => {
    const intervalo = setInterval(() => {
      const agora = new Date();
      const diff = viagem - agora;

      const dias = Math.max(Math.floor(diff / (1000 * 60 * 60 * 24)), 0);
      const horas = Math.max(Math.floor((diff / (1000 * 60 * 60)) % 24), 0);
      const minutos = Math.max(Math.floor((diff / (1000 * 60)) % 60), 0);
      const segundos = Math.max(Math.floor((diff / 1000) % 60), 0);

      setTempoRestante({ dias, horas, minutos, segundos });

      const totalDias = Math.ceil((viagem - new Date("2025-01-01T00:00:00")) / (1000*60*60*24));
      setProgresso(1 - dias / totalDias);
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  let mensagem = "A contagem começou… 💌";
  if (tempoRestante.dias <= 10 && tempoRestante.dias > 4) mensagem = "Cada dia mais perto 🌸";
  else if (tempoRestante.dias <= 4 && tempoRestante.dias > 0) mensagem = "Quase chegando! 💖";
  else if (tempoRestante.dias <= 0) mensagem = "Hoje é o dia! ✨❤️";

  return (
    <div className="contagem-container">
      <CoracoesFlutuantes />
      <div className="contagem-content">
        <h1 className="titulo">Contando os dias para te ver 💕</h1>
        <p style={{color: "#7b4c3a"}} className="mensagem">{mensagem}</p>

        <div className="ampulheta">
          <div className="areia" style={{ height: `${progresso * 100}%` }}></div>
        </div>

        <h2 className="cronometro">
          {`${tempoRestante.dias}d : ${tempoRestante.horas}h : ${tempoRestante.minutos}m : ${tempoRestante.segundos}s`}
        </h2>
      </div>
    </div>
  );
}
