import {Template} from 'meteor/templating';

Template.showJob.events({
  'click #apply': function() {
    Meteor.call('applyToJob', FlowRouter.getParam('id'));
  }
});

Template.showJob.helpers({
  job: function() {
    var id = FlowRouter.getParam('id');
    return Jobs.find({_id: id}).fetch()[0];
  },
  appliedToJob: function(job) {
    return job.applications.filter(function(studentId) {
      return (Meteor.userId() == studentId);
    });
  },
  isNotActive: function(status) {
    if (status !== "active") return true;
  },
  userById: function(id) {
    return Meteor.users.find({_id: id}).fetch();
  }
});
