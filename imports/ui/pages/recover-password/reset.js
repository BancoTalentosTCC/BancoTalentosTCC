import { Accounts } from 'meteor/accounts-base';
import {Template} from 'meteor/templating';
import '/imports/ui/components/form-field.js';

Template.reset.events({
  "submit #resetForm": function(event) {
    event.preventDefault();
    let newpassword = $('#password').val();
    let token = FlowRouter.getParam("token");
    Accounts.resetPassword(token, newpassword, (error) => {
    if (error) {
      Meteor.call('displayErrors', error);
    } else {
      toastr.success('Sua senha foi alterada.', 'Sucesso!');
      FlowRouter.go('home');
    }
  });
  }
});