Template.header.helpers({
  hasToggleIcon: function() {
    if (isDifferentLayout()) return "no-toggle-btn";
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
  },
  pathForCompanySearch: function() {
    return FlowRouter.path("studentSearch");
  },
  pathForStudentSearch: function() {
    return FlowRouter.path("companySearch");
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
