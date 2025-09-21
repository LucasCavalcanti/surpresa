'use client'
import { useState } from 'react';
import Carrossel from './components/Carrossel';
import BotaoFofo from './components/BotaoFofo';
import CartaDeAmor from './components/CartaDeAmor';
import ContadorDias from './components/ContadorDias';
import MusicaPlayer from './components/MusicaPlayer';
import CoracoesFlutuantes from './components/CoracoesFlutuantes';
import PolaroidAlbum from './components/PolaroidAlbum';

import Intro from './components/Intro';
import Scrapbook from './components/Scrapbook';
import FundoDoCeu from './components/FundoDoCeu';
import TimelineComFotos from './components/TimelineComFotos';
import { EstrelasMagicas } from './components/EstrelasMagicas';
import ConstelacaoDoAmor from './components/ConstelacaoDoAmor';
import Link from 'next/link';

export default function Home() {
  const [mostrarIntro, setMostrarIntro] = useState(true);

  if (mostrarIntro) {
    return <Intro onClose={() => setMostrarIntro(false)} />;
  }

  return (
    <>
      {/* Fundo e camadas fixas */}
      <FundoDoCeu />
      <ConstelacaoDoAmor />
      
      {/* Conteúdo principal com scroll */}
      <div className="container" style={{ position: 'relative', zIndex: 10, borderRadius: '10px' }}>
        <CoracoesFlutuantes />
        <Link 
        href="/prepagina"
        style={{
          padding: "12px 24px",
          background: "linear-gradient(45deg, #ff6fa5, #ff3d7a)",
          color: "white",
          borderRadius: "25px",
          textDecoration: "none",
          fontSize: "1.2rem",
          fontWeight: "bold",
          boxShadow: "0 8px 20px rgba(255,61,122,0.4)",
          transition: "all 0.3s ease"
        }}
      >
        26/09
      </Link>
        <h1>09/12 – O dia em que tudo mudou</h1>

        <TimelineComFotos />
        <ContadorDias />
        <CartaDeAmor />
        <Scrapbook />

        <h2>Alguns momentos seus ✨</h2>
        <Carrossel />
        <PolaroidAlbum />

        <h2>Tenho algo pra te dizer</h2>
        <BotaoFofo />

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <button
            onClick={() => window.location.href = '/quiz'}
            style={{
              background: 'linear-gradient(45deg, #ff4e8b, #ff6ec4)',
              border: 'none',
              color: 'white',
              padding: '0.8rem 2rem',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              borderRadius: '12px',
              cursor: 'pointer',
              boxShadow: '0 6px 15px rgba(255, 110, 196, 0.3)',
              transition: 'transform 0.2s ease',
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            Começar o Quiz 💘
          </button>
        </div>
      </div>
    </>
  );
}

