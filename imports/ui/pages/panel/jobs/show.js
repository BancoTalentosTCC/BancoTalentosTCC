import {Template} from 'meteor/templating';

Template.showJob.events({
  'click #apply': function() {
    Meteor.call('applyToJob', FlowRouter.getParam('id'));
  }
});

Template.showJob.onRendered(function () {
  $(document).ready(function() {
    $('.short-desc').shorten({
      "showChars" : 400,
      "moreText"	: "Ver mais",
      "lessText"	: "Menos",
    });
	});
});

Template.showJob.helpers({
  appliedToJob: function(job) {
    return job.applications.filter(function(studentId) {
      return (Meteor.userId() == studentId);
    });
  },
  isNotActive: function(status) {
    if (status !== "active") return true;
  }
});
