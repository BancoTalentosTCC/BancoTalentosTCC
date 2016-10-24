import './collections/password.js';
import './collections/email.js';
import '/imports/api/collections/jobs.js';
import '/imports/api/collections/companies.js';
import '/imports/api/collections/students.js';

Meteor.methods({
  saveCompany: function (data) {
    Meteor.users.attachSchema(Company);
    id = Accounts.createUser(data);
    Roles.addUsersToRoles(id, 'company', 'user-type');
    Meteor.call('sendVerificationLink', id);
    return true;
  },
  saveStudent: function (data) {
    Meteor.users.attachSchema(Student);
    id = Accounts.createUser(data);
    Roles.addUsersToRoles(id, 'student', 'user-type');
    Meteor.call('sendVerificationLink', id);
    return true;
  },
  saveJob: function (vacancy) {
    return Jobs.insert(vacancy);
  },
  // send verification link
  sendVerificationLink: function(data) {
    let userId = data;
    if ( userId ) {
      return Accounts.sendVerificationEmail( userId );
    }
  },
  findCompanyByJob: function (id) {
    return Jobs.find({_id: id}).fetch()[0].company;
  },
  applyToJob: function(job) {
    let userId = Meteor.userId();
    
    Jobs.update(job, {
      /*  
        "getAutoValues: false" is to avoid updating the fields that are autoValues, 
        such as createdAt, otherwise everytime we update the schema will have a new createdAt date.  
      */
      $push: { applications: userId }}, {getAutoValues: false}
    );

    Meteor.users.update(userId, {
      $push: { "profile.applications": job }}, {getAutoValues: false}
    );
  },

  updateUser: function(user, formID) {
    let userId = Meteor.userId();

    /* If Student */
    if (Roles.userIsInRole(Meteor.userId(), 'student', 'user-type')) {
      Meteor.users.attachSchema(Student);
      switch (formID) {
        case "formNote":
            Meteor.users.update(userId, {
              $set: { "profile.aboutme": user.profile.aboutme }}, {getAutoValues: false}
            );

          break;

        case "upd-aboutyou":
          Meteor.users.update(userId, {
            $push: { "emails": user.emails }}, {getAutoValues: false}
          );
          Meteor.users.update(userId, {
            $set: { 
              "profile.nome": user.profile.nome,
              "profile.nascimento": user.profile.nascimento,
              "profile.perfil": user.profile.perfil,
              "profile.sexo": user.profile.sexo,
              "profile.especial": user.profile.especial,
              }
            }, {getAutoValues: false}
          );
          break;

        case "upd-address":
          Meteor.users.update(userId, {
            $set: { 
              "profile.endereco": user.profile.endereco,
              "profile.numero": user.profile.numero,
              "profile.bairro": user.profile.bairro,
              "profile.cidade": user.profile.cidade,
              "profile.uf": user.profile.uf,
              "profile.cep": user.profile.cep,
              }
            }, {getAutoValues: false}
          );

          break;

        case "upd-contact":
          Meteor.users.update(userId, {
            $set: { 
              "profile.phone": user.profile.phone,
              "profile.celular": user.profile.celular, 
              "profile.facebook": user.profile.facebook,
              "profile.skype": user.profile.skype,
              "profile.twitter": user.profile.twitter,
              "profile.linkedin": user.profile.linkedin,
              "profile.pers_website": user.profile.pers_website,
              "profile.github": user.profile.github
              }
            }, {getAutoValues: false}
          );

          break;

        case "upd-education":
          Meteor.users.update(userId, {
            $set: { 
              "profile.formacao.formacao": user.profile.formacao.formacao,
              "profile.formacao.curso": user.profile.formacao.curso,
              "profile.formacao.conclusao": user.profile.formacao.conclusao
              }
            }, {getAutoValues: false}
          );

          break;

        case "upd-idioms":
          Meteor.users.update(userId, {
            $set: { 
              "profile.idiomas": user.profile.idiomas 
              }
            }, {getAutoValues: false}
          );

          break;

        case "upd-qualifications":
          Meteor.users.update(userId, {
            $set: { 
              "profile.qualificacoes.lattes": user.profile.qualificacoes.lattes,
              "profile.qualificacoes.qualificacao": user.profile.qualificacoes.qualificacao, 
              "profile.qualificacoes.cursos_extras": user.profile.qualificacoes.cursos_extras
              }
            }, {getAutoValues: false}
          );

          break;

        case "upd-professionalexp":
          Meteor.users.update(userId, {
            $set: { 
              "profile.experiencia": user.profile.experiencia 
              }
            }, {getAutoValues: false}
          );

          break;
      }
      return true;
    }

    /* If company */
    else if (Roles.userIsInRole(Meteor.userId(), 'company', 'user-type')) {
      Meteor.users.attachSchema(Company);
      switch (formID) {
        case "upd-aboutyou":
          Meteor.users.update(userId, {
            $push: { "emails": user.emails }}, {getAutoValues: false}
          );
          Meteor.users.update(userId, {
            $set: { 
              "profile.nome": user.profile.nome,
              "profile.razaosoc": user.profile.razaosoc
              }
            }, {getAutoValues: false}
          );
          break;

        case "upd-address":
          Meteor.users.update(userId, {
            $set: { 
              "profile.endereco": user.profile.endereco,
              "profile.numero": user.profile.numero,
              "profile.complemento": user.profile.complemento,
              "profile.bairro": user.profile.bairro,
              "profile.cidade": user.profile.cidade,
              "profile.uf": user.profile.uf,
              "profile.cep": user.profile.cep,
              }
            }, {getAutoValues: false}
          );

          break;

        case "upd-contact":
          Meteor.users.update(userId, {
            $set: { 
              "profile.phone": user.profile.phone,
              "profile.fax": user.profile.fax, 
              "profile.facebook": user.profile.facebook,
              "profile.twitter": user.profile.twitter,
              "profile.pers_website": user.profile.pers_website,
              "profile.github": user.profile.github
              }
            }, {getAutoValues: false}
          );

          break; 
      }
      return true;
    }
  }
});
