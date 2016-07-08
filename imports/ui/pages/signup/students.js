import { Template } from 'meteor/templating';
import '/imports/api/collections/students.js';
import '/imports/api/methods.js';

languageDep = new Deps.Dependency();
experienceDep = new Deps.Dependency();

var amountLanguages = [["idioma", "nivel_do_idioma"]];
var amountExperience = [["nome_emp", "cargo_emp", "atribuicoes", "duracao_emp", "cidade_emp", "uf_emp"]]

//Used in steps with multiple fields of same kind (languages, professional experiences)
errorPosition = "";

Template.studentsSignup.rendered = function() {
  handleTabShow = function(tab, navigation, index, wizard){
    var total = navigation.find('li').length;
    var current = index + 0;
    var percent = (current / (total - 1)) * 100;
    var percentWidth = 100 - (100 / total) + '%';
    
    navigation.find('li').removeClass('done');
    navigation.find('li.active').prevAll().addClass('done');
    
    wizard.find('.progress-bar').css({width: percent + '%'});
    $('.form-wizard-horizontal').find('.progress').css({'width': percentWidth});
  };

  var jqueryValidate = function(tab, navigation, index) {
    var form = $('#wizard').find('.form-validation');
    var valid = form.valid();
    if(!valid) {
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

Template.studentsSignup.events({
  "submit form": function (event) {
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

    Meteor.call('saveUser', user , function(error, result) {
      if ( error ) { Meteor.call('displayErrors', error); }
      else if ( result ) {
        Meteor.loginWithPassword(target["email"].value, target["password"].value);
        toastr.success('Você já pode acessar o painel do aluno', 'Estudante Cadastrado!');
      }      
    });
  },
  "click #add-language": function () {
    let length = amountLanguages.length;
    amountLanguages.push(["idioma"+length, "nivel_do_idioma"+length]);
    languageDep.changed();
  },
  "click #remove-language": function () {
    amountLanguages.pop();
    languageDep.changed();
  },
  "click #add-experience": function () {
    amountExperience.push([["nome_emp", "cargo_emp", "atribuicoes", "duracao_emp", "cidade_emp", "uf_emp"]]);
    experienceDep.changed();
  },
  "click #remove-experience": function () {
    amountExperience.pop();
    experienceDep.changed();
  },
});

/*
    HELPERS GO HERE
*/

Template.studentsSignup.helpers({
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
    array.push({ idioma: idiomas[i].value, nivel_do_idioma: niveis[i].value });
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