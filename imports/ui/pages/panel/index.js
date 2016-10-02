Template.mainPanel.helpers({
  pathForNewJob: function() {
    return FlowRouter.path("newJob");
  },
  pathForStudentProfile: function() {
    return FlowRouter.path("studentProfile");
  },
  pathForCompanyProfile: function() {
    return FlowRouter.path("companyProfile");
  },
  pathForShowJob: function(id) {
    return FlowRouter.path("/estudante/vagas/" + id);
  },
  jobs: function() {
    return Jobs.find({}, {sort: {createdAt: -1}}).fetch();
  }
});
