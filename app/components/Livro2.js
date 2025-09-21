'use client'
import { useState } from 'react';
import CoracoesFlutuantes from '../components/CoracoesFlutuantes';
import '../css/LivroDois.css'; 

export default function LivroLuxo() {
  const paginas = [
    
    {
      titulo: 'CAPÍTULO 1',
    },

    {
      titulo: 'Camille',
      texto: 'Vamos falar um pouco sobre a Camille, ou melhor, a minha tampinha. Meu exemplo de amor. Minha cura, uma das mulheres mais fortes que conheci na vida. \nSabe, meu amor, eu costumava me achar uma pessoa forte, até conhecer você. Você é um exemplo de bravura, força, coragem. Você me orgulha muito! Passou por tantas coisas sozinha, calada, você e sua mania de sempre achar que vai incomodar alguém por precisar de ajuda. Lembro no começo quando começamos a conversar sobre nossas vidas, sobre coisas que já passamos, e você sempre se resguardou muito em falar, sabe? Você era muito fechada para falar sobre você, seu passado, coisas assim, e eu sabia que tinha algum motivo.'
    },

    {
      titulo: 'Passos',
      texto: 'Por isso eu sabia que com você eu precisaria dar passos leves e curtos pra que tudo corresse no seu tempo e que eu não forçasse nada. Eu tinha muito medo de parecer invasivo com sua vida, de ser desrespeitoso. Apesar de você ser mais fechada em falar da sua vida, eu via que você precisava disso e que aconteceria em algum momento, assim como foi comigo; desde sempre percebi que éramos muito parecidos, nossas histórias, gostos, enfim.'
    },


    {
        titulo: 'Minha Guerreira',
        texto: 'Você é incrivelmente forte. Mesmo quando tudo parecia desabar, você segurou firme, enfrentou cada desafio e nunca deixou o brilho se apagar. Eu te admiro profundamente e sinto muito orgulho de você. Cada cicatriz, cada lágrima que você derramou, só mostra o tamanho da sua coragem. Eu sei que nem sempre foi fácil, mas mesmo nos momentos mais sombrios, você encontrou uma forma de seguir em frente. Isso me inspira a ser melhor todos os dias e me faz te amar ainda mais.'
    },
    {
        titulo: 'Força Silenciosa',
        texto: 'Sei que você já passou por muita coisa e muitas vezes preferiu ficar em silêncio. Quero que saiba que cada batalha sua me inspira, e eu amo cada parte de quem você é. Mesmo quando não falava, eu sentia sua força, sua dignidade e seu coração gigante. Você transformou suas dores em aprendizado e suas lutas em exemplo. É incrível perceber como você consegue ser firme e doce ao mesmo tempo, e eu nunca vou deixar de admirar isso.'
    },
    {
        titulo: 'Minha Confidente',
        texto: 'Ter você ao meu lado é um presente. Você me ensinou a ser melhor, a enxergar a vida de uma forma mais leve e verdadeira. Cada momento contigo é precioso e inesquecível. Eu posso confiar em você de forma absoluta, e a maneira como você me escuta, me entende e me apoia é algo raro e único. Eu sei que posso ser eu mesmo, com todos os meus defeitos, e mesmo assim você me acolhe com amor. Isso me faz querer retribuir todo dia, cada gesto, cada palavra, cada carinho.'
    },
    {
        titulo: 'Orgulho Sem Fim',
        texto: 'Não há palavras suficientes para expressar o orgulho que sinto por você. Sua coragem, sua determinação e seu coração gigante me fazem te amar cada vez mais. Cada conquista sua me emociona profundamente, e mesmo nos momentos em que você não percebe, eu estou aqui celebrando cada vitória sua. Quero ser seu parceiro, seu apoio e sua torcida em todos os momentos, porque você merece o mundo inteiro e muito mais. O orgulho que sinto por você não cabe no peito, é imenso e eterno.'
    },
    {
        titulo: 'Meu Amor Maior',
        texto: 'Eu te amo para um caralho. Amo seu jeito, sua força, suas conquistas e até suas vulnerabilidades. Você é a pessoa mais importante da minha vida e sempre será. Eu amo cada sorriso seu, cada olhar, cada risada, cada abraço. Amo como você transforma qualquer dia comum em algo especial só por estar presente. Te amar é a coisa mais natural e intensa que já senti, e eu quero passar todos os dias da minha vida te mostrando isso.'
    },
    {
        titulo: 'Nossa História',
        texto: 'Cada passo que damos juntos é uma celebração do que somos. A vida ao seu lado é a melhor coisa que já me aconteceu. Obrigado por me permitir te amar e viver esse amor. Eu penso em cada momento que compartilhamos, desde os mais simples até os mais memoráveis, e sinto gratidão por cada segundo. Você me mostrou a beleza de dividir a vida com alguém que realmente importa, e eu prometo honrar nossa união todos os dias, respeitando, amando e cuidando de você como você merece.'
    },
    {
        titulo: 'Resiliência Admirável',
        texto: 'Você enfrentou tantos desafios e nunca se deixou abater. A maneira como encara a vida, mesmo depois de tudo que passou, me inspira todos os dias. Sua resiliência me mostra que o impossível é apenas um obstáculo a ser superado, e que com você, tudo é possível. Eu admiro cada gesto de coragem, cada decisão tomada com firmeza, e tudo isso faz com que eu me orgulhe imensamente de você.'
    },
    {
        titulo: 'Luz em Minha Vida',
        texto: 'Você trouxe luz aos meus dias mais escuros. Quando eu estava perdido, você me encontrou e me mostrou que o amor pode transformar tudo. Seu sorriso, sua energia e sua presença são a força que move o meu coração. Eu quero passar cada momento ao seu lado, absorvendo sua luz e retribuindo o carinho, a proteção e o amor que você sempre me dá.'
    },
    {
        titulo: 'Minha Inspiração',
        texto: 'Cada vitória sua, cada pequena conquista, cada gesto de bondade e força me inspira a ser melhor. Você não imagina o quanto me motiva a crescer, a lutar e a me tornar uma pessoa mais completa. Eu vejo em você a perfeição imperfeita da vida e isso me encanta profundamente. Eu te amo e quero que saiba que sempre estarei aqui, aprendendo com você e admirando tudo que você é.'
    },
    {
        titulo: 'Minha Confiança',
        texto: 'Mesmo nos momentos em que preferia guardar tudo para si, eu sempre admirei sua confiança silenciosa. Você me ensinou que amar alguém é também acreditar em quem se ama, e isso fortaleceu nossa relação. Eu quero ser merecedor de toda a confiança que você deposita em mim, e prometo honrar cada gesto de carinho e cuidado que você me dá.'
    },
    {
        titulo: 'Você é Minha Casa',
        texto: 'Estar ao seu lado é sentir que estou em casa. Você me acolhe com seu coração, sua atenção e sua calma, mesmo quando o mundo parece caótico. Eu sinto paz e alegria em cada momento contigo, e nada no mundo se compara a essa sensação. Você é meu porto seguro, meu lugar de conforto e felicidade, e eu quero passar a vida inteira construindo essa casa juntos, sempre ao seu lado.'
    },
    {
        titulo: 'Orgulho e Amor',
        texto: 'Eu me orgulho de tudo que você é, de cada batalha que enfrentou e de como se manteve íntegra e forte. Você merece todo amor, respeito e cuidado do mundo, e eu quero ser o homem que sempre honra isso. Te amar é um privilégio e um compromisso que eu levo no coração, e cada dia que passa eu só quero ser melhor para você e para nós dois.'
    },
    {
    titulo: 'Desculpas do Coração',
    texto: 'Quero aproveitar este momento para te pedir desculpas. Se em algum instante fui indelicado, impaciente ou quis apressar algo que precisava de mais tempo, saiba que nunca foi por falta de amor ou respeito. Eu te amo profundamente e reconheço que você merece todo cuidado, toda atenção e todo carinho do mundo. Meu coração se arrepende de cada pequeno erro, e eu prometo aprender e sempre te respeitar como você merece, em cada gesto, em cada palavra e em cada momento da nossa vida juntos.'
    },
    {
    titulo: 'CAPÍTULO 2',
    },
    {
        titulo: 'Meu melhor momento',
        texto: 'Para mim, hoje estou vivendo o meu melhor momento como pessoa, me tornando mais forte, e sei que sem você isso não seria possível. Desde que você apareceu, melhoro como pessoa, como filho, como irmão, como tudo, você me trouxe um novo sentido, um novo rumo para minha vida, desde que você apareceu, eu sinto uma força que nunca senti.'
    },
    {
        titulo: 'Nosso momento',
        texto: 'Eu penso muito em como as coisas aconteceram com a gente, e é muito engraçado como tudo rolou, né? Simplesmente era para ser. Para mim, estamos vivemos o melhor momento da nossa relação, esse é o nosso momento, nossas famílias se conhecendo, sabendo um do outro, as coisas estão finalmente tomando mais sentido. \n Ver minha família feliz sabendo que estou com uma mulher maravilhosa igual a você não tem preço, todos sentem que melhorei desde você, e é a verdade, eu me tornei outra pessoa. Agora sou feliz! \n Ver sua mãe falando de mim, cuidando de mim, me chamando de filho... Meu Deus, eu não achava que viveria isso. '
    },
    {
        titulo: '22/09/2025',
        texto: 'Com certeza esse dia estará para sempre na minha memória, sem dúvida alguma será o dia mais feliz da minha vida. O dia que finalmente sentirei seu cheiro, seu calor, seu toque, seu perfume, o dia em que poderei olhar no fundo dos seus olhos e dizer que te am, eu espero tanto por isso. Saber que vou poder te fazer carinho, te beijar, te abraçar, te mimar, te dar um monte de cheirinhos, eu clamava tanto a Deus por isso, eu não vejo a hora de acontecer logo. E finalmente vai acontecer, meu amor. Faremos muitas coisas juntos e esse vai ser somente o primeiro encontro de muitos, eu sei que vai.'
    },
    {
        titulo: 'Propósito de Deus',
        texto: 'Oro muito a Deus para que ele sempre cuide da gente, para que tudo continue nos trilhos. Nosso amor é propósito de Deus, o que aconteceu com a gente não é algo comum que se vê por aí todos os dias, estávamos destinados a isso, e tudo aconteceu quando Ele quis que acontecesse. Ele uniu nossas histórias, nossas vidas, temos algo muito maior para vivermos juntos e eu creio muito nisso. Sejamos fortes, e quando as coisas parecerem naõ estar certas, conversaremos, resolveremos, e é assim que será sempre, estamos dispostos a fazer dar certo.'
    },
    {
        titulo: 'Sonho',
        texto: 'Quero te ter comigo em todos os momentos da minha vida, quero realizar todos os seus sonhos, cuidar de você, te dar muito amor e carinho. Fazer você feliz é o meu sonho. Eu quero mostrar para a sua mãe que a filha dela achou um cara que ama ela de verdade, que vai cuidar dela e fazer tudo que pode e que não pode para fazê-la feliz. Quero estar ao seu lado nos dias bons e ruins, ser seu porto seguro, compartilhar risadas, conquistas, desafios e planos. Que cada abraço meu te faça sentir protegida e amada. Meu maior desejo é construir uma vida ao seu lado cheia de carinho, cumplicidade e memórias que nenhum tempo poderá apagar. Você é meu presente mais precioso e quero que sinta, todos os dias, o quanto você é importante e amada.'
    },
    {
        titulo: 'Te amo',
        texto: 'Sem dúvidas meu melhor feito da minha vida foi ter te mandado aquela mensagem, eu me agradeço muito por ter te conhecido. Eu te amo mais do que palavras alcançam. E mesmo com quilômetros entre nós, você é a parte mais próxima de mim. Te amo!'
        
    },
    {titulo: 'CAPÍTULO 3'},
    {titulo: 'Só podia ser você',
        texto: 'Quando te conheci foi como se eu tivesse ouvido a minha música preferida pela primeira vez, é como se essa música sempre estivesse dentro de mim, mas só ali, naquele instante, a música voltou a ter som, voltou a ter voz, voltou a ter nome. O SEU nome. É como se o mundo tivesse aberto as cortinas e o sol estivesse lá novamente após ter sumido por muito tempo e ter me deixado no profundo escuro, dizendo: "Começa denovo", e eu começei. E assim começou junto o amor, a calma, a urgência de você.'
    },
    {
        titulo: 'Te amar',
        texto: 'Eu acredito que eu não tive uma escolha em te amar, foi destino, o destino estava cravado em mim, o destino cravado de que você veio para ficar. Você fez com que meus olhos aprendessem a te ver mesmo de tão longe, tua luz mesmo distante reluz o mundo inteiro. E desde então, te vejo em tudo: no doce que minha mãe come, nos arrepios que tenho do nada, na saudade de algo que nem vivemos ainda, na vontade de te sentir. Eu te vejo em tudo, toda hora.'
    },
    {
        titulo: 'Esforço',
        texto: 'Você não fez esforço, creio que por isso eu tenha me rendido a você. Você me conquistou genuinamente, inevitável, sem pressa. Com você o amor virou como o respirar, faço toda hora sem nem perceber mais e ambos tem algo em comum: sem respirar eu morro, assim como sem o seu amor. Só tinha de ser você, meu corpo sabia, meu coração sabia, minha alma sabia, antes mesmo da pele saber. \n\n Antes das nossas almas se encontrarem, antes da vida me dizer: "É ela". \nE é.\n É você, Camille. \n\n Te amar é leveza, te amar me afoga na paz',
    },
    {titulo: 'Minha princesa',
        texto: 'Você é a minha princesa. Você me abraça com palavras em meio as minhas crises. Você é especial, incrível, única. O brilho dos seus olhinhos, as estrelas sentem inveja dele. Você merece o universo inteiro. Você me mostrou o significado de amar, verdadeiramente eu amo todos os seus detalhes, eu sou apaixonado em tudo que envolva você, todos seus detalhes me chamam atenção. Seus olhinhos é a coisinha mais linda desse mundo, seu cabelinho perfeito, sua voz é o som que mais gosto de ouvir, é o meu som preferido. Quero cuidar de você como nunca cuidei de ninguém, nem a mim mesmo, te fazer feliz do jeito que você merece, saiba que você é única, a única que habita e habitou meus pensamentos, você é única em tudo na minha vida.'
    },
    {titulo: 'Caso ninguém tenha te falado',
        texto: 'Mulheres igual a você não se encontra fácil por aí, eu sou realmente muito sortudo. Onde você está as coisas prosperam e melhoram, o seu jeitinho especial cativa a todos. É uma benção de Deus ter você em minha vida, poder falar que te amo sempre, dividir a vida com você, saber que posso contar com você, ter o carinho que você transmite do jeitinho que só você sabe, eu sou muito sortudo mesmo. Nunca se esqueça: você é uma mulher forte, corajosa, valiosa, você merece todo o amor do mundo. Eu não posso te garantir uma vida cara, com jóias, coisas de alto valor, mas o que eu posso te prometer é meu mais sincero amor e minha lealdade. Conta comigo para todo o sempre. Te amo muito.' 
    },
    {titulo: 'CAPÍTULO 4'},
    {titulo: '',
        texto: `Desde que você entrou na minha vida, tudo mudou. Você me ensinou a ver o mundo com outros olhos, a me sentir mais confiante e a acreditar que posso ser melhor. Hoje, não quero conquistar nada apenas por mim — quero conquistar o mundo por nós, para realizar cada sonho seu, para que possamos rir, crescer e nos apoiar juntos em cada vitória e cada desafio.

        Prometo estar ao seu lado em todas as fases da vida, sejam elas boas ou ruins, sejam dias de sol ou tempestades. Quero ser seu abrigo, seu parceiro, seu porto seguro, assim como você sempre é para mim. Quero segurar sua mão em todos os momentos, e você segurar a minha quando eu precisar.

        Sonho com o nosso futuro: com nossa família, nossa sorveteira para fazer sorvetes todos os dias, nossas besteirinhas compartilhadas, nossa casinha decorada com amor, nossas viagens — inclusive para a Itália, juntos, descobrindo o mundo de mãos dadas. Quero beijar você, te amar em todos os lugares, ser feliz com o pouco e, se Deus quiser, com o muito também.

        Quero acordar e dormir ao seu lado todos os dias, cozinhar e fazer comidinhas juntos, deitar e assistir nossas(suas) séries preferidas, rir até a barriga doer e simplesmente viver cada momento com você. Quero escrever nossa história juntos, colecionando lembranças, abraços, risadas e sonhos realizados.

        Cada instante ao seu lado é um presente. Este livro é só uma pequena parte do amor que sinto por você, mas é meu jeito de dizer: eu quero cada dia da minha vida com você, e prometo fazer tudo para que sejamos felizes juntos.`
    },

    {
      titulo: 'Dedicatória',
        texto: `À razão dos meus dias, à minha menina, à minha eternidade.
        Desde que você entrou na minha vida, tudo ganhou cor, sentido e leveza. Você é o abraço que me acalma, o sorriso que me guia, a certeza que me faz seguir. Cada página deste álbum é um pedaço do nosso amor, guardado como um tesouro, escrito não com tinta, mas com o coração.

        Prometo que, enquanto o tempo existir, você será meu capítulo favorito, minha poesia viva, meu para sempre.

        Com todo o amor do mundo,
        do seu pituxinho. ❤️ `,
      imagem: '/fotos/eu.jpg'
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
        Falar de você
        <img src="/imagens/floral.svg" className="decor-bottom" />
        <div className="ornamentos"></div>
        
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

    <div className="mesa-decoracoes">
      

      <div className="velinha">
        <div className="chama"></div>
        <div className="pratinho"></div> {/* NOVO ELEMENTO */}
      </div>
    </div>

  </div>
  );
}
