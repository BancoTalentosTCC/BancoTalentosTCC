import {Template} from 'meteor/templating';

Template.showJob.helpers({
  job: function() {
    var id = FlowRouter.getParam('id');
    return Jobs.find({_id: id}).fetch()[0];
  },
  company: function() {
    return Session.get("company");
  },
  pathForJob: function() {
    if(Roles.userIsInRole(Meteor.userId(), 'student', 'user-type')){
      return FlowRouter.path("studentjobs");
    }
    else if(Roles.userIsInRole(Meteor.userId(), 'company', 'user-type')){
      return FlowRouter.path("companyjobs");
    }
  }
});
