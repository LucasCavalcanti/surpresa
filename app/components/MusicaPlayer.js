'use client'
import { useEffect, useRef, useState } from 'react';
import '../css/MusicaPlayer.css';

const musicas = [
  '/musicas/tribalistas.mp3',
  '/musicas/turning-page.mp3',
  '/musicas/iris.mp3',
  '/musicas/the-night-we-met.mp3',
  '/musicas/yellow.mp3',
];

export default function MusicaPlayer() {
  const audioRef = useRef(null);
  const [erro, setErro] = useState(false);
  const [indiceAtual, setIndiceAtual] = useState(0);
  const [tocando, setTocando] = useState(true);
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = volume;
      const play = audio.play();
      if (play !== undefined) {
        play
          .then(() => setTocando(true))
          .catch(() => {
            setErro(true);
            setTocando(false);
          });
      }
    }
  }, [indiceAtual]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const tocarManual = () => {
    audioRef.current.play();
    setErro(false);
    setTocando(true);
  };

  const pausar = () => {
    audioRef.current.pause();
    setTocando(false);
  };

  const tocarProxima = () => {
    setIndiceAtual((prev) => (prev + 1) % musicas.length);
  };

  const tocarAnterior = () => {
    setIndiceAtual((prev) => (prev - 1 + musicas.length) % musicas.length);
  };

  return (
    <div className="musica-player">
      <audio
        ref={audioRef}
        src={musicas[indiceAtual]}
        onEnded={tocarProxima}
        loop={false}
        autoPlay
      />
      {erro ? (
        <button className="btn-audio" onClick={tocarManual}>Tocar música 🎶</button>
      ) : (
        <>
          <button className="btn-controle" onClick={tocarAnterior}>⏮️</button>

          <button className="btn-controle" onClick={tocando ? pausar : tocarManual}>
            {tocando ? '⏸️ Pausar' : '▶️ Tocar'}
          </button>

          <button className="btn-controle" onClick={tocarProxima}>⏭️</button>

          <div className="controle-volume">
            🔉
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
            />
          </div>
        </>
      )}
    </div>
  );
}
