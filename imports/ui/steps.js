import { Template } from 'meteor/templating';
import { Students } from  '../api/students.js';
import '../../client/pages/signup/steps.html';

var studentSignUpFields = [
  ["nome", "cpf", "nascimento", "email", "perfil", "endereco", "numero", 
"bairro", "cidade", "uf", "cep", "phone", "celular", "password", "password_confirmation", "sexo", "especial"],
  ["formacao", "curso", "conclusao"],
  ["idioma", "nivel_do_idioma"],
  ["lattes", "qualificacao", "cursos_extras"],
  ["nome_emp", "cargo_emp", "duracao_emp", "cidade_emp", "uf_emp", "atribuicoes"]
]

Meteor.startup(function() {
  if (Session.get('studentId') === undefined) {
    Session.setTemp({'studentId': 0, completed: 0});
  }
});

Template.steps.rendered = function() {
  var stepElements = studentSignUpFields[stepNumber-1];
  if(!this._rendered) {
    if (Session.get('completed') < stepNumber) {
      Router.go('/signup/'+ ((parseFloat(Session.get('completed'))+ 1)));
    }
  }
}

Template.steps.events({
  "submit form": function (event) {
    event.preventDefault();
    //REMOVE ERRORS
    $('.warning').removeClass('warning');

    let target = event.target;
    var studentData = {}

    //GET FORM DATA AND SET TO studentData VARIABLE
    var stepElements = studentSignUpFields[stepNumber-1];
    for (var i = 0; i < stepElements.length; i++) {
      if (stepElements[i] === "especial") {
        studentData[stepElements[i]] = target[stepElements[i]].checked;
      }
      else if (target[stepElements[i]].value != '') {
        studentData[stepElements[i]] = target[stepElements[i]].value;
      }
    }

    try {
      if (stepNumber == 1) {
        Meteor.call('checkEmail', $('#email').val(), function(error, result) {  
          //CASO O EMAIL INFORMADO NO STEP1 JA EXISTA GERA ERRO
          if (result) {
            Meteor.call('generateErrors', 'email', 'Email já existe!');
          }
        });
      }

      eval("studentsSchema" + stepNumber).validate(studentData);

      Session.update('step'+stepNumber, studentData);
      Session.update('completed', stepNumber);
      Router.go('/signup/'+ (++stepNumber));


      if (stepNumber == 6) {
        var studentProfile = {};
        $.extend(studentProfile, Session.get('step1'), Session.get('step2'), Session.get('step3'), Session.get('step4'), Session.get('step5'));
        var result = {
          email:  Session.get('step1').email,
          password:  Session.get('step1').password,
          profile: studentProfile
        };

        //JOIN ALL STEPS DATA IN ONLY ONE JSON
        Meteor.call('saveUser', result, function(error, result) {
          if ( error ) { 
            console.log(error, "ERRO");
          }
          if ( result ) {
            alert('Usuário cadastrado com sucesso! Você já pode acessar o painel do aluno');

            //LOGS IN
            Meteor.loginWithPassword(Session.get('step1').email, Session.get('step1').password);
            // CLEARS SESSION ON COMPLETE
            Session.clear();
            stepNumber=1; 
          }      
        });
      }
     // }
      // STEPPER TRANSITION
      Meteor.setTimeout(function() {
      _dep.changed();
      }, 250);
    }
    catch(error) {
      //HANDLE ERRORS
      Meteor.call('generateErrors', error.details[0].name, error.reason);
    }
  },

  "click #back": function () {
    let stepNumber = location.href.split('/').pop();
    Router.go('/signup/'+ (--stepNumber));
    Meteor.setTimeout(function() {
      _dep.changed();
    }, 250);
  }
});

Meteor.methods({
  setInputs: function() {
    //LOAD ALL FIELDS THAT ARE ALREADY COMPLETED
    var stepElements = studentSignUpFields[stepNumber-1];
    var json = Session.get('step'+stepNumber);
    if (json) {
      for (let i = 0; i < stepElements.length; i++) {
        $('#' + stepElements[i]).val(json[stepElements[i]]);
      }
    }
  },
  generateErrors: function(name, reason) {
    $('#'+name).addClass('warning');
    toastr.error(reason, 'ERRO');
    $('html, body').animate({ scrollTop: $('#'+name).offset().top }, 'slow');
  }
});