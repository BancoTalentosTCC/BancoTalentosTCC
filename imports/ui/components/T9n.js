Meteor.startup(function() {
  T9n.setLanguage("pt");

  var pt = {
    error: {
      accounts: {
        "Match failed": "Erro de Validação"
      }
    },
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
    pubpr: "Publicidade e Propaganda"
  }

  T9n.map('pt', pt);
});
