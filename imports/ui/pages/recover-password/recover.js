import { Accounts } from 'meteor/accounts-base';
import {Template} from 'meteor/templating';
import '/imports/ui/components/form-field.js';

Template.recover.events({
  "submit #recoverForm": function(event) {
    event.preventDefault();
    let email = $('#email').val();
    Accounts.forgotPassword({
      email,
    }, (error) => {
      if (error) {
        Meteor.call('displayErrors', error);
      } else {
        toastr.success(`Verifique seu e-mail ${ email } para recuperar sua senha.`, 'E-mail enviado!');
        FlowRouter.go('home');
      }
    });
  }
});
