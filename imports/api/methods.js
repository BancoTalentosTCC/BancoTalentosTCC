import './collections/password.js';
import './collections/email.js';

Meteor.methods({
  saveUser: function(data, type) {
    if (type == "student") {
      require('/imports/api/collections/students.js');
    }
    else {
      console.log("shouldnt be here");
      require('/imports/api/collections/companies.js');
    }
    Accounts.createUser(data);
    return true;
  }
}); 
