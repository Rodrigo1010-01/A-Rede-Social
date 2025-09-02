// Ano atual
document.getElementById('year').textContent = new Date().getFullYear();

// Fundo Matrix
const canvas = document.createElement('canvas');
canvas.classList.add('matrix-canvas');
document.getElementById('matrix-bg').appendChild(canvas);
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@%&!?*+-=~|';
const fontSize = 16;
const columns = Math.floor(canvas.width / fontSize);
const drops = Array(columns).fill(0);

function drawMatrix() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#0f0';
  ctx.font = `${fontSize}px 'Share Tech Mono'`;

  for (let i = 0; i < drops.length; i++) {
    const char = chars.charAt(Math.floor(Math.random() * chars.length));
    ctx.fillText(char, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.97) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(drawMatrix, 50);

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Digitação da sinopse
const synopsisText = `Mark Zuckerberg, um estudante de Harvard em 2003, cria um site chamado "Facemash", que rapidamente se torna viral na universidade. Inspirado por isso, ele começa a desenvolver uma rede social para conectar estudantes: o "The Facebook". Com a ajuda do amigo Eduardo Saverin, o projeto cresce exponencialmente. No entanto, à medida que o Facebook se expande para outras universidades e depois para o mundo, Mark enfrenta acusações de traição de amigos, roubo de ideias por parte dos gêmeos Cameron e Tyler Winklevoss, e a perda de sua própria humanidade no caminho do sucesso. O filme é narrado através de depoimentos em tribunal, mostrando a ascensão meteórica do Facebook e o preço pessoal pago por seu criador.`;

function typeWriter(element, text, speed = 35) {
  let i = 0;
  element.innerHTML = '';
  const timer = setInterval(() => {
    if (i < text.length) {
      element.innerHTML += text.charAt(i) === '\n' ? '<br>' : text.charAt(i);
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}

// Carregar tudo
window.onload = function () {
  const synopsisEl = document.getElementById('synopsis-text');
  typeWriter(synopsisEl, synopsisText);
  createAccordion();

  const scrollToTopBtn = document.getElementById('scrollToTop');
  window.onscroll = () => {
    if (window.scrollY > 300) {
      scrollToTopBtn.style.display = 'block';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  };

  scrollToTopBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
};

// Perguntas e respostas
const questions = [
  {
    q: "1. Qual é o tema principal do filme \"A Rede Social\"?",
    a: "O tema principal do filme é a ascensão do Facebook e a complexa jornada de Mark Zuckerberg na criação da rede social. O filme explora temas como amizade, traição, ambição, genialidade e os custos pessoais do sucesso. Também aborda questões de propriedade intelectual, rivalidades universitárias e a transformação da forma como as pessoas se conectam."
  },
  {
    q: "2. Qual é o impacto do sucesso do Facebook na vida de Mark Zuckerberg?",
    a: "O sucesso do Facebook transforma a vida de Mark Zuckerberg em uma trajetória de riqueza e poder, mas também traz isolamento emocional e perda de relacionamentos pessoais. Ele se distancia de seus amigos mais próximos, como Eduardo Saverin, e enfrenta processos judiciais por traição e roubo de ideias. O filme mostra que, apesar de sua conquista monumental, Zuckerberg se torna uma figura solitária, simbolizada pela cena final em que ele envia uma solicitação de amizade à ex-namorada, buscando conexão em uma plataforma que ele criou, mas que não consegue preencher sua solidão."
  },
  {
    q: "3. Descreva como o filme \"A Rede Social\" mostra a relação entre a tecnologia e a sociedade. Quais são os principais pontos positivos e negativos dessa relação?",
    a: "O filme mostra que a tecnologia pode revolucionar a forma como as pessoas se comunicam e se conectam, democratizando o acesso à informação e criando novas formas de interação social. Esse é o lado positivo: o Facebook une pessoas, facilita relacionamentos e transforma a cultura digital. No entanto, o lado negativo é destacado através da desumanização das relações, onde conexões virtuais substituem laços reais, e a ambição tecnológica leva à traição, litígios e alienação. O filme sugere que, embora a tecnologia una o mundo, ela também pode isolar o indivíduo em sua própria criação."
  },
  {
    q: "4. Qual é a mensagem que o filme \"A Rede Social\" transmite sobre a importância da ética e da responsabilidade no mundo dos negócios e da tecnologia? O que você acha dessa mensagem?",
    a: "A mensagem central é que o sucesso tecnológico e empresarial não deve vir à custa da ética, da lealdade e da responsabilidade. O filme critica a maneira como ideias são apropriadas, parcerias são traídas e pessoas são descartadas no caminho para o poder. Mark Zuckerberg é retratado como um gênio, mas também como alguém que falha em manter vínculos humanos e agir com integridade. Acho essa mensagem muito relevante: inovação é importante, mas deve andar lado a lado com valores morais. O filme serve como um alerta sobre os perigos de priorizar o sucesso acima de tudo."
  }
];

// Criar acordeão
function createAccordion() {
  const accordionContainer = document.getElementById('accordion');
  questions.forEach(item => {
    const itemEl = document.createElement('div');
    itemEl.classList.add('accordion-item');

    const questionBtn = document.createElement('button');
    questionBtn.classList.add('accordion-question');
    questionBtn.textContent = item.q;

    const answerEl = document.createElement('div');
    answerEl.classList.add('accordion-answer');
    answerEl.textContent = item.a;

    itemEl.appendChild(questionBtn);
    itemEl.appendChild(answerEl);
    accordionContainer.appendChild(itemEl);

    questionBtn.addEventListener('click', () => {
      const isActive = questionBtn.classList.toggle('active');
      answerEl.classList.toggle('open');

      document.querySelectorAll('.accordion-item').forEach(el => {
        if (el !== itemEl) {
          el.querySelector('.accordion-question').classList.remove('active');
          el.querySelector('.accordion-answer').classList.remove('open');
        }
      });
    });
  });
}