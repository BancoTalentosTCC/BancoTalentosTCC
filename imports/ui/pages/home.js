import {
  Template
} from 'meteor/templating';
import { 
  Session 
} from 'meteor/session';
import '/client/html/pages/home.html';
import '/imports/ui/components/form-field.js';

Template.home.onRendered(function() {
  $('#homeCarousel').carousel({
      interval: 6000,
      cycle: true
    });
  
  // setting a saved user if true
  $("#email").val(Session.get("email"));
  $("#password").val(Session.get("password"));
});

Template.home.events({
  "submit #loginForm": function(event) {
    event.preventDefault();
    //REMOVE ERRORS
    $('.warning').removeClass('warning');

    if ( $('#rememberme:checkbox:checked').length > 0) {
      Session.setPersistent("email", event.target["email"].value);
      Session.setPersistent("password", event.target["password"].value);
    }
    
    Meteor.loginWithPassword($('#email').val(), $("#password").val(), function(error) {
      if (error) {
        Meteor.call('displayErrors', error);
      }
      else {
        if(Roles.userIsInRole(Meteor.userId(), 'student', 'user-type')){
          FlowRouter.go("student");
        }
        else if(Roles.userIsInRole(Meteor.userId(), 'company', 'user-type')){
          FlowRouter.go("company");
        }
      }
    });
  }
});

Template.home.helpers({
  pathForStudentSignup: function() {
    return FlowRouter.path("studentSignup");
  },
  pathForCompanySignup: function() {
    return FlowRouter.path("companySignup");
  }
});
