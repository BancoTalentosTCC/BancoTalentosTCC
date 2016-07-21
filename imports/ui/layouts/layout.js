Template.ApplicationLayout.events({
  "click #logout": function () {
    Accounts.logout();
  }
});

Template.ApplicationLayout.helpers({
  base_classes: function() {
    let route = Router.current().route.getName();
    if (route == "home" || route == "companiesSignup" || route == "login" || route == "companiesSignup" || route == "studentsSignup") {
      return "no-padding";
    }
  }
});

Template.registerHelper(
  'user', () => {
    return Meteor.user();
  }
);


Template.header.helpers({
  hasToggleIcon: function () {
    let route = Router.current().route.getName();
    if (route == "home" || route == "companiesSignup" || route == "login" || route == "companiesSignup" || route == "studentsSignup") {
        return "no-toggle-btn";
    }
  }
});
