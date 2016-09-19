import '/imports/api/collections/jobs.js';
import '/imports/api/collections/students.js';

Meteor.publish('jobs', function() {
  if (this.userId) return Jobs.find();
});

Meteor.publish('students', function() {
  if (this.userId) return Roles.getUsersInRole('student', 'user-type', {fields: {'profile.cpf': 0, services: 0, roles: 0}});
});
