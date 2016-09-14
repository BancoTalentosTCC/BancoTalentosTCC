import '/imports/api/collections/vacancies.js';

Meteor.publish('vacancies', function() {
  // ONLY PUBLISHES VACANCIES TO LOGGED IN USERS
  if (this.userId) return Vacancies.find();
});
