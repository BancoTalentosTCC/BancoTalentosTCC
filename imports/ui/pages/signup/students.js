import {Template} from 'meteor/templating';
import '/imports/ui/components/form-field.js';
import '/imports/ui/components/wizard.js';
import '/imports/api/collections/students.js';

languageDep = new Deps.Dependency();
experienceDep = new Deps.Dependency();
currentJobDep = new Deps.Dependency();

var amountLanguages = [];
var amountExperience = []; 
var isCurrentJob = [];

Template.studentSignup.onRendered(function(){
  var template = this;
  var link = this.findAll("a");
  // THIS EVENT IS NOT BEING LISTED in THE 'METEOR' WAY, BECAUSE THE EVENTS ARE TRIGGERED 
  // AFTER WHAT IS INSIDE OF 'onRendered' IS EXECUTED, AND IT HAD TO BE EXECUTED BEFORE
  // WHAT IS INSIDE THE 'onRendered' IN THE 'wizard' TEMPLATE
  $(link).click(function(event) {
    Meteor.setTimeout(function() {
      var button = $('form button[type="submit"]');
      if ($('#tab5 > div > h1').is(":visible") && button.hasClass('disabled')) {
        button.removeClass('disabled')
      }
      else if (!button.hasClass('disabled')) {
        button.addClass('disabled')
      }
    }, 200);
  });
});

Template.studentSteps.events({
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
        complemento: targetValue(target["complemento"]),
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
        especial: $('#especial').is(':checked'),
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

    Meteor.call('saveStudent', user, function(error, result) {
      if (error) {
        Meteor.call('displayErrors', error);
      } else if (result) {
        toastr.success('Você já pode acessar o painel do aluno', 'Estudante Cadastrado!');
        FlowRouter.go('home');
      }      
    });
  }
});

function targetValue(target) {
  return target.value != "" ? target.value : undefined;
}

Template.step3.events({
  "click #add-language": function() {
    let length = amountLanguages.length;
    amountLanguages.push(["idioma" + length, "nivel_do_idioma" + length]);
    languageDep.changed();
  },
  "click #remove-language": function() {
    amountLanguages.pop();
    languageDep.changed();
  }
});

Template.step3.helpers({
  languages() {
    languageDep.depend();
    return amountLanguages;
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

Template.step5.events({
  "click #add-experience": function() {
    let length = amountExperience.length;
    amountExperience.push([
      "nome_emp" + length, "cargo_emp" + length, "atribuicoes" + length,
      "mes_inicial" + length, "ano_inicial" + length, "mes_final" + length, 
      "ano_final" + length, "current_job" + length, "cidade_emp" + length, "uf_emp" + length
    ]);
    experienceDep.changed();
  },
  "click #remove-experience": function() {
    amountExperience.pop();
    experienceDep.changed();
  },
  'change .checker': function(event) {
    if (document.getElementById(event.currentTarget.id).checked) {
      isCurrentJob[parseInt(event.currentTarget.getAttribute('data-index'))] = false;
    }
    else {
      isCurrentJob[parseInt(event.currentTarget.getAttribute('data-index'))] = true;
    }
    currentJobDep.changed();
  }
});

Template.step5.helpers({
  experiences() {
    experienceDep.depend();
    return amountExperience;
  },
  'isCurrentJob': function(index) {
    currentJobDep.depend();
    return isCurrentJob[index];
  }
});

function getExperiences() {
  let nome_emp = $('.nome_emp');
  let cargo_emp = $('.cargo_emp');
  let atribuicoes = $('.atribuicoes');
  let mes_inicial = $('.mes_inicial');
  let ano_inicial = $('.ano_inicial');
  let mes_final = $('.mes_final');
  let ano_final = $('.ano_final');
  let current_job = $('.checker');
  let cidade_emp = $('.cidade_emp');
  let uf_emp = $('.uf_emp');
  let array = [];

  var indexFinal = -1;
  for (let i = 0; i < nome_emp.length; i++) {
    if (current_job[i].checked == false) indexFinal++;

    array.push({
      nome_emp: nome_emp[i].value,
      cargo_emp: cargo_emp[i].value,
      atribuicoes: atribuicoes[i].value,
      mes_inicial: mes_inicial[i].value,
      ano_inicial: ano_inicial[i].value,
      mes_final: !current_job[i].checked ? mes_final[indexFinal].value : undefined,
      ano_final: !current_job[i].checked ? ano_final[indexFinal].value : undefined,
      current_job: current_job[i].checked,
      cidade_emp: cidade_emp[i].value,
      uf_emp: uf_emp[i].value,
    });
  }
  return array;
}
