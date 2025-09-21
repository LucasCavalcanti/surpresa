export default function PolaroidAlbum() {
  const fotos = [
    { src: '/fotos/foto1.jpg', legenda: 'A minha bebêzinha' },
    { src: '/fotos/foto5.jpg', legenda: 'Minha princesinha' },
    { src: '/fotos/foto4.jpg', legenda: 'Gostosa, linda, a minha modelo ' },
    { src: '/fotos/foto6.jpg', legenda: 'A mulher mais linda desse mundo' },
    { src: '/fotos/foto7.jpg', legenda: 'O olhar mais encantador que eu já vi' },
    { src: '/fotos/foto8.jpg', legenda: 'O sorriso mais belo dentre todos' },
    { src: '/fotos/foto2.jpg', legenda: 'Para sempre você vai ser essa bebezinha, para sempre!' },
    { src: '/fotos/foto10.jpg', legenda: 'Minha tampinha, minha melhor amiga' },
    { src: '/fotos/foto3.jpg', legenda: 'Minha eterna nenémzinha' },
  ];

  return (
    <div className="polaroid-album">
      {fotos.map(({ src, legenda }, i) => (
        <div className="polaroid" key={i}>
          <img src={src} alt={legenda} />
          <p>{legenda}</p>
        </div>
      ))}
    </div>
  );
}
