'use client'
import { useState } from 'react';
import '../css/QuizMemorias.css';
import { useRouter } from 'next/navigation';
import CoracoesFlutuantes from '../components/CoracoesFlutuantes';

const perguntas = [
  {
    pergunta: 'Em que dia a gente se conheceu melhor?',
    opcoes: ['08/12/2024', '09/12/2024', '10/12/2024'],
    resposta: '09/12/2024',
    imagem: '/fotos/foto1.jpg',
    mensagem: 'Você acertou! O dia que mudou tudo 💖'
  },
  {
    pergunta: 'Qual é o seu apelido carinhoso favorito pra mim?',
    opcoes: ['Tampinha', 'Lindinha', 'Princesa'],
    resposta: 'Tampinha',
    imagem: '/fotos/foto2.jpg',
    mensagem: 'Tampinha... o nome mais lindo de todos 😍'
  },
  {
    pergunta: 'Onde a gente se conheceu?',
    opcoes: ['Live na Twitch', 'Instagram', 'Jogo de celular'],
    resposta: 'Live na Twitch',
    imagem: '/fotos/foto3.jpg',
    mensagem: 'Quem diria... o amor da minha vida numa live de FiveM 💻❤️'
  },
  {
    pergunta: 'Qual o melhor time do mundo?',
    opcoes: ['Corinthians', 'Flamengo', 'Corinthians', 'Corinthians'],
    resposta: 'Corinthians',
    imagem: '/imagens/corinthians.png',
    mensagem: 'Claro que é Corinthians! 😎'
  },
  {
    pergunta: 'Qual música vai tocar no nosso casamento?',
    opcoes: ['Iris', 'Turning Page', 'Todas as opções'],
    resposta: 'Todas as opções',
    imagem: '/fotos/foto4.jpg',
    mensagem: 'Essa música vai sempre me lembrar você 💕'
  },
];


export default function QuizInicial() {
  const [etapa, setEtapa] = useState(0);
  const [acertos, setAcertos] = useState(0);
  const [respostaCerta, setRespostaCerta] = useState(null); // true, false ou null
  const [opcaoSelecionada, setOpcaoSelecionada] = useState(null);
  const [quizFinalizado, setQuizFinalizado] = useState(false);
  const router = useRouter();


const responder = (opcao) => {
  const atual = perguntas[etapa];
  const correta = opcao === atual.resposta;
  setRespostaCerta(correta);
  setOpcaoSelecionada(opcao);

  if (correta) {
    setAcertos(acertos + 1);
    setTimeout(() => {
      if (etapa + 1 < perguntas.length) {
        setEtapa(etapa + 1);
        setRespostaCerta(null);
        setOpcaoSelecionada(null);
      } else {
        setQuizFinalizado(true);
      }
    }, 4000);
  } else {
    alert('Ops, resposta errada! Tente novamente com carinho ❤️');
  }
};


if (quizFinalizado) {
    return (
      <div className="finalizacao-container">
        <h2>Parabéns, meu amor! 🎉</h2>
        <p>Agora, vamos para outra parte especial :)</p>
        <button className="btn-continuar" onClick={() => router.push('/segredo')}>
          Continuar &rarr;
        </button>
      </div>
    );
  }

  const atual = perguntas[etapa];

  return (
    <div className="quiz-container">
      
  <CoracoesFlutuantes />
      <h2>{atual.pergunta}</h2>
      <div className="opcoes">
        {atual.opcoes.map((op, i) => (
          <button
            key={i}
            onClick={() => responder(op)}
            disabled={respostaCerta === true} // só trava clique se acertou
            className={
            respostaCerta !== null && op === atual.resposta && respostaCerta ? 'certa' :
            respostaCerta === false && op === opcaoSelecionada ? 'errada' :
            ''
          }


          >
            {op}
          </button>
        ))}
      </div>
      {respostaCerta !== null && (
  <div className="feedback">
    <img src={atual.imagem} alt="Recompensa" className="quiz-img" />
    <p>{respostaCerta ? atual.mensagem : 'Ops! Tente de novo!'}</p>
  </div>
)}

    </div>
  );
}
