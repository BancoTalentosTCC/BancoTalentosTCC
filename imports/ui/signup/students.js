import { Template } from 'meteor/templating';
import  '../../api/students.js';
import '../../../client/pages/signup/students.html';
import  './errors.js';

stepNumber = 0;
var studentSignUpFields = [
  ["nome", "cpf", "nascimento", "perfil", "endereco", "numero", 
"bairro", "cidade", "uf", "cep", "phone", "celular", "sexo", "especial"],
  ["formacao", "curso", "conclusao"],
  ["idioma", "nivel_do_idioma"],
  ["lattes", "qualificacao", "cursos_extras"],
  ["nome_emp", "cargo_emp", "duracao_emp", "cidade_emp", "uf_emp", "atribuicoes"]
]

Meteor.startup(function() {
  if (Session.get('completed') === undefined) {
    Session.setTemp({completed: 0});
    Session.setTemp({ user: { email: '', password: '', password_confirmation: '', profile: {} } });
  }
});

Template.studentsSignup.rendered = function() {
  var stepElements = studentSignUpFields[stepNumber-1];
  if(!this._rendered) {
    if (Session.get('completed') < stepNumber) {
      Router.go('/students/signup/'+ ((parseFloat(Session.get('completed'))+ 1)));
    }
    else { loadInputs(); }
  }
}

Template.studentsSignup.events({
  "submit form": function (event) {
    event.preventDefault();
    //REMOVE ERRORS
    $('.warning').removeClass('warning');

    let target = event.target;
    profile = {};

    //GET FORM DATA AND SET TO profile VARIABLE
    var stepElements = studentSignUpFields[stepNumber-1];
    for (var i = 0; i < stepElements.length; i++) {
      if (stepElements[i] === "especial") {
        profile[stepElements[i]] = target[stepElements[i]].checked;
      }
      else if (target[stepElements[i]].value != "") {
        profile[stepElements[i]] = target[stepElements[i]].value;
      }
    }

    try {
      if (stepNumber == 1) {
        //VALIDATE EMAIL
        Meteor.call('validateEmail', $('#email').val(), function(error, result) {  
          if (error) {
            Meteor.call('displayErrors', error);
          }
          else {
            Meteor.call('checkEmailPresence', $('#email').val(), function(error, result) {  
              //CASO O EMAIL INFORMADO NO STEP1 JA EXISTA GERA ERRO
              if (result) {
                Meteor.call('generateErrors', 'email', 'Email já existe!');
              }
            });
          }
        });

        //VALIDATE PASSWORD
        Meteor.call('validatePassword', {
          password: $('#password').val(),
          password_confirmation: $('#password_confirmation').val()
        }, 
        function(error, result) {
          if(error) {
            Meteor.call('displayErrors', error);
          }
        });    
      }

      //VALIDATE PROFILE DATA ACCORDING SCHEMA
      eval("StudentsSchema" + stepNumber).validate(profile);

      //SAVE ALL DATA IN SESSION
      saveUserInSession(profile);

      //ON STEP 5 SAVES NEW USER
      if (stepNumber == 5) {
        Meteor.call('saveUser', Session.get('user'), function(error, result) {
          if ( error ) {
            Meteor.call('displayErrors', error);
          }
          else {
            toastr.success('Você já pode acessar o painel do aluno', 'Estudante Cadastrado!');

            //LOGS IN
            Meteor.loginWithPassword(Session.get('user').email, Session.get('user').password);
            // CLEARS SESSION ON COMPLETE
            Session.clear();
            stepNumber=1;  
          }      
        });
      }

    }
    catch(error) {
      Meteor.call('displayErrors', error);
    }
    finally {
      Meteor.setTimeout(function() {
        if (!$('.warning').length) {
          if (stepNumber > Session.get("completed")) { Session.update('completed', stepNumber); }
          Router.go('/students/signup/'+ (++stepNumber));
          changeStep();
        }
      }, 250);
    }
  },

  "click #back": function () {
    Router.go('/students/signup/'+ (--stepNumber));
    changeStep();
  }
});

var loadInputs = function() {
  var stepElements = studentSignUpFields[stepNumber-1];
  var user = Session.get('user');
  if (user) {
    if (stepNumber==1) {
      $('#email').val(user.email);
      $('#password').val(user.password);
      $('#password_confirmation').val(user.password_confirmation);
    }
    for (let i = 0; i < stepElements.length; i++) {
      $('#' + stepElements[i]).val(user.profile[stepElements[i]]);
    }
  }
}

var saveUserInSession = function(profile) {
  var user = Session.get('user');
  if (stepNumber == 1) {
    user.email =  $('#email').val(),
    user.password = $('#password').val(),
    user.password_confirmation = $('#password_confirmation').val()
  }

  $.extend(user.profile, profile);
  Session.update('user', user );
}

var changeStep = function() {
  setTimeout(function() {
    _dep.changed();
    loadInputs();
  }, 250);
}
