// ── Frases do efeito de digitação ──────────────────────────────
const TYPING_PHRASES = [
  'Desenvolvedor Full-Stack',
  'Java · C# · PostgreSQL',
  'PostgreSQL · JDBC · REST',
  'Construindo sistemas do zero.',
  '> sempre aprendendo...',
];

// ── Projetos ────────────────────────────────────────────────────
const PROJECTS = [
  {
    id: 'trabalho-bd-java-esports',
    nome: 'Trabalho BD Java E-Sports',
    descricao: 'Aplicação desktop para gerenciamento de torneios de e-sports, integrando Java (Swing) e PostgreSQL. Possui login, CRUD completo e consultas com JOIN para análise de dados.',
    tecnologias: ['Java', 'Swing', 'PostgreSQL', 'JDBC'],
    url: 'https://github.com/Ryan-nextLvl/trabalho-bd-java-esports',
    destaque: true,
  },
  {
    id: 'bin-rio-library',
    nome: 'Bin-rio Library',
    descricao: 'Portfólio interativo com tema Dark Hacker, exibindo projetos, linha do tempo de experiências e contador de visitas por projeto. Chuva de binários animada e efeito de digitação no cabeçalho.',
    tecnologias: ['Django', 'Tailwind CSS', 'SQLite', 'Python'],
    url: 'https://github.com/Ryan-nextLvl/Bin-rio_Library',
    destaque: true,
  },
  {
    id: 'bot-email-sefaz',
    nome: 'Bot E-mail SEFAZ',
    descricao: 'RPA que automatiza o acesso ao portal da SEFAZ, extrai e-mails fiscais, processa documentos e exibe tudo em um dashboard Django com autenticação por cargo.',
    tecnologias: ['Python', 'Django', 'Playwright', 'PostgreSQL'],
    url: 'https://github.com/Ryan-nextLvl',
    destaque: false,
  },
  {
    id: 'whatsapp-sales-bot',
    nome: 'WhatsApp Sales Bot',
    descricao: 'Bot de vendas para WhatsApp com integração ao Mercado Pago, controle de pedidos via Google Sheets e fluxo conversacional automatizado com menu interativo.',
    tecnologias: ['Node.js', 'WhatsApp Web.js', 'Mercado Pago', 'Google Sheets'],
    url: 'https://github.com/Ryan-nextLvl',
    destaque: false,
  },
];

// ── Linha do Tempo ───────────────────────────────────────────────
const TIMELINE = [
  {
    ano: '2025 – atual',
    titulo: 'Desenvolvedor',
    local: 'Projetos Pessoais',
    descricao: 'Desenvolvimento de sistemas web e desktop com Django, Java e Node.js. Integração com APIs externas, bancos PostgreSQL e automações RPA.',
  },
  {
    ano: '2024',
    titulo: 'Estudante de Engenharia de Software',
    local: 'Centro Universitário Santo Agostinho – UNIFSA',
    descricao: 'Curso de Análise e Desenvolvimento de Sistemas. Disciplinas de Banco de Dados, POO, Estrutura de Dados e Engenharia de Software.',
  },
];
