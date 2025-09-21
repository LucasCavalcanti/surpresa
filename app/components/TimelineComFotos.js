'use client';
export default function TimelineComFotos() {
  const eventos = [
    {
      data: '09/12/2024',
      titulo: 'O dia que nos conhecemos melhor 💝',
      descricao: 'Foi o começo de tudo. Mal sabíamos o quanto iríamos nos amar.',
      imagem: '/fotos/primeirodia.png'
    },
    {
      data: '21/03/2025',
      titulo: 'Nossa primeira chamada 💝',
      descricao: 'Mesmo à distância, estávamos conectados em alma e coração.',
      imagem: '/fotos/chamada.jpg'
    },
    {
      data: '21/03/2025',
      titulo: 'Nosso primeiro bolo 💝',
      descricao: 'Mesmo longe, sempre juntos.',
      imagem: '/fotos/bolo.jpg'
    },
    {
      data: '12/06/2025',
      titulo: 'Nosso 1º presente de Dia dos Namorados 💝',
      descricao: 'Distância nenhuma impede o amor verdadeiro.',
      imagem: '/fotos/primeiropresente.png'
    },
    {
      data: '03/07/2025',
      titulo: '207 dias juntos 💝',
      descricao: 'Cada dia contigo é um capítulo lindo da nossa história.',
      imagem: '/fotos/hoje.jpg'
    }
  ];

  return (
    <section className="timeline-zigue">
      <h2>Nossa Linha do Tempo 💫</h2>
      {eventos.map((evento, index) => (
        <div className={`item ${index % 2 === 0 ? 'esquerda' : 'direita'}`} key={index}>
          <div className="imagem">
            <img src={evento.imagem} alt={evento.titulo} />
          </div>
          <div className="texto">
            <span className="data">{evento.data}</span>
            <h3>{evento.titulo}</h3>
            <p>{evento.descricao}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
