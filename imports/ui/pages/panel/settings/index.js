import {Template} from 'meteor/templating';

Template.settings.events({
  'click #personalData': function(event) { 
    event.preventDefault();
    BlazeLayout.render('PanelLayout', { header: "header", menubar: "menubar", main: "settings", settings: "personalData" });
  },
  'click #education': function(event) { 
    event.preventDefault();
    BlazeLayout.render('PanelLayout', { header: "header", menubar: "menubar", main: "settings", settings: "education" });
  },
  'click #idioms': function(event) { 
    event.preventDefault();
    BlazeLayout.render('PanelLayout', { header: "header", menubar: "menubar", main: "settings", settings: "idioms" });
  },
  'click #qualifications': function(event) { 
    event.preventDefault();
    BlazeLayout.render('PanelLayout', { header: "header", menubar: "menubar", main: "settings", settings: "qualifications" });
  },
  'click #professionalexp': function(event) { 
    event.preventDefault();
    BlazeLayout.render('PanelLayout', { header: "header", menubar: "menubar", main: "settings", settings: "professionalexp" });
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

