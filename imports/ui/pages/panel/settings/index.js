import {Template} from 'meteor/templating';

Template.settings.events({
  'click .nav-tabs-vert a': function(event) { 
    event.preventDefault();
    BlazeLayout.render('PanelLayout', { main: "settings", settings: event.currentTarget.id });
  }
});

Template.studentSettings.onRendered(function () {
  //summernote 
  if (! $('#aboutme').data('summernote')) {
    $('#aboutme').summernote({
      height: $('#aboutme').height() + 150
    });
  };
});

