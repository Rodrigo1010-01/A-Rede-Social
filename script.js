// Ano atual
document.getElementById('year').textContent = new Date().getFullYear();

// Matrix
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
  ctx.font = `${fontSize}px "Share Tech Mono"`;

  for (let i = 0; i < drops.length; i++) {
    const char = chars[Math.floor(Math.random() * chars.length)];
    ctx.fillText(char, i * fontSize, drops[i] * fontSize);
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.97) drops[i] = 0;
    drops[i]++;
  }
}
setInterval(drawMatrix, 50);

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Digitação da sinopse
const synopsisText = `ANÁLISE INICIADA...\n\nO filme "A Rede Social" é um retrato visceral da ascensão meteórica do Facebook e do gênio conturbado por trás dele: Mark Zuckerberg.\n\nEm 2003, em Harvard, Mark — um programador brilhante, mas socialmente isolado — cria um site chamado "Facemash", onde estudantes avaliam a atratividade um do outro. O site viraliza, mas causa polêmica e o coloca em conflito com a universidade.\n\nInspirado pelo sucesso, ele começa a desenvolver uma rede social chamada "The Facebook", com a ajuda do amigo Eduardo Saverin. O projeto cresce exponencialmente, expandindo-se para outras universidades e, em seguida, para o mundo.\n\nNo entanto, à medida que o Facebook se transforma em um fenômeno global, Mark enfrenta acusações de traição, roubo de ideias e quebra de acordos. Os gêmeos Cameron e Tyler Winklevoss o processam, alegando que ele roubou a ideia deles. Eduardo Saverin, seu sócio fundador, também o processa após ser diluído no capital da empresa.\n\nO filme é narrado em paralelo com depoimentos em tribunal, mostrando como o sucesso tecnológico foi alcançado a um alto custo humano. Mark se torna bilionário, mas perde amigos, relações e, em muitos sentidos, sua própria humanidade.\n\nA cena final é icônica: Mark, sozinho em seu escritório, envia uma solicitação de amizade à sua ex-namorada Erica, enquanto ouve as mensagens dela sendo digitadas. Ele a adiciona, mas ela não aceita. Um homem que conectou bilhões está, no fundo, profundamente sozinho.\n\n"A Rede Social" não é apenas a história de uma startup. É um alerta sobre os perigos da ambição desmedida, da ética negligenciada e do preço que se paga pela inovação sem empatia.`;

function typeWriter(el, text, speed = 35) {
  let i = 0;
  el.innerHTML = '';
  const timer = setInterval(() => {
    if (i < text.length) {
      el.innerHTML += text.charAt(i) === '\n' ? '<br>' : text.charAt(i);
      i++;
    } else clearInterval(timer);
  }, speed);
}

// Perguntas e respostas com profundidade e linguagem humanizada
const questions = [
  {
    q: "1. Qual é o tema principal do filme \"A Rede Social\"?",
    a: "O tema principal vai muito além da criação do Facebook. É sobre o preço da genialidade em um mundo que valoriza conexão, mas promove isolamento. O filme mostra como a busca por reconhecimento, validação e poder pode corroer laços humanos. Mark Zuckerberg não está apenas construindo uma rede social — ele está tentando preencher um vazio emocional com código, escala e controle. No fim, ele tem bilhões de conexões, mas nenhuma que realmente o veja. É uma tragédia moderna disfarçada de sucesso."
  },
  {
    q: "2. Qual é o impacto do sucesso do Facebook na vida de Mark Zuckerberg?",
    a: "O impacto é profundo e trágico. O sucesso o eleva a um patamar de poder e riqueza inimaginável, mas custa sua humanidade. Ele perde Eduardo, seu único amigo verdadeiro; trai os Winklevoss, que confiaram nele; e ignora Erica, a pessoa que tentou lhe mostrar empatia. O Mark final não é um vencedor — é um homem solitário, sentado em um prédio de vidro, ouvindo a digitação de uma ex-namorada que não responde. O Facebook conectou o mundo, mas não conseguiu conectar ele a si mesmo."
  },
  {
    q: "3. Descreva como o filme \"A Rede Social\" mostra a relação entre a tecnologia e a sociedade. Quais são os principais pontos positivos e negativos dessa relação?",
    a: "O filme mostra que a tecnologia pode ser uma ferramenta poderosa para unir pessoas, democratizar o acesso à informação e transformar a forma como nos comunicamos — esse é o lado positivo. Mas o lado negativo é igualmente forte: a tecnologia pode desumanizar, acelerar a superficialidade, priorizar dados sobre sentimentos e transformar relações em métricas. O Facebook começou como uma ideia simples entre amigos, mas se tornou uma máquina de escala, onde lealdade, ética e amizade são sacrificadas no altar do crescimento. O filme nos faz perguntar: quantas conexões digitais precisamos para nos sentirmos verdadeiramente conectados?"
  },
  {
    q: "4. Qual é a mensagem que o filme \"A Rede Social\" transmite sobre a importância da ética e da responsabilidade no mundo dos negócios e da tecnologia? O que você acha dessa mensagem?",
    a: "A mensagem é clara: inovação sem ética é destrutiva. O filme critica a cultura de 'mova rápido e quebre coisas', mostrando que o que se quebra muitas vezes são laços humanos, princípios e justiça. Mark é um gênio, mas falha como ser humano — e isso tem consequências. Acho essa mensagem essencial. Tecnologia deve servir às pessoas, não usá-las. O verdadeiro progresso não é medido por usuários ativos, mas por quanto bem ele faz ao mundo. E nisso, o filme nos deixa um alerta: o código pode ser limpo, mas a consciência, nem sempre."
  }
];

// Criar acordeão
function createAccordion() {
  const container = document.getElementById('accordion');
  questions.forEach(item => {
    const itemEl = document.createElement('div');
    
    const btn = document.createElement('button');
    btn.classList.add('accordion-question');
    btn.textContent = item.q;

    const ans = document.createElement('div');
    ans.classList.add('accordion-answer');
    ans.textContent = item.a;

    itemEl.appendChild(btn);
    itemEl.appendChild(ans);
    container.appendChild(itemEl);

    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
      ans.classList.toggle('open');
      
      document.querySelectorAll('.accordion-answer').forEach(a => {
        if (a !== ans) a.classList.remove('open');
      });
      document.querySelectorAll('.accordion-question').forEach(b => {
        if (b !== btn) b.classList.remove('active');
      });
    });
  });
}

// Carregar tudo ao iniciar
window.onload = function () {
  typeWriter(document.getElementById('synopsis-text'), synopsisText);
  createAccordion();

  const scrollToTop = document.getElementById('scrollToTop');
  window.onscroll = () => {
    scrollToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
  };
  scrollToTop.onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
};