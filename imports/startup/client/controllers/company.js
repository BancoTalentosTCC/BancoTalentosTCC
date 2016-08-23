CompanyController = PanelController.extend({
  controlPermissions: function() {
    if (Roles.userIsInRole(Meteor.userId(), 'company', 'default-group')) {
      this.render('mainPanel');
    }
    else if (Roles.userIsInRole(Meteor.userId(), 'student', 'default-group')) {
      this.render('notAllowed');
    }
  }
});
