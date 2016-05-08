import { Template } from 'meteor/templating';
import '../../client/pages/signup/steps.html';

Template.steps.rendered = function() {
  $('.phone-number').inputmask("(99) 99999999[9]");
  $('.cpf').inputmask({mask: "999.999.999-99", autoUnmask: true});
  $('.cep').inputmask({mask: "99999-999"});
}
