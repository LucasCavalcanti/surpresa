'use client'
import { useRouter } from 'next/navigation';
import CoracoesFlutuantes from '../components/CoracoesFlutuantes';
import '../css/PaginaSecreta.css';

export default function PaginaSecreta() {
  const router = useRouter();
  return (
    <div className="pagina-secreta">
      
  <CoracoesFlutuantes />
      <h1>Surpresa 💌</h1>
      <p>Esse vídeo é só pra você, tampinha.</p>
      <video controls width="100%">
        <source src="/videos/vídeo.mp4" type="video/mp4" />
        Seu navegador não suporta o vídeo.
      </video>
      <button onClick={() => router.push('/livro')}>Ir para o Livro 📖</button>
    </div>
  );
}