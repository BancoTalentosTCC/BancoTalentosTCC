import { Template } from 'meteor/templating';
import { Students } from  '../api/students.js';
import '../../client/pages/signup/steps.html';

var _dep = new Deps.Dependency();
var studentId = 0;

Template.stepper.helpers({
  stepper: function() {
    let stepperProgress = {};
    for (let i = stepNumber; i > 0; i--) { 
      i == stepNumber ? stepperProgress['step'+i] = "active" 
      : i < stepNumber ? stepperProgress['step'+i] = "completed" : "sdf"
    }
    _dep.depend();
    
    return stepperProgress;
  }
});

Template.steps.events({
  "submit form": function (event) {
    let target = event.target;
    var student_data = {}
    event.preventDefault();

    if (stepNumber == 1) {
      var parameters = ["nome", "cpf", "nascimento", "email", "perfil", "endereco", "numero", 
      "bairro", "cidade", "uf", "cep", "phone", "celular", "senha", "sexo", "especial"]
    } else if(stepNumber == 2) {
      var parameters = ["formacao", "curso", "conclusao"]
    } else if(stepNumber == 3) {
      var parameters = ["idioma", "nivel_do_idioma"]
    } else if(stepNumber == 4) {
      var parameters = ["lattes", "area_de_formacao", "experiencia", "qualificacao", "cursos_extras"]
    } else if(stepNumber == 5) {
      var parameters = ["nome_emp", "cargo_emp", "duracao_emp", "cidade_emp", "uf_emp"]
    }
  

    for (var i = 0; i < parameters.length; i++) {
      if (parameters[i] === "especial") {
        eval("student_data['" + parameters[i] + "'] = " + target[parameters[i]].checked);
      }
      else {
        eval("student_data['" + parameters[i] + "'] = '" + target[parameters[i]].value +"';");
      }
    }

    Meteor.call('addUserSingleStep', parameters, student_data, studentId, stepNumber, function(error, result) {
      if ( error ) { alert( error );}
      if ( result ) {
        if (studentId == 0) { studentId = result; }
        Router.go('/signup/'+ (++stepNumber));
        setTimeout(function() {
        _dep.changed();
        }, 250);
      }      
    });
  },

  "click #back": function () {
     let stepNumber = location.href.split('/').pop();
     Router.go('/signup/'+ (--stepNumber));
    setTimeout(function() {
      _dep.changed();
    }, 250);
  }
});

