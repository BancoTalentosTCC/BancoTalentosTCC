import { Students } from  '../imports/api/students.js';

Meteor.methods({
  saveUser: function(data) {
    return Students.insert(data);
  }
});
