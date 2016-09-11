import {
  Template
} from 'meteor/templating';
import '/imports/api/collections/students.js';

languageDep = new Deps.Dependency();
experienceDep = new Deps.Dependency();

var amountLanguages = [
  ["idioma0", "nivel_do_idioma0"]
];
var amountExperience = [
  ["nome_emp0", "cargo_emp0", "atribuicoes0", "duracao_emp0", "cidade_emp0", "uf_emp0"]
]

Template.studentSignup.rendered = function() {
  handleTabShow = function(tab, navigation, index, wizard) {
    var total = navigation.find('li').length;
    var current = index + 0;
    var percent = (current / (total - 1)) * 100;
    var percentWidth = 100 - (100 / total) + '%';

    navigation.find('li').removeClass('done');
    navigation.find('li.active').prevAll().addClass('done');

    wizard.find('.progress-bar').css({
      width: percent + '%'
    });
    $('.form-wizard-horizontal').find('.progress').css({
      'width': percentWidth
    });
  };

  var jqueryValidate = function(tab, navigation, index) {
    var form = $('#wizard').find('.form-validation');
    var valid = form.valid();
    if (!valid) {
      form.data('validator').focusInvalid();
      return false;
    }
  }

  $('#wizard').bootstrapWizard({
    'nextSelector': '#next',
    'previousSelector': '#previous',
    'firstSelector': '#first',
    'lastSelector': '#last',
    'onTabShow': function(tab, navigation, index) {
      handleTabShow(tab, navigation, index, $('#wizard'));
    },
    onNext: jqueryValidate,
    onLast: jqueryValidate,
    onTabClick: jqueryValidate
  });
}

Template.studentSignup.events({
  "submit form": function(event) {
    event.preventDefault();
    //REMOVE ERRORS
    $('.warning').removeClass('warning');
    $('.wizard-error').removeClass('wizard-error');

    let target = event.target;
    let idiomas = getIdiomas();
    let experiences = getExperiences();

    user = {
      email: targetValue(target["email"]),
      password: targetValue(target["password"]),
      password_confirmation: targetValue(target["password_confirmation"]),
      profile: {
        nome: targetValue(target["nome"]),
        cpf: targetValue(target["cpf"]),
        nascimento: targetValue(target["nascimento"]),
        perfil: targetValue(target["perfil"]),
        sexo: targetValue(target["sexo"]),
        endereco: targetValue(target["endereco"]),
        numero: targetValue(target["numero"]),
        bairro: targetValue(target["bairro"]),
        cidade: targetValue(target["cidade"]),
        uf: targetValue(target["uf"]),
        cep: targetValue(target["cep"]),
        phone: targetValue(target["phone"]),
        celular: targetValue(target["celular"]),
        facebook: targetValue(target["facebook"]),
        skype: targetValue(target["skype"]),
        twitter: targetValue(target["twitter"]),
        linkedin: targetValue(target["linkedin"]),
        pers_website: targetValue(target["pers_website"]),
        especial: target["especial"].checked,
        formacao: {
          formacao: targetValue(target["formacao"]),
          curso: targetValue(target["curso"]),
          conclusao: targetValue(target["conclusao"])
        },
        idiomas: idiomas,
        qualificacoes: {
          lattes: targetValue(target["lattes"]),
          qualificacao: targetValue(target["qualificacao"]),
          cursos_extras: targetValue(target["cursos_extras"])
        },
        experiencia: experiences
      }
    }

    Meteor.call('saveUser', user, "student", function(error, result) {
      if (error) {
        Meteor.call('displayErrors', error);
      } else if (result) {
        toastr.success('Você já pode acessar o painel do aluno', 'Estudante Cadastrado!');
        FlowRouter.go('login');
      }
    });
  },
  "click #add-language": function() {
    let length = amountLanguages.length;
    amountLanguages.push(["idioma" + length, "nivel_do_idioma" + length]);
    languageDep.changed();
  },
  "click #remove-language": function() {
    amountLanguages.pop();
    languageDep.changed();
  },
  "click #add-experience": function() {
    let length = amountExperience.length;
    amountExperience.push([
      "nome_emp" + length, "cargo_emp" + length, "atribuicoes" + length,
      "duracao_emp" + length, "cidade_emp" + length, "uf_emp" + length
    ]);
    experienceDep.changed();
  },
  "click #remove-experience": function() {
    amountExperience.pop();
    experienceDep.changed();
  },
});

/*
    HELPERS GO HERE
*/

Template.studentSignup.helpers({
  languages() {
    languageDep.depend();
    return amountLanguages;
  },
  experiences() {
    experienceDep.depend();
    return amountExperience;
  }
});

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
