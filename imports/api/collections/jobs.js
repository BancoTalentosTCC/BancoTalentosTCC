Jobs = new Mongo.Collection("jobs");

//is not working
Jobs.allow({
  insert: function(userId, doc) {
    return Roles.userIsInRole(Meteor.userId(), 'company', 'default-group');
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
      return Meteor.user().profile.razaosoc;
    }
  },
  especial: {
    type: Boolean,
    label: "Especial"
  },
  createdAt: {
    type: Date,
    label: "Data de Criação",
    autoValue: function(){
      return new Date();
    }
  }
});

Jobs.attachSchema(Job);
