Template.header.helpers({
  hasToggleIcon: function() {
    if (isDifferentLayout()) return "no-toggle-btn";
  }
});

Template.header.events({
  "click #logout": function() {
    Accounts.logout();
  }
});

function isDifferentLayout() {
  let route = FlowRouter.current().route.name;
  return route == "home" || route == "companySignup" || route == "studentSignup"
}
