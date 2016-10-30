/* Still has some code to be added */

Template.profile.helpers({
  user: function() {
    var id = FlowRouter.getParam('id');
    if (id) return Meteor.users.find({_id: id}).fetch()[0];
    return Meteor.user();
  },
  languageLevel: function(nivel) {
    switch(nivel) {
      case "basico":
        return "30%";
      case "intermed":
        return "50%";
      case "avanc":
        return "80%";
      case "flue":
        return "100%";
    }
  },
  calculateYear: function(duration) {
    if (duration < 2) {
      return duration + " ano";
    }
    else return duration + " anos";
  }
});

Template.profile.onRendered(function(){
  $('[data-toggle="tooltip"]').tooltip()
});
