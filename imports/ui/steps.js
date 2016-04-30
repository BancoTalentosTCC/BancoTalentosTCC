import { Template } from 'meteor/templating';
import { Students } from  '../api/students.js';
import '../../client/pages/signup/steps.html';

var studentSignUpFields = [
  ["nome", "cpf", "nascimento", "email", "perfil", "endereco", "numero", 
"bairro", "cidade", "uf", "cep", "phone", "celular", "senha", "sexo", "especial"],
  ["formacao", "curso", "conclusao"],
  ["idioma", "nivel_do_idioma"],
  ["lattes", "area_de_formacao", "experiencia", "qualificacao", "cursos_extras"],
  ["nome_emp", "cargo_emp", "duracao_emp", "cidade_emp", "uf_emp"]
]

Meteor.startup(function() {
  if (Session.get('studentId') === undefined) {
    Session.setTemp({'studentId': 0, completed: 0});
  }
});

Template.steps.rendered = function() {
  var stepElements = studentSignUpFields[stepNumber-1];
  if(!this._rendered) {
    //DON'T ALLOW GOING TO NEXT STEP USING URL IF PREVIOUS WASN'T COMPLETED
    if (Session.get('completed') < stepNumber) {
      Router.go('/signup/'+ ((parseFloat(Session.get('completed'))+ 1)));
    }
  }
}

Template.steps.events({
  "submit form": function (event) {
    //Remove all errors
    $('.warning').removeClass('warning');

    let target = event.target;
    var studentData = {}
    event.preventDefault();

    var stepElements = studentSignUpFields[stepNumber-1];
    for (var i = 0; i < stepElements.length; i++) {
      if (stepElements[i] === "especial") {
        eval("studentData['" + stepElements[i] + "'] = " + target[stepElements[i]].checked);
        Session.setTemp(stepElements[i], target[stepElements[i]].checked)
      }
      else {
        eval("studentData['" + stepElements[i] + "'] = '" + target[stepElements[i]].value +"';");
        Session.setTemp(stepElements[i], target[stepElements[i]].value)
      }
    }

    Meteor.call('addUserSingleStep', stepElements, studentData, Session.get('studentId'), stepNumber, function(error, result) {
      if ( error ) { 
        //build errors
        var errors = JSON.parse(error.details);
        for (let i = 0; i < errors.length; i++) {
          $('#'+errors[i].name).addClass('warning');
          toastr.error(errors[i].name + " " + errors[i].type, 'ERRO');
        }
      }
      if ( result ) {
        if (Session.get('studentId') == 0) { Session.update('studentId', result); }
        Session.update('completed', stepNumber);
        Router.go('/signup/'+ (++stepNumber));

        // CLEARS SESSION ON COMPLETE
        if (stepNumber == 6) {
          Session.clear();
        }

        // STEPPER TRANSITION
        Meteor.setTimeout(function() {
        _dep.changed();
        }, 250);
      }      
    });
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
    var students = Students.find({_id: Session.get('studentId')}).fetch() ;
    for (let i = 0; i < stepElements.length; i++) {
      $('#' + stepElements[i]).val(Session.get(stepElements[i]));
    }
  }
});