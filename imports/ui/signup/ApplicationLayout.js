Template.ApplicationLayout.helpers({
  base_classes: function() {
    let route = Router.current().route.getName();
    if (route == "home" || route == "studentsSignup" || route == "companiesSignup" || route == "studentsLogin" || route == "companiesLogin") {
      return "no-padding";
    }
  }
});

