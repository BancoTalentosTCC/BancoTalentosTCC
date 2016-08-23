HomeController = RouteController.extend({
  onBeforeAction: function() {
    if (Roles.userIsInRole(Meteor.userId(), 'student', 'default-group')) {
      Router.go('studentPanel');
    }
    else if (Roles.userIsInRole(Meteor.userId(), 'company', 'default-group')) {
      Router.go('companyPanel');
    }
    this.render();
  }
});
