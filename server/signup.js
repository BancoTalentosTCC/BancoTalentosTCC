import  '/imports/api/companies.js';

Meteor.methods({
  saveUser: function(data) {
    password.validate({
      password: data.password,
      password_confirmation: data.password_confirmation
    });
    Accounts.createUser(data);
    return true;
  },
  checkEmail: function(email) {
    return Accounts.findUserByEmail(email);
  }
});
