import '/imports/api/collections/jobs.js';
import '/imports/api/collections/students.js';

Meteor.publish('jobs', function() {
  if(Roles.userIsInRole(this.userId, 'student', 'user-type')){
    return Jobs.find();
  }
  else if(Roles.userIsInRole(this.userId, 'company', 'user-type')){
    return Jobs.find({'company': this.userId});
  }
});

Meteor.publish('students', function() {
  return Roles.getUsersInRole('student', 'user-type', {fields: {'profile.cpf': 0, services: 0}});
});

Meteor.publish('companies', function() {
  return Roles.getUsersInRole('company', 'user-type', {fields: {'profile.cnpj': 0, services: 0}});
});

Meteor.publish('user', function(params) {
  return Meteor.users.find({_id: params.id}, {fields: {'profile.cnpj': 0, 'profile.cpf': 0, services: 0}});
});

Meteor.publish('company', function(id) {
  return Meteor.users.find({_id: id}, {fields: {'profile.cnpj': 0, services: 0}});
});
