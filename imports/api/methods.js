import  '/imports/api/collections/students.js';

Meteor.methods({
  saveUser: function(data) {
    Meteor.call('validatePassword', {
      password: data.password,
      password_confirmation: data.password_confirmation
    });
    Accounts.createUser(data);
    return true;
  },
  checkEmailPresence: function(email) {
    return Accounts.findUserByEmail(email);
  },
  validatePassword: function(data) {
    return password.validate(data);
  },
  validateEmail: function(email) {
    return Email.validate({email: email});
  }
});
