Template.registerHelper('pathForJobs', (id) => {
  return routeForUser("studentjobs", "companyjobs");
});

Template.registerHelper('pathForJob', (id) => {
  return routeForUser("/estudante/vagas/" + id, "/empresa/vagas/" + id)
});

Template.registerHelper('pathForNewJob', () => {
  return FlowRouter.path("newJob");
});

Template.registerHelper('pathForMyProfile', () => {
  return routeForUser("studentProfile", "companyProfile");
});

Template.registerHelper('pathForPanel', () => {
  return routeForUser("student", "company");
});

Template.registerHelper('pathForCompanies', () => {
  return FlowRouter.path("studentCompanies");
});

Template.registerHelper('pathForStudents', () => {
  return FlowRouter.path("companyStudents");
});

Template.registerHelper('pathForProfile', (id) => {
  return routeForUser("/estudante/empresas/" + id, "/empresa/alunos/" + id)
});

Template.registerHelper('pathForSettings', () => {
  return routeForUser("studentsettings", "companysettings");
});
  
Template.registerHelper('pathForHome', () => {
  return FlowRouter.path("home");
});

Template.registerHelper('pathForPanel', () => {
    return routeForUser("student", "company");
});

Template.registerHelper('pathForStudents', () => {
  return FlowRouter.path("companyStudents");
});

// PARAMS MUST BE STUDENT AND COMPANY PATHES RESPECTIVELY
function routeForUser(studentpath, companyPath) {
  if(Roles.userIsInRole(Meteor.userId(), 'student', 'user-type')){
    return FlowRouter.path(studentpath);
  }
  else if(Roles.userIsInRole(Meteor.userId(), 'company', 'user-type')){
    return FlowRouter.path(companyPath);
  } 
}