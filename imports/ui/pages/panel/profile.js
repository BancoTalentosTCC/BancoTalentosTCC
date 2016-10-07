/* Still has some code to be added */

Template.profile.helpers({
  user: function() {
    var id = FlowRouter.getParam('id');
    if (id) return Meteor.users.find({_id: id}).fetch()[0];
    return Meteor.user();
  }
});
