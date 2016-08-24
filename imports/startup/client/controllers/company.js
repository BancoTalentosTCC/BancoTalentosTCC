CompanyController = PanelController.extend({
  controlPermissions: function() {
    if (Roles.userIsInRole(Meteor.userId(), 'student', 'default-group')) {
      this.render('notAllowed');
    }
  }
});
