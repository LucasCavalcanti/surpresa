'use client'
import { useState } from 'react';
import CoracoesFlutuantes from '../components/CoracoesFlutuantes';
import '../css/Album.css'; 

export default function Album() {
  const paginas = [
    
    
    {
      titulo: 'Uma fotinha sua só para ilustrar 💝',
      imagem: '/fotos/foto6.jpg'
    },
    {
      titulo: 'Uma fotinha sua só para ilustrar 💝',
      imagem: '/fotos/foto3.jpg'
    },
    {
      titulo: 'Uma fotinha sua só para ilustrar 💝',
      imagem: '/fotos/foto2.jpg'
    },
    {
      titulo: 'Uma fotinha sua só para ilustrar 💝',
      imagem: '/fotos/foto4.jpg'
    },


];

  

  const [paginaAtual, setPaginaAtual] = useState(0);
  const [capaAberta, setCapaAberta] = useState(false); // começa aberto

  // Abre ou fecha capa ao clicar nela
  const toggleCapa = () => {
    setCapaAberta(!capaAberta);
  };

  const paginaAnterior = () => {
    if (paginaAtual > 0) setPaginaAtual(paginaAtual - 1);
  };

  const proximaPagina = () => {
    if (paginaAtual < paginas.length - 1) setPaginaAtual(paginaAtual + 1);
  };

  // Clique na área do livro pra virar páginas
  const onClickLivro = (e) => {
    if (!capaAberta) {
      toggleCapa();
      return;
    }
    const largura = e.currentTarget.clientWidth;
    const cliqueX = e.nativeEvent.offsetX;
    if (cliqueX < largura / 2) {
      paginaAnterior();
    } else {
      proximaPagina();
    }
  };

  return (
  <div className="livro-luxo-container" onClick={onClickLivro}>
      
  <CoracoesFlutuantes />
      {/* Capa clicável, fecha se estiver aberta */}
      <div
        className={`capa ${capaAberta ? 'aberta' : ''}`}
        onClick={(e) => { e.stopPropagation(); toggleCapa(); }}
        role="button"
        aria-pressed={capaAberta}
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter') toggleCapa(); }}
      >
        <img src="/imagens/floral.svg" className="decor-top" />
          Nosso Álbum 
        <img src="/imagens/floral.svg" className="decor-bottom" />
        <div className="ornamentos">
          
        </div>
        
      </div>

      {/* Conteúdo visível só se capaAberta */}
      <div className={`conteudo ${capaAberta ? 'visivel' : ''}`}>
        <h2 className="titulo-conteudo">{paginas[paginaAtual].titulo}</h2>
        <p className="texto-conteudo">{paginas[paginaAtual].texto}</p>
        {paginas[paginaAtual].imagem && (
          <img
            src={paginas[paginaAtual].imagem}
            alt={`Imagem da página ${paginaAtual + 1}`}
            className='pagina-imagem'
          />
        )}
      </div>


  </div>
  );
}
