Template.ApplicationLayout.helpers({
  base_classes: function() {
    let route = Router.current().route.getName();
    if (route == "home" || route == "companiesSignup" || route == "studentsLogin" || route == "companiesLogin" || route == "companiesSignup" || route == "studentsSignup") {
      return "no-padding";
    }
  } 
});


Template.header.helpers({
  hasToggleIcon: function () {
    let route = Router.current().route.getName();
    if (route == "home" || route == "companiesSignup" || route == "studentsLogin" || route == "companiesLogin" || route == "companiesSignup" || route == "studentsSignup") {
        return "no-toggle-btn";
    }
  }
});
