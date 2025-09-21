"use client";
import CoracoesFlutuantes from '../components/CoracoesFlutuantes';
import "../css/Aniversario.css";
import { useEffect, useState } from "react";


export default function Surpresa() {
  return (
    <div className="page-wrapper">
        <CoracoesFlutuantes/>
      <div className="surpresaContainer">
        <h1>Feliz aniversário, meu amor! 🎂💖</h1>
        <div className="videoWrapper">
          <video
            id="videoMessage"
            controls
            className="videoBox"
            autoPlay
          >
            <source src="/videos/video.mp4" type="video/mp4" />
            Seu navegador não suporta vídeos.
          </video>
        </div>
        <div className="finalMessage">
          <p>Hoje é seu aniversário, mas a verdade é que todos os dias são somente seus. ❤️</p>
        </div>
      </div>
    </div>
  );
}

