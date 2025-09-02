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
  ctx.font = `${fontSize}px 'Share Tech Mono'`;

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
const synopsisText = `Mark Zuckerberg cria o Facebook na universidade, mas o sucesso traz traição, processos e isolamento. Um retrato da genialidade e do custo humano da inovação digital.`;

function typeWriter(el, text, speed = 40) {
  let i = 0;
  el.innerHTML = '';
  const timer = setInterval(() => {
    if (i < text.length) {
      el.innerHTML += text.charAt(i);
      i++;
    } else clearInterval(timer);
  }, speed);
}

// Acordeão
const questions = [
  {
    q: "1. Qual é o tema principal do filme \"A Rede Social\"?",
    a: "O tema principal é a ascensão do Facebook e o preço pessoal do sucesso: ambição, traição e isolamento."
  },
  {
    q: "2. Qual é o impacto do sucesso do Facebook na vida de Mark Zuckerberg?",
    a: "Ele ganha poder e riqueza, mas perde amigos e conexões reais, tornando-se uma figura solitária."
  },
  {
    q: "3. Relação entre tecnologia e sociedade?",
    a: "A tecnologia une pessoas, mas também desumaniza relações e prioriza escala sobre ética."
  },
  {
    q: "4. Mensagem sobre ética e responsabilidade?",
    a: "O filme alerta: inovação sem ética leva à destruição de laços e valores. O sucesso não pode custar a alma."
  }
];

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

window.onload = function () {
  typeWriter(document.getElementById('synopsis-text'), synopsisText);
  createAccordion();

  const scrollToTop = document.getElementById('scrollToTop');
  window.onscroll = () => {
    scrollToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
  };
  scrollToTop.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
};