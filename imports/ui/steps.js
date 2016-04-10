import { Template } from 'meteor/templating';
import { Students } from  '../api/students.js';
import '../../client/pages/signup/steps.html';
//import { Mongo } from 'meteor/mongo';
//const Students = new Mongo.Collection('students');


//Template.body.helpers({
 // tasks() {
 //   return Tasks.find({});
 // },
//});
    //console.log(Students, 'students');

Template.steps.events({
  "submit form": function (event) {
    event.preventDefault();

    //NEEDS A "METEOR WAY" OF DOING IT
    let step_number = location.href.split('/').pop()
    console.log(step_number);

    if (step_number == 1) {
      var parameters = ["nome", "cpf", "nascimento", "email", "perfil", "endereco", "numero", 
      "bairro", "cidade", "uf", "cep", "phone", "celular", "senha", "sexo", "especial"]
    } else if(step_number == 2) {
      var parameters = ["formacao", "curso", "conclusao"]
    } else if(step_number == 3) {
      var parameters = ["idioma", "nivel_do_idioma"]
    } else if(step_number == 4) {
      var parameters = ["lattes", "area_de_formacao", "experiencia", "qualificacao", "cursos_extras"]
    } else if(step_number == 5) {
      var parameters = ["nome_emp", "cargo_emp", "duracao_emp", "cidade_emp", "uf_emp"]
    }
  
    addUserSingleStep(parameters, step_number);

    // Clear form
    //event.target.text.value = '';

    function addUserSingleStep(parameters, step_number) {
      console.log('inside method');
      let target = event.target;

      var student_data = {}

      for (var i = 0; i < parameters.length; i++) {
        //Remember to do data validation
        //target[parameters[i]].value == '' ? alert(target[parameters[i]].value + 'cant be blank');
        eval("student_data['" + parameters[i] + "'] = '" + target[parameters[i]].value +"';");
      }

      Students.insert(
        student_data, 
        function(err,result){
          if ( err ) console.log ( err ); //info about what went wrong
          if ( result ) {
            console.log ( result ); //the _id of new object if successful
            Router.go('/signup/'+ (++step_number));
          }
      });
      //createdAt: new Date()
    }
  }
});

