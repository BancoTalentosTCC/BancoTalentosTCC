Meteor.startup(function() {
  T9n.setLanguage("pt");

  var pt = {
    error: {
      accounts: {
        "Match failed": "Erro de Validação"
      }
    }
  }

  T9n.map('pt', pt);
});
