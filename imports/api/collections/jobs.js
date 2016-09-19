Jobs = new Mongo.Collection("jobs");

Jobs.allow({
  insert: function(userId, doc) {
    return Roles.userIsInRole(userId, 'company', 'user-type');
  },
  update: function(userId, doc) {
    return doc.company === user_Id;
  },
  remove: function(userId, doc) {
    return doc.company === user_Id;
  }
});


Job = new SimpleSchema({
  categoria: {
    type: String,
    label: "Categoria"
  },
  tipo_vaga: {
    type: String,
    label: "Tipo de Vaga"
  },
  nome: {
    type: String,
    label: "Nome"
  },
  descricao: {
    type: String,
    label: "Descrição",
    min: 30
  },
  tags: {
    type: [String],
    label: "Tags",
    optional: true
  },
  company: {
    type: String,
    label: "ID da Empresa",
    autoValue: function(){
      return Meteor.userId();
    }
  },
  companyName: {
    type: String,
    label: "Nome da Empresa",
    autoValue: function(){
      return Meteor.user().profile.nome;
    }
  },
  especial: {
    type: Boolean,
    label: "Especial"
  },
  createdAt: {
    type: Number,
    label: "Data de Criação",
    autoValue: function(){
      return new Date().getTime();
    }
  }
});

Jobs.attachSchema(Job);
