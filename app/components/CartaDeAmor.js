'use client'
import { useState } from 'react';

export default function CartaDeAmor() {
  const [aberta, setAberta] = useState(false);
  const textoCarta = [
   " Minha Tampinha,",

"Cada dia ao seu lado é um presente que eu agradeço infinitamente. Desde o dia 09 de dezembro, minha vida ganhou um novo sentido — um brilho que só você poderia trazer.",

"Você chegou como uma luz suave, iluminando os cantos mais escuros da minha alma. Desde que te conheci, tudo dentro de mim mudou para melhor. Me tornei alguém mais forte, mais feliz, mais inteiro.",

"Você não é só minha companheira. Você é minha base, minha fortaleza, meu orgulho, minha maior e única companhia todos os dias. Quando meu tio se foi, e o mundo parecia perder a cor, foi você que me estendeu a mão. Mesmo distante fisicamente, seu amor me abraçou. Você ficou — quando tudo o resto parecia partir. E só isso já diz tudo.",

"Nunca vou esquecer do Natal, quando você me mandou aquela foto linda. Eu fiquei completamente apaixonado, olhando pra você e pensando: como alguém pode ser tão linda e ao mesmo tempo tão minha? Aquela imagem ficou gravada no meu coração, iluminando até os dias mais cinzentos.",

"No Ano Novo, mesmo você emburrada comigo porque demorei para responder — e eu me senti um bobo kkkkk — aproveitei aquele momento pra te dizer, com todo meu coração, o quanto eu gostava de você. Foi engraçado e verdadeiro, e eu percebi que até nos pequenos desencontros o nosso amor se fortalece.",

"Eu jamais imaginaria encontrar o amor da minha vida em uma live de FiveM na Twitch. Parece surreal, improvável — mas foi verdadeiro, intenso e transformador. Entre cliques e risadas, você me conquistou. Entre conversas simples, você se tornou tudo. A mulher que eu amo.",

"Hoje, eu não consigo mais imaginar meus dias sem seu sorriso, sem sua voz, sem seu “bom dia” que me aquece, mesmo de longe. Você é o amor da minha vida.",

"Quero viver cada capítulo ao seu lado — quero aprender com você, crescer com você, dividir os silêncios e as euforias, construir nossa família e envelhecer ao seu lado. Quero ver seu rosto todos os dias e sentir o conforto de estar exatamente onde pertenço: com você.",

"Tampinha, eu desejo estar ao seu lado até o último suspiro desta vida — e de todas as outras que vierem. Eu te amo com tudo que sou, com tudo que serei. Você é minha paz, minha inspiração, minha mulher. Obrigado por existir, por ser quem é, por me escolher, por me amar.",

"Mesmo longe, você está comigo em cada pequeno detalhe do meu dia. Em tudo. No meu bom dia com sono, na saudade antes de dormir. Você me inspira, me acalma, me empurra pra frente.",

"Eu amo cada pedacinho seu. Desde sua força até seus jeitos bobos. Desde as conversas profundas até as piadas ruins que a gente ri junto.",

"Quero tudo com você. Os planos grandes e os momentos simples. Quero dividir a vida, a casa, os sonhos, o silêncio. Quero que a gente construa o que ninguém acredita mais: um amor que dura, que cresce, que floresce.",

"Me orgulho tanto de quem você é, Tampinha. Você é forte, intensa, linda, e me dá paz.",

"Eu não sei o que o futuro guarda, mas sei com quem quero vivê-lo: com você.",

"Prometo cuidar de você, amar você e te fazer feliz todos os dias.",

"Eu te amo — e vou amar, sempre.",

"Com todo o meu amor,",
"Seu pituxo 💖"
  ];

  return (
    <>
      <button className="btn-abrir-carta" onClick={() => setAberta(true)}>
        Abrir Carta de Amor 💌
      </button>

      {aberta && (
        <div className="overlay-carta" onClick={() => setAberta(false)}>
          <div className="carta" onClick={e => e.stopPropagation()}>
            {textoCarta.map((linha, i) => (
              <p key={i} style={{animationDelay: `${i * 1.2}s`}} className="linha-animada">{linha}</p>
            ))}
            <button style={{fontFamily: 'monospace', animationDelay: `${textoCarta.length * 1.2}s`}} className="btn-fechar" onClick={() => setAberta(false)}>X</button>
          </div>
          <Confete />

          <img
            src="/fotos/foto9.jpg"
            alt="Nós dois"
            className="imagem-carta"
            style={{
                maxWidth: '100%',
                width: '300px',
                height: 'auto',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                objectFit: 'cover',
                marginBottom: '1rem'
            }}
            />

        </div>
      )}
    </>
  );
}

function Confete() {
  // Confetes simples animados na tela
  return (
    <div className="confete-container">
      {[...Array(50)].map((_, i) => (
        <div key={i} className="confete"></div>
      ))}
    </div>
  );
}
