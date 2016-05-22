import { Template } from 'meteor/templating';
import '../../../client/pages/signup/students.html';
import '../../../client/pages/signup/companies.html';

Template.ApplicationLayout.rendered = function() {
	T9n.setLanguage("pt");
  $('.phone-number').inputmask("(99) 99999999[9]");
  $('.cpf').inputmask({mask: "999.999.999-99", autoUnmask: true});
  $('.cnpj').inputmask({mask: "99.999.999/9999-99", autoUnmask: true});
  $('.cep').inputmask({mask: "99999-999"});
 }
