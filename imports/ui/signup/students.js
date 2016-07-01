import { Template } from 'meteor/templating';
import  '../../api/students.js';
import '../../../client/pages/signup/students.html';
import  './errors.js';

wizardDep = new Deps.Dependency();
languageDep = new Deps.Dependency();
experienceDep = new Deps.Dependency();

//Used in steps with multiple fields of same kind (languages, professional experiences)
errorPosition = "";

// Number of current step
stepNumber = 0;

//Fields that belong to student form
// var studentSignUpFields = [
//   ["nome", "cpf", "nascimento", "perfil", "endereco", "numero", 
// "bairro", "cidade", "uf", "cep", "phone", "celular", "sexo", "especial"],
//   ["formacao", "curso", "conclusao"],
//   [["idioma0", "nivel_do_idioma0"]],
//   ["lattes", "qualificacao", "cursos_extras"],
//   [["nome_emp0", "cargo_emp0", "atribuicoes0", "duracao_emp0", "cidade_emp0", "uf_emp0"]]
// ];

// Meteor.startup(function() {
//   if (Session.get('completed') === undefined) {
//     Session.setTemp({completed: 0});
//     Session.setTemp({ user: { email: '', password: '', password_confirmation: '', profile: {} } });
//   }
// });

// Template.studentsSignup.rendered = function() {
//   var stepElements = studentSignUpFields[stepNumber-1];
//   if(!this._rendered) {
//     if (Session.get('completed') < stepNumber) {
//       Router.go('/students/signup/'+ ((parseFloat(Session.get('completed'))+ 1)));
//     }
//     else { loadInputs(); }
//   }
// }

Template.studentsSignup.events({
  "submit form": function (event) {
    event.preventDefault();
    //REMOVE ERRORS
    $('.warning').removeClass('warning');

    let target = event.target;

  //  stepNumber == 1 || stepNumber == 2 || stepNumber == 4 ? profile = {} : profile = [];

    //GET FORM DATA AND SET TO profile VARIABLE
   // var stepElements = studentSignUpFields[stepNumber-1];

    //console.log(stepElements, "stepElements");
    // for (var i = 0; i < stepElements.length; i++) {
    //   if (typeof(stepElements[i]) == "string") {
    //     if (stepElements[i] === "especial") {
    //       profile[stepElements[i]] = target[stepElements[i]].checked;
    //     }
    //     else if (target[stepElements[i]].value != "") {
    //       profile[stepElements[i]] = target[stepElements[i]].value;
    //     }
    //   }
    //   else {
    //     for (let j = 0; j < stepElements[i].length; j++) {
    //       if (j == 0) profile[i] = { };
    //       let element = stepElements[i][j];
    //       element = element.replace(/[0-9]/g, '');
    //       profile[i][element] = target[element + '' + i].value;
    //     }
    //   }
    // }

  //  try {

      user = {
        email: target["email"].value,
        password: target["password"].value,
        password_confirmation: target["password_confirmation"].value,
        profile: {
          nome: target["nome"].value,
          cpf: target["cpf"].value,
          nascimento: target["nascimento"].value,
          perfil: target["perfil"].value,
          sexo: target["sexo"].value,
          endereco: target["endereco"].value,
          numero: target["numero"].value,
          bairro: target["bairro"].value,
          cidade: target["cidade"].value,
          uf: target["uf"].value,
          cep: target["cep"].value,
          phone: target["phone"].value,
          celular: target["celular"].value,
          especial: target["especial"].checked,
          formacao: {
            formacao: target["formacao"].value,
            curso: target["curso"].value,
            conclusao: target["conclusao"].value
          },
          idiomas: [
            {
              idioma: target["idioma"].value,
              nivel_do_idioma: target["nivel_do_idioma"].value
            }
          ],
          qualificacoes: {
            lattes: target["lattes"].value,
            qualificacao: target["qualificacao"].value,
            cursos_extras: target["cursos_extras"].value
          },
          experiencia: [
            {
              nome_emp: target["nome_emp"].value,
              cargo_emp: target["cargo_emp"].value,
              atribuicoes: target["atribuicoes"].value,
              duracao_emp: target["duracao_emp"].value,
              uf_emp: target["uf_emp"].value,
              cidade_emp: target["cidade_emp"].value
            }
          ]
        }
      }

      //console.log(target["idioma"], "user model");
        Meteor.call('saveUser', user , function(error, result) {
          if ( error ) {
            Meteor.call('displayErrors', error);
          }
          if ( result ) {
            //LOGS IN
            Meteor.loginWithPassword(Session.get('user').email, Session.get('user').password);
            toastr.success('Você já pode acessar o painel do aluno', 'Estudante Cadastrado!');
          }      
        });
      // if (stepNumber == 1) {
      //   //VALIDATE EMAIL
      //   Meteor.call('validateEmail', $('#email').val(), function(error, result) {
      //     if (error)  { Meteor.call('displayErrors', error); }
      //     else {
      //       Meteor.call('checkEmailPresence', $('#email').val(), function(error, result) {  
      //         //IN CASE THIS EMAIL ALREADY EXISTS THROW ERROR
      //         if (result) {
      //           Meteor.call('displayErrors', { details: [ { name: "email" } ], reason: "Email já existe!" });
      //         }
      //       });
      //     }
      //   });

      //   //VALIDATE PASSWORD
      //   Meteor.call('validatePassword', {
      //       password: $('#password').val(),
      //       password_confirmation: $('#password_confirmation').val()
      //     }, 
      //     function(error, result) { if(error) Meteor.call('displayErrors', error); }
      //   );
      // }

      // //VALIDATE PROFILE DATA ACCORDING SCHEMA
      // if (stepNumber == 1 || stepNumber == 2 || stepNumber == 4) {
      //   eval("StudentsSchema" + stepNumber).validate(profile); 
      // }
      // else {
      //   for (errorPosition = 0; errorPosition < profile.length; errorPosition++) {
      //     eval("StudentsSchema" + stepNumber).validate(profile[0]);
      //   }
      //   errorPosition = "";
      // }

      // //SAVE ALL DATA IN SESSION
      // saveUserInSession(profile);

      //ON STEP 5 SAVES NEW USER
      // if (stepNumber == 5) {
      //   Meteor.call('saveUser', user , function(error, result) {
      //     if ( error ) {
      //       Meteor.call('displayErrors', error);
      //     }
      //     else {
      //       toastr.success('Você já pode acessar o painel do aluno', 'Estudante Cadastrado!');

      //       //LOGS IN
      //       Meteor.loginWithPassword(Session.get('user').email, Session.get('user').password);
      //       // CLEARS SESSION ON COMPLETE
      //       Session.clear();
      //       stepNumber=1;  
      //     }      
      //   });
      // }

    // }
    // catch(error) {
    //   console.log(error, "catch error");
    //   Meteor.call('displayErrors', error);
    // }
    // finally {
    //   Meteor.setTimeout(function() {
    //     if (!$('.warning').length) {
    //       //if (stepNumber > Session.get("completed")) { Session.update('completed', stepNumber); }
    //       //Router.go('/students/signup/'+ (++stepNumber));
    //      // changeStep();
    //     }
    //   }, 500);
    // }
  },
  "click #add-language": function (event, instance) {
    // let amount = studentSignUpFields[2].length;
    // studentSignUpFields[2].push(["idioma"+amount, "nivel_do_idioma"+amount]);
    // languageDep.changed();
  },
  "click #add-experience": function (event, instance) {
    // let amount = studentSignUpFields[4].length;
    // studentSignUpFields[4].push(
    //   ["nome_emp"+amount, "cargo_emp"+amount, "duracao_emp"+amount, "cidade_emp"+amount, 
    //   "uf_emp"+amount, "atribuicoes"+amount]
    // );
  },
  "click #next": function (event, instance) {
    wizardDep.changed();
  }

  // "click #back": function () {
  //   Router.go('/students/signup/'+ (--stepNumber));
  //   changeStep();
  // }
});

/*
    HELPERS GO HERE
*/

Template.studentsSignup.helpers({
  wizard() {
    wizardDep.depend();
    return ["active", "", "", "", ""]
  },
  languages() {
    // languageDep.depend();
    return [["idioma", "nivel_do_idioma"]];
  },
  experiences() {
    // experienceDep.depend();
    return [["nome_emp", "cargo_emp", "duracao_emp", "cidade_emp", "uf_emp", "atribuicoes"]]
  }
});

/*
    THE FOLLOWING METHODS GIVE SUPPORT TO THE TRANSITION BETWEEN STEPS
*/

// var loadInputs = function() {
//   // var stepElements = studentSignUpFields[stepNumber-1];
//   var user = Session.get('user');
//   if (stepNumber == 1) {
//     if (user) {
//         $('#email').val(user.email);
//         $('#password').val(user.password);
//         $('#password_confirmation').val(user.password_confirmation);
//       }
//     for (let i = 0; i < stepElements.length; i++) {
//       $('#' + stepElements[i]).val(user.profile[stepElements[i]]);
//     }
//   }
//   else if (stepNumber == 2) {
//     for (let i = 0; i < stepElements.length; i++) {
//       $('#' + stepElements[i]).val(user.profile['formacao'][stepElements[i]]);
//     }
//   }
//   else if (stepNumber == 3) {
//     for (let i = 0; i < stepElements.length; i++) {
//       for (let j = 0; j < stepElements[i].length; j++) {
//         let no_numbers =  stepElements[i][j].replace(/[0-9]/g, '');
//         $('#' + stepElements[i][j]).val(user.profile['idiomas'][i][no_numbers]);
//       }
//     }
//   }
//   else if (stepNumber == 4) {
//     for (let i = 0; i < stepElements.length; i++) {
//       $('#' + stepElements[i]).val(user.profile['qualificacoes'][stepElements[i]]);
//     }
//   }
//   else if (stepNumber == 5) {
//     for (let i = 0; i < stepElements.length; i++) {
//       for (let j = 0; j < stepElements[i].length; j++) {
//         let no_numbers =  stepElements[i][j].replace(/[0-9]/g, '');
//         $('#' + stepElements[i][j]).val(user.profile['experiencia'][i][no_numbers]);
//       }
//     }
//   }
// }

// var saveUserInSession = function(profile) {
//   var user = Session.get('user');
//   if (stepNumber == 1) {
//     user.email =  $('#email').val(),
//     user.password = $('#password').val(),
//     user.password_confirmation = $('#password_confirmation').val()
//     $.extend(user.profile, profile);
//   }
//   else if (stepNumber == 2) {
//     $.extend(user.profile, { 'formacao': profile });
//   }
//   else if (stepNumber == 3) {
//     $.extend(user.profile, { 'idiomas': profile });
//   }
//   else if (stepNumber == 4) {
//     $.extend(user.profile, { 'qualificacoes': profile });
//   }
//   else if (stepNumber == 5) {
//     $.extend(user.profile, { 'experiencia': profile });
//   }
//   Session.update('user', user );
// }

// var changeStep = function() {
//   setTimeout(function() {
//     _dep.changed();
//     if (Session.get('completed') >= stepNumber) loadInputs();
//   }, 250);
// }
