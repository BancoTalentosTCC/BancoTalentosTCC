password = new SimpleSchema({
  password: {
    type: String,
    label: "Senha",
    min: 8
  },
  password_confirmation: {
    type: String,
    label: "Confirmação de Senha",
    min: 8,
    custom: function() {
      if (this.value !== this.field('password').value) {
        return "cant_be_different";
      }
    }
  }
});
