import '/imports/api/collections/jobs.js';

Meteor.publish('jobs', function() {
  // ONLY PUBLISHES JOBS TO LOGGED IN USERS
  if (this.userId) return Jobs.find();
});
