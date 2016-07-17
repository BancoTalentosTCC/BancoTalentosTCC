import { Template } from 'meteor/templating';

Template.login.events({
  "submit #loginForm": function (event) {
    event.preventDefault();
    //REMOVE ERRORS
    $('.warning').removeClass('warning');

    Meteor.loginWithPassword($('#email').val(), $("#password").val(), function(error) {
      if ( error ) { Meteor.call('displayErrors', error); }
    });
  }
});

