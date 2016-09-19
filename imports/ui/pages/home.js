import {
  Template
} from 'meteor/templating';
import '/client/html/pages/home.html';

Template.home.onRendered(function() {
  $('#homeCarousel').carousel({
      interval: 6000,
      cycle: true
    });
});

Template.home.events({
  "submit #loginForm": function(event) {
    event.preventDefault();
    //REMOVE ERRORS
    $('.warning').removeClass('warning');

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
