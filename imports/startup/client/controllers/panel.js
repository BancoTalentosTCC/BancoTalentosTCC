PanelController = RouteController.extend({
  onBeforeAction: function () {
    if (Meteor.userId()) {
      this.controlPermissions();
    }
    else {
      Router.go("login")
    }
    this.next();
  },
  controlPermissions: function() {}
});
