import '/imports/api/collections/jobs.js';
import '/imports/api/collections/tags.js';

Meteor.publish('jobs', function() {
  if(Roles.userIsInRole(this.userId, 'student', 'user-type')){
    return Jobs.find();
  }
  else if(Roles.userIsInRole(this.userId, 'company', 'user-type')){
    return Jobs.find({'company': this.userId});
  }
});

// We decided to publish all users and make them available for everyone
// In case the app is having a bad performance, running slowly, it could be
// a good idea to only publish those users needed at the moment
Meteor.publish('users', function() {
  return Meteor.users.find({}, {fields: {'profile.cpf': 0, 'profile.cnpj': 0, services: 0}});
});

Meteor.publish('tags', function() {
  return Tags.find();
});
