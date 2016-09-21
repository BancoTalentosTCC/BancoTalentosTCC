import {
  Template
} from 'meteor/templating';

FlowRouter.triggers.enter([init]);

function init() {
// WE SHOULD FIND A BETTER SOLUTION FOR THIS, TIMEOUT IS NOT A GOOD IDEA
 Meteor.setTimeout(function() {
    setMasks();
    setCalendar();
    setSummernote();
 }, 500);
}

function setMasks() {
  $('.phone-number').inputmask("(99) 99999999[9]", {
    "placeholder": " "
  });
  $('.cpf').inputmask({
    mask: "999.999.999-99",
    autoUnmask: true
  });
  $('.cnpj').inputmask({
    mask: "99.999.999/9999-99",
    autoUnmask: true
  });
  $('.cep').inputmask({
    mask: "99999-999"
  });
}

function setCalendar() {
  $('#nascimento').datepicker({
    format: 'yyyy-mm-dd',
    language: 'pt-BR',
    maxDate: new Date
  });
}

function setSummernote() {
  $('#descricao').summernote({
    height: $('#descricao').height() + 150,

    toolbar: [
      // [groupName, [list of button]]
      ['style', ['bold', 'italic', 'underline', 'clear']],
      ['font', ['strikethrough', 'superscript', 'subscript']],
      ['fontsize', ['fontsize']],
      ['color', ['color']],
      ['para', ['ul', 'ol', 'paragraph']],
      ['height', ['height']]
    ]
  });
}
