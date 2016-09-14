Template.menubar.helpers({
  pathForCompanyPanel: function() {
    return FlowRouter.path("company");
  },
  pathForStudentPanel: function() {
    return FlowRouter.path("student");
  },
  pathForVacancySearch: function() {
    if(Roles.userIsInRole(Meteor.userId(), 'student', 'default-group')){
      return FlowRouter.path("studentJobSearch");
    }
    else if(Roles.userIsInRole(Meteor.userId(), 'company', 'default-group')){
      return FlowRouter.path("companyJobSearch");
    }
  }
});
