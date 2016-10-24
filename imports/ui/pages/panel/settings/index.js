import {
  Template
} from 'meteor/templating';

Template.settings.events({
  'click .nav-tabs-vert a': function (event) {
    event.preventDefault();
    BlazeLayout.render('PanelLayout', {
      main: "settings",
      settings: event.currentTarget.id
    });
  },
  'submit form': function (event) {
    event.preventDefault();

    $('.warning').removeClass('warning');

    let target = event.target;
    let formID = event.target.id;

    update(target, formID);
  }
});

Template.studentSettings.onRendered(function () {
  //summernote 
  if (!$('#aboutme').data('summernote')) {
    $('#aboutme').summernote({
      height: $('#aboutme').height() + 150,
      toolbar: [
        // [groupName, [list of button]]
        ['style', ['bold', 'italic', 'underline', 'clear']],
        ['fontsize', ['fontsize']],
        ['para', ['ul', 'ol', 'paragraph']],
        ['height', ['height']]
      ]
    });
  };
});

Template.settings.onRendered(function () {
  // Check if something has changed
  $('.form-control').each(function () {
    var elem = $(this);
    // Save current value of element
    elem.data('oldVal', elem.val());
    // Look for changes in the value
    elem.bind("propertychange change click keyup input paste", function (event) {
      // If value has changed...
      if (elem.data('oldVal') != elem.val()) {
        // Updated stored value
        elem.data('oldVal', elem.val());
        // Do action
        $('.btn-update').prop('disabled', false);
      }
    });
  });

  setMasks();
  setCalendar();
});

function update(target, formID) {
  var user = {};

  /* handle student update */
  if (Roles.userIsInRole(Meteor.userId(), 'student', 'user-type')) {
    switch (formID) {
      case "formNote":
        user = {
          profile: {
            aboutme: targetValue(target["aboutme"]),
          }
        }
        break;

      case "upd-aboutyou":
        user = {
          emails: {
            address: targetValue(target["email2nd"]),
            verified: false,
          },
          profile: {
            nome: targetValue(target["nome"]),
            nascimento: targetValue(target["nascimento"]),
            perfil: targetValue(target["perfil"]),
            sexo: targetValue(target["sexo"]),
            especial: $('#especial').is(':checked'),
          }
        }
        break;

      case "upd-address":
        user = {
          profile: {
            endereco: targetValue(target["endereco"]),
            numero: targetValue(target["numero"]),
            complemento: targetValue(target["complemento"]),
            bairro: targetValue(target["bairro"]),
            cidade: targetValue(target["cidade"]),
            uf: targetValue(target["uf"]),
            cep: targetValue(target["cep"])
          }
        }
        break;

      case "upd-contact":
        user = {
          profile: {
            phone: targetValue(target["phone"]),
            celular: targetValue(target["celular"]),
            facebook: targetValue(target["facebook"]),
            skype: targetValue(target["skype"]),
            twitter: targetValue(target["twitter"]),
            linkedin: targetValue(target["linkedin"]),
            pers_website: targetValue(target["pers_website"]),
            github: targetValue(target["github"]),
          }
        }
        break;

      case "upd-education":
        user = {
          profile: {
            formacao: {
              formacao: targetValue(target["formacao"]),
              curso: targetValue(target["curso"]),
              conclusao: targetValue(target["conclusao"])
            }
          }
        }
        break;

      case "upd-idioms":
        let idiomas = getIdiomas();
        user = {
          profile: {
            idiomas: idiomas,
          }
        }
        break;

      case "upd-qualifications":
        user = {
          profile: {
            qualificacoes: {
              lattes: targetValue(target["lattes"]),
              qualificacao: targetValue(target["qualificacao"]),
              cursos_extras: targetValue(target["cursos_extras"])
            }
          }
        }
        break;

      case "upd-professionalexp":
        let experiences = getExperiences();
        user = {
          profile: {
            experiencia: experiences
          }
        }
        break;
    }
    // Now update user
    Meteor.call('updateUser', user, formID, FlowRouter.getParam('id'), function (error, result) {
      if (error) {
        Meteor.call('displayErrors', error);
      } else if (result) {
        toastr.success('Dados atualizados!', 'Update!');
        $('.btn-update').prop('disabled', true);
      }
    });
  }

  /* handle company update  */
  else if (Roles.userIsInRole(Meteor.userId(), 'company', 'user-type')) {
    switch (formID) {
      case "upd-general":
        user = {
          emails: {
            address: targetValue(target["email2nd"]),
            verified: false,
          },
          profile: {
            nome: targetValue(target["nome"]),
            razaosoc: targetValue(target["razaosoc"])
          }
        }
        break;

      case "upd-address":
        user = {
          profile: {
            endereco: targetValue(target["endereco"]),
            numero: targetValue(target["numero"]),
            complemento: targetValue(target["complemento"]),
            bairro: targetValue(target["bairro"]),
            cidade: targetValue(target["cidade"]),
            uf: targetValue(target["uf"]),
            cep: targetValue(target["cep"])
          }
        }
        break;

      case "upd-contact":
        user = {
          profile: {
            phone: targetValue(target["phone"]),
            fax: targetValue(target["fax"]),
            dados: targetValue(target["dados"]),
            facebook: targetValue(target["facebook"]),
            twitter: targetValue(target["twitter"]),
            github: targetValue(target["github"]),
            pers_website: targetValue(target["pers_website"])
          }
        }
        break;
    }

    Meteor.call('updateUser', user, formID, FlowRouter.getParam('id'), function (error, result) {
      if (error) {
        Meteor.call('displayErrors', error);
      } else if (result) {
        toastr.success('Dados atualizados!', 'Update!');
        $('.btn-update').prop('disabled', true);
      }
    });
  }
}

function getIdiomas() {
  let idiomas = $('.idioma');
  let niveis = $('.nivel_do_idioma');
  let array = [];

  for (let i = 0; i < idiomas.length; i++) {
    array.push({
      idioma: idiomas[i].value,
      nivel_do_idioma: niveis[i].value
    });
  }
  return array;
}

function getExperiences() {
  let nome_emp = $('.nome_emp');
  let cargo_emp = $('.cargo_emp');
  let atribuicoes = $('.atribuicoes');
  let duracao_emp = $('.duracao_emp');
  let cidade_emp = $('.cidade_emp');
  let uf_emp = $('.uf_emp');
  let array = [];

  for (let i = 0; i < nome_emp.length; i++) {
    array.push({
      nome_emp: nome_emp[i].value,
      cargo_emp: cargo_emp[i].value,
      atribuicoes: atribuicoes[i].value,
      duracao_emp: duracao_emp[i].value,
      cidade_emp: cidade_emp[i].value,
      uf_emp: uf_emp[i].value,
    });
  }
  return array;
}

function targetValue(target) {
  return target.value != "" ? target.value : undefined;
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
    format: 'dd-mm-yyyy',
    language: 'pt-BR',
    endDate: new Date
  });

  $('#nascimento').focus(function () {
    $('#nascimento').blur();
  })
}
