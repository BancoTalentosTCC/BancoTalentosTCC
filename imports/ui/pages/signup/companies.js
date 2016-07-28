import {
  Template
} from 'meteor/templating';
import '/imports/api/collections/companies.js';

Template.companiesSignup.events({
  "submit form": function(event) {
    event.preventDefault();
    //REMOVE ERRORS
    $('.warning').removeClass('warning');

    let target = event.target;

    user = {
      email: targetValue(target["email"]),
      password: targetValue(target["password"]),
      password_confirmation: targetValue(target["password_confirmation"]),
      profile: {
        nome: targetValue(target["nome"]),
        cnpj: targetValue(target["cnpj"]),
        razaosoc: targetValue(target["razaosoc"]),
        endereco: targetValue(target["endereco"]),
        numero: targetValue(target["numero"]),
        bairro: targetValue(target["bairro"]),
        cidade: targetValue(target["cidade"]),
        uf: targetValue(target["uf"]),
        cep: targetValue(target["cep"]),
        phone: targetValue(target["phone"]),
        fax: targetValue(target["fax"]),
        dados: targetValue(target["dados"])
      }
    }

    Meteor.call('saveUser', user, "company", function(error, result) {
      if (error) {
        Meteor.call('displayErrors', error);
      } else if (result) {
        toastr.success('Você já pode acessar o painel da empresa', 'Empresa Cadastrada!');
        Router.go('login')
      }
    });
  }
});

function targetValue(target) {
  return target.value != "" ? target.value : undefined;
}
