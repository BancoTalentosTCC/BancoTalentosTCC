Meteor.methods({
  saveUser: function(data) {
    return Accounts.createUser(data);
  },
  checkEmail: function(email) {
    return Accounts.findUserByEmail(email);
  }
});
