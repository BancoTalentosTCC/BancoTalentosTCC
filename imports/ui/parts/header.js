Template.header.helpers({
  hasToggleIcon: function() {
    if (isDifferentLayout()) return "no-toggle-btn";
  }
});

Template.header.events({
  "click #logout": function() {
    Accounts.logout();
    //A temporary measure to fix redirection, should be fix on router.js
    FlowRouter.go("home");
  }
});

function isDifferentLayout() {
  let route = FlowRouter.current().route.name;
  return route == "home" || route == "companySignup" || route == "studentSignup"
}
