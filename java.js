document.addEventListener('DOMContentLoaded', () => {
    const respostas = {
        resposta1: "O tema principal do filme \"A Rede Social\" é a origem e o crescimento meteórico do Facebook, explorando as complexidades, as rivalidades e as batalhas legais que cercaram sua criação. Além disso, aborda temas como amizade, traição, ambição, inovação tecnológica e o impacto da era digital nas relações humanas.",
        resposta2: "O sucesso do Facebook teve um impacto transformador na vida de Mark Zuckerberg. De um estudante universitário com uma ideia, ele se tornou um dos homens mais jovens e ricos do mundo. No entanto, o filme também sugere que esse sucesso veio acompanhado de isolamento social, perda de amizades significativas e um intenso escrutínio público e legal, mostrando o lado muitas vezes solitário e desafiador da fama e da riqueza extrema.",
        resposta3: "\"A Rede Social\" ilustra de forma contundente a relação entre tecnologia e sociedade. \n\n**Pontos Positivos:**\n*   **Conectividade:** A tecnologia do Facebook permitiu a milhões de pessoas se conectarem e compartilharem informações como nunca antes.\n*   **Inovação:** O filme mostra o espírito empreendedor e a capacidade de transformar uma ideia em algo revolucionário.\n*   **Plataforma de Expressão:** O Facebook se tornou um espaço para pessoas expressarem suas identidades e se organizarem socialmente.\n\n**Pontos Negativos:**\n*   **Desumanização das Relações:** A obsessão pela conectividade online pode levar ao distanciamento em relações reais, como exemplificado pela própria vida de Zuckerberg.\n*   **Questões de Privacidade:** O filme implicitamente levanta questões sobre o uso de dados pessoais e a linha tênue entre inovação e invasão de privacidade.\n*   **Traição e Ambição Desmedida:** A busca pelo sucesso tecnológico, no filme, é retratada como algo que corrói amizades e valores éticos.\n\nO filme sugere que, embora a tecnologia possa unir o mundo, ela também pode expor e amplificar as fraquezas e dilemas da condição humana, como a inveja, a ganância e a necessidade de validação.",
        resposta4: "A mensagem que \"A Rede Social\" transmite sobre a importância da ética e da responsabilidade no mundo dos negócios e da tecnologia é bastante crítica e complexa. O filme sugere que, na busca por inovação e sucesso, a ética e a responsabilidade podem ser facilmente negligenciadas.\n\nEle mostra como a ambição desenfreada e a sede por reconhecimento podem levar a decisões moralmente questionáveis, como a traição de amigos e parceiros de negócios, e a apropriação de ideias. A mensagem implícita é que, mesmo que a tecnologia possa parecer neutra, suas aplicações e o modo como é desenvolvida e gerenciada têm profundas implicações sociais e morais.\n\n**Minha Opinião:** Concordo plenamente com a relevância dessa mensagem. Em um mundo cada vez mais impulsionado pela tecnologia, a reflexão sobre ética e responsabilidade é mais crucial do que nunca. O filme serve como um lembrete poderoso de que o sucesso financeiro e a inovação não devem vir à custa da integridade moral, da justiça e do respeito pelas pessoas. A história de Zuckerberg, como retratada, é um estudo de caso sobre como a falta de ética no início de um projeto pode gerar consequências complexas e duradouras, tanto para os envolvidos quanto para a sociedade em geral. É fundamental que líderes e desenvolvedores de tecnologia considerem o impacto humano e social de suas criações desde o primeiro momento."
    };

    function exibirRespostas() {
        document.getElementById('resposta1').textContent = respostas.resposta1;
        document.getElementById('resposta2').textContent = respostas.resposta2;
        document.getElementById('resposta3').innerHTML = respostas.resposta3.replace(/\n/g, '<br>');
        document.getElementById('resposta4').innerHTML = respostas.resposta4.replace(/\n/g, '<br>');
    }

    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const iniciarExploracaoBtn = document.getElementById('iniciarExploracao');
    if (iniciarExploracaoBtn) {
        iniciarExploracaoBtn.addEventListener('click', () => {
            document.getElementById('perguntas').scrollIntoView({
                behavior: 'smooth'
            });
            exibirRespostas();
        });
    }
});