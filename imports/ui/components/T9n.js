Meteor.startup(function() {
  T9n.setLanguage("pt");

  var pt = {
    error: {
      accounts: {
        "Match failed": "Erro de Validação"
      }
    },
    //COURSES
    adm: "Administração",
    sist: "Sistemas de Informação",
    ciencbio: "Ciências Biológias",
    cienccont: "Ciêncais Contábeis",
    edfisic: "Educação Física",
    enferm: "Enfermagem",
    engprod: "Engenharia de Produção",
    farmac: "Farmácia",
    fisiot: "Fisioterapia",
    gastro: "Gastronomia",
    gpi: "Gestão de Produção Industrial",
    grh: "Gestão de Recursos Humanos",
    hist: "História",
    letr: "Letras",
    mat: "Matemática",
    med: "Medicina",
    pedag: "Pedagogia",
    psicol: "Psicologia",
    pubpr: "Publicidade e Propaganda",
    //CATEGORIES
    "advog-lei": "Advogados & Leis",
    "design-cri": "Design & Criação",
    "eng-arq": "Engenharia & Arquitetura",
    "escr-trad": "Escrita & Tradução",
    "fot-audiov": "Fotografia & Audiovisual",
    serv: "Serviços Empresariais",
    suporteadm: "Suporte Administrativo",
    vendas: "Vendas & Marketing",
    "web-desenv": "Web & Desenvolvimento",
    //TYPES
    estagio: "Estágio",
    trainee: "Trainee",
    junior: "Júnior",
    pleno: "Pleno",
    senior: "Sênior",
    freelancer: "Freelancer"
  }

  T9n.map('pt', pt);
});
