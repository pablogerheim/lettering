const forYou = [
  {
    text: "Nunca fez lettering mas tem vontade de aprender.",
    icon: "icone-01-V2.svg",
  },
  { text: "Já desenha mas quer aprimorar suas técnicas.", icon: "icone-2.svg" },
  { text: "Deseja despertar o seu potencial artístico.", icon: "ICON-03.svg" },
  { text: "Deseja conecer um novo hobbie.", icon: "ICON-04.svg" },
  {
    text: "Busca um curso 100% prático, com uma linguagem fácil de aprender.",
    icon: "ICON-05.svg",
  },
];
const receba = [
  "Curso de Lettering Completo",
  "Apostilas de Conteúdo para Dowload",
  "2 Bônus Exclusivos",
  "Acesso ao grupo vip de alunos",
  "Suporte tira dúvidas",
  "Aulas ao vivo todo mês",
  "Acesso vitalício ao curso",
  "Certificado de Conclusão",
  "7 dias de Garantia",
  "70% de Desconto",
];

const teacher = [
  "Prazer, eu sou Camila Pegado, artista profissional há 6 anos e professora de lettering.",
  "Eu vou te mostrar que fazer um lettering lindo e profissional não precisa ser complicado. Não vou te encher de teorias, aqui você aprende  a desenhar na prática.",
  "Centenas de alunos já conseguiram, você também vai conseguir.",
  "Inscreva-se no Curso Lettering na Prática e desperte a artista que existe dentro de você.",
];
const perguntas = [
  {
    id: 1,
    button: "Como eu acesso o Curso?",
    text: "Assim que fizer sua inscrição, o acesso a área de membros chegará no seu e-mail, basta clicar, fazer o login, e começar a assistir às aulas.",
  },
  {
    id: 2,
    button: "Tem grupo de suporte?",
    text: "Sim, temos uma comunidade vip somente para alunos, onde a própria professora responde todos os alunos.",
  },
  {
    id: 3,
    button: "Qual a idade mínima para participar?",
    text: "Não temos uma faixa etária mínima, a professora é bem didática e as aulas são bem passo a passo, hoje temos alunos de todas as idades que variam de 10 até 45 anos. ",
  },
  {
    id: 4,
    button: "Preciso comprar algum material?",
    text: "No início a única coisa que o aluno precisa para começar é, folha de sulfite, lápis, borracha, régua, e uma caneta esferográfica normal. Depois a professora orienta aos poucos quais materias adquirir, mas apenas com esse o aluno já consegue aprender e praticar a arte do lettering.",
  },
  {
    id: 5,
    button: "O Curso é Presencial ou à distância?",
    text: "O Curso é 100% online, e você pode assistir no conforto da sua casa, no seu celular, computador, ou tablet.",
  },
  {
    id: 6,
    button: "Quando começam as aulas?",
    text: "Já começaram, elas estão 100% gravadas, são mais de 90 aulas para você assistir na velocidade que desejar, quantas vezes quiser.",
  },
  {
    id: 7,
    button: "Por quanto tempo terei acesso?",
    text: "Os alunos da próxima turma terão acesso vitalício, isso significa para sempre. Aproveite e faça a sua inscrição para garantir a sua vaga nesta próxima turma.",
  },
];
const url =
  "https://player.vimeo.com/video/689846899?color&autopause=0&loop=0&muted=0&title=0&portrait=0&byline=0&h=6e221cecfe#t=00h00m15s";
const imgStudents = [
    {img: "https://camilapegado.com.br/wp-content/uploads/2022/05/IMG-LNP_VENDAS01-ARTE-ALUNOS_1.jpg", alt: "IMG-LNP_VENDAS01-ARTE-ALUNOS_1.jpg"},
    {img: "https://camilapegado.com.br/wp-content/uploads/2022/05/IMG-LNP_VENDAS01-ARTE-ALUNOS_2.jpg", alt: "IMG-LNP_VENDAS01-ARTE-ALUNOS_2.jpg"},
    {img: "https://camilapegado.com.br/wp-content/uploads/2022/05/IMG-LNP_VENDAS01-ARTE-ALUNOS_3.jpg", alt: "IMG-LNP_VENDAS01-ARTE-ALUNOS_3.jpg"},
    {img: "https://camilapegado.com.br/wp-content/uploads/2022/05/IMG-LNP_VENDAS01-ARTE-ALUNOS_4.jpg", alt: "IMG-LNP_VENDAS01-ARTE-ALUNOS_4.jpg"},
    {img: "https://camilapegado.com.br/wp-content/uploads/2022/05/IMG-LNP_VENDAS01-ARTE-ALUNOS_5.jpg", alt: "IMG-LNP_VENDAS01-ARTE-ALUNOS_5.jpg"},
];
const imgCamila = [
  {img: "https://camilapegado.com.br/wp-content/uploads/2022/05/IMG-LNP-VENDAS01-ARTE-CAMILA-01.jpg", alt: "IMG-LNP-VENDAS01-ARTE-CAMILA-01.jpg"},
  {img: "https://camilapegado.com.br/wp-content/uploads/2022/05/IMG-LNP-VENDAS01-ARTE-CAMILA-02.jpg", alt: "IMG-LNP-VENDAS01-ARTE-CAMILA-02.jpg"},
  {img: "https://camilapegado.com.br/wp-content/uploads/2022/05/IMG-LNP-VENDAS01-ARTE-CAMILA-03.jpg", alt: "IMG-LNP-VENDAS01-ARTE-CAMILA-03.jpg"},
  {img: "https://camilapegado.com.br/wp-content/uploads/2022/05/IMG-LNP-VENDAS01-ARTE-CAMILA-04.jpg", alt: "IMG-LNP-VENDAS01-ARTE-CAMILA-04.jpg"},
  {img: "https://camilapegado.com.br/wp-content/uploads/2022/05/IMG-LNP-VENDAS01-ARTE-CAMILA-05.jpg", alt: "IMG-LNP-VENDAS01-ARTE-CAMILA-05.jpg"}
];

const SubstanceItems = [
  {
    id: 0,
    img: "https://camilapegado.com.br/wp-content/uploads/2022/05/IMG-LNP_VENDAS01_MODULOS-01.jpg",
    alt: "Boas vindas e suporte vip",
    open: false,
    text: "Neste módulo a professora irá te dar as boas vindas e te explicar como você faz para acessar o grupo vip de alunos onde poderá tirar as suas dúvidas.",
  },
  {
    id: 1,
    img: "https://camilapegado.com.br/wp-content/uploads/2022/05/IMG-LNP_VENDAS01_MODULOS-02.jpg",
    alt: "Materiais e referência",
    open: false,
    text: "Descubra quais são os principais materiais usados para fazer lettering, e quais são as referências de livros e profissionais que podem inspirar seu processo criativo.",
  },
  {
    id: 2,
    img: "https://camilapegado.com.br/wp-content/uploads/2022/05/IMG-LNP_VENDAS01_MODULOS-03.jpg",
    alt: "A base do lettering",
    open: false,
    text: "Aprenda passo a passo como iniciar um lettering do jeito certo, usando as principais técnicas  para fazer uma arte bonita e harmônica.",
  },
  {
    id: 3,
    img: "https://camilapegado.com.br/wp-content/uploads/2022/05/IMG-LNP_VENDAS01_MODULOS-04.jpg",
    alt: "Dominando a brush pen",
    open: false,
    text: "Muitas pessoas têm dificuldades de manusear a caneta Brush Pen quando estão começando, nesse módulo você aprende como dominar essa ferramenta.",
  },
  {
    id: 4,
    img: "https://camilapegado.com.br/wp-content/uploads/2022/05/IMG-LNP_VENDAS01_MODULOS-05.jpg",
    alt: "Lettering profissional",
    open: false,
    text: "Aprenda, na prática, todo o processo criativo para fazer um lettering nível profissional.",
  },
  {
    id: 5,
    img: "https://camilapegado.com.br/wp-content/uploads/2022/05/IMG-LNP_VENDAS01_MODULOS-06.jpg",
    alt: "Alfabetos completos",
    open: false,
    text: "Aprenda como fazer diversos tipos de alfabetos para usar no seu lettering.",
  },
  {
    id: 6,
    img: "https://camilapegado.com.br/wp-content/uploads/2022/05/IMG-LNP_VENDAS01_MODULOS-07.jpg",
    alt: "Lettering em paredes",
    open: false,
    text: "Este módulo incrível já valeria todo seu investimento, aqui você aprende o passo a passo para fazer lindos letterings em paredes.",
  },
  {
    id: 7,
    img: "https://camilapegado.com.br/wp-content/uploads/2022/05/IMG-LNP_VENDAS01_MODULOS-08.jpg",
    alt: "Chalk lettering",
    open: false,
    text: "Aprenda como desenhar suas artes em lousas.",
  },
  {
    id: 8,
    img: "https://camilapegado.com.br/wp-content/uploads/2022/05/IMG-LNP_VENDAS01_MODULOS-09.jpg",
    alt: "Personalização do objetos",
    open: false,
    text: "Aprenda na Prática como  Personalizar objetos com a sua arte.",
  },
  {
    id: 9,
    img: "https://camilapegado.com.br/wp-content/uploads/2022/05/IMG-LNP_VENDAS01_MODULOS-10.jpg",
    alt: "Gravação aulas ao vivo",
    open: false,
    text: "Tenha acesso a gravação de todas as aulas ao vivo.",
  },
];

export {
  forYou,
  receba,
  teacher,
  perguntas,
  url,
  SubstanceItems,
  imgStudents,
  imgCamila,
};
