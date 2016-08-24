StudentController = PanelController.extend({
  controlPermissions: function() {
    if (Roles.userIsInRole(Meteor.userId(), 'company', 'default-group')) {
      this.render('notAllowed');
    }
    else { this.next(); }
  }
});
