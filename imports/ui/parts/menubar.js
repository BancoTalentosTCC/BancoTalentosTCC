Template.menubar.helpers({
  pathForCompanyPanel: function() {
    return FlowRouter.path("company");
  },
  pathForStudentPanel: function() {
    return FlowRouter.path("student");
  },
  pathForJob: function() {
    if(Roles.userIsInRole(Meteor.userId(), 'student', 'default-group')){
      return FlowRouter.path("studentjobs");
    }
    else if(Roles.userIsInRole(Meteor.userId(), 'company', 'default-group')){
      return FlowRouter.path("companyjobs");
    }
  }
});
