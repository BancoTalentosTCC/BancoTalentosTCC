import './collections/password.js';
import './collections/email.js';
import '/imports/api/collections/vacancies.js';

Meteor.methods({
  saveUser: function (data, type) {
    if (type == "student") {
      require('/imports/api/collections/students.js');
    } else {
      require('/imports/api/collections/companies.js');
    }
    id = Accounts.createUser(data);
    Roles.addUsersToRoles(id, type, 'default-group');

    return true;
  },
  saveVacancy: function (vacancy) {
    Vacancies.insert(vacancy);
  }
});
