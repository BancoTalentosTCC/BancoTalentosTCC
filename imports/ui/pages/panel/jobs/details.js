import {Template} from 'meteor/templating';

Template.jobDetails.helpers({
  job: function() {
    var id = FlowRouter.getParam('id');
    return Jobs.find({_id: id}).fetch()[0];
  },
  userById: function(id) {
    return Meteor.users.find({_id: id}).fetch();
  }
});
