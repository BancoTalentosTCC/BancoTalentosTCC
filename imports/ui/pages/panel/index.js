Template.mainPanel.helpers({
  pathForNewVacancy: function() {
    return FlowRouter.path("newVacancy");
  },
  pathForStudentProfile: function() {
    return FlowRouter.path("studentProfile");
  },
  pathForCompanyProfile: function() {
    return FlowRouter.path("companyProfile");
  },
  vacancies: function() {
    return Vacancies.find().fetch();
  }
});

