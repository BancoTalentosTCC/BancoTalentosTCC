import {Template} from 'meteor/templating';

Template.showJob.helpers({
  job: function() {
    var id = FlowRouter.getParam('id');
    return Jobs.find({_id: id}).fetch()[0];
  },
  company: function() {
    return Session.get("company");
  },
});
