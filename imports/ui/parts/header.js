Template.header.helpers({
  hasToggleIcon: function() {
    if (isDifferentLayout()) return "no-toggle-btn";
  },
  pathForLogin: function() {
    return FlowRouter.path("login");
  },
  pathForHome: function() {
    return FlowRouter.path("home");
  },
  pathForCompanyProfile: function() {
    return FlowRouter.path("companyProfile");
  },
  pathForCompanyPanel: function() {
    return FlowRouter.path("company");
  },
  pathForStudentProfile: function() {
    return FlowRouter.path("studentProfile");
  },
  pathForStudentPanel: function() {
    return FlowRouter.path("student");
  }
});

Template.header.events({
  "click #logout": function() {
    Accounts.logout();
  }
});

function isDifferentLayout() {
  let route = FlowRouter.current().route.name;
  return route == "home" || route == "companySignup" || route == "login" || route == "studentSignup"
}
