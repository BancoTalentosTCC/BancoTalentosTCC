Template.menubar.helpers({
  pathForCompanyPanel: function() {
    return FlowRouter.path("company");
  },
  pathForStudentPanel: function() {
    return FlowRouter.path("student");
  },
  pathForJob: function() {
    if(Roles.userIsInRole(Meteor.userId(), 'student', 'user-type')){
      return FlowRouter.path("studentjobs");
    }
    else if(Roles.userIsInRole(Meteor.userId(), 'company', 'user-type')){
      return FlowRouter.path("companyjobs");
    }
  },
  pathForCompanies: function() {
    return FlowRouter.path("companies");
  },
  pathForStudents: function() {
    return FlowRouter.path("companyStudents");
  }
});
