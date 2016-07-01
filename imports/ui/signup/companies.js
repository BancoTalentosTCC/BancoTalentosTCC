import { Template } from 'meteor/templating';
import  '../../api/companies.js';
import '../../../client/pages/signup/companies.html';
import  './errors.js';

Template.companiesSignup.events({
  "submit form": function (event) {
    event.preventDefault();
    //REMOVE ERRORS
    $('.warning').removeClass('warning');

    let fields = ['nome', 'cnpj', 'razaosoc', 'endereco', 'numero', 'bairro', 'cidade', 'uf', 'cep', 'phone', 'fax', 'dados'];
    let target = event.target;
    let companyProfile = {};

    for (let i = 0; i < fields.length; i++) {
      companyProfile[fields[i]] = target[fields[i]].value;
    }

    let company = {
      email: $('#email').val(),
      password: $('#password').val(),
      password_confirmation: $('#password_confirmation').val(),
      roles: 'company',
      profile: companyProfile
    }

    Meteor.call('saveUser', company, function(error, result) {
      if ( error ) {
        Meteor.call('displayErrors', error);
      }
      else {
        alert('Usuário cadastrado com sucesso! Você já pode acessar o painel da empresa');

        //LOGS IN
        Meteor.loginWithPassword($('#email').val(), $('#password').val());      
      }      
    });
  }
});

