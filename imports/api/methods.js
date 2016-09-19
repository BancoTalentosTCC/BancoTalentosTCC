import './collections/password.js';
import './collections/email.js';
import '/imports/api/collections/jobs.js';

Meteor.methods({
  saveUser: function (data, type) {
    if (type == "student") {
      require('/imports/api/collections/students.js');
    } else {
      require('/imports/api/collections/companies.js');
    }
    id = Accounts.createUser(data);
    Roles.addUsersToRoles(id, type, 'user-type');

    return true;
  },
  saveJob: function (vacancy) {
    Jobs.insert(vacancy);
  }
});
