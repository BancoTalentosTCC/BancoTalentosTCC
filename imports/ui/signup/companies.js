import { Template } from 'meteor/templating';
import  '../../api/companies.js';
import '../../../client/pages/signup/companies.html';

Template.companiesSignup.events({
  "submit form": function (event) {
    event.preventDefault();
    //REMOVE ERRORS
    $('.warning').removeClass('warning');

    var fields = ['nome', 'cnpj', 'razaosoc', 'endereco', 'numero', 'bairro', 'cidade', 'uf', 'cep', 'phone', 'fax', 'dados'];

    let target = event.target;
    var companyProfile = {};
    for (var i = 0; i < fields.length; i++) {
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
      console.log(error, "error");
      console.log(result, "result");
      if ( error ) {
        console.log(typeof(error.details));
        if (typeof(error.details) === 'string') Meteor.call('generateErrors', JSON.parse(error.details)[0].name.split(".").pop(), error.reason);
        else if (typeof(error.details) === 'object') Meteor.call('generateErrors', error.details[0].name.split(".").pop(), error.reason);
        else Meteor.call('generateErrors', 'email', T9n.get('error.accounts.' + error.reason));
      }
      else if ( result ) {
        alert('Usuário cadastrado com sucesso! Você já pode acessar o painel da empresa');

        //LOGS IN
        Meteor.loginWithPassword($('#email').val(), $('#password').val());      
      }      
    });
  }
});

