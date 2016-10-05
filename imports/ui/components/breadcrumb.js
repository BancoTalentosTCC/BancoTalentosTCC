import {Template} from 'meteor/templating';
breadcrumbDep = new Deps.Dependency();

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

Template.PanelLayout.onRendered(function (){
  Tracker.autorun(function() {
    var routeName = FlowRouter.getRouteName();
    breadcrumbDep.changed();
  });
});

Template.breadcrumb.helpers({
  breadcrumb: function() {
    breadcrumbDep.depend();
    values = [];
    path = FlowRouter.current().path;
    if (path.split('/').length == 2) return;
    do {
      current = path.substring(path.lastIndexOf("/") );

      if (!values.length) {
        title = FlowRouter.current().context.title;
        values.unshift({title: title, status: "active"});
      }
      else {
        title = current.replace("/", "");
        values.unshift({path: path, title: title.capitalize()});
      }

      path = path.replace(current, "" );
    }
    while (path.length > 0);

    return values;
    }
});

