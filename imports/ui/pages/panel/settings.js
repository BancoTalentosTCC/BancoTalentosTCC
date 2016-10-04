import {
  Template
} from 'meteor/templating';

Template.settings.onRendered(function(){
  $('.nav-settings-tab a').click(function (e) { 
    e.preventDefault(); 
    $(this).tab('show'); 
  });
});

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

Template.personalData.onRendered(function () {
  //tabs
  $('.nav-tabs a').click(function (e) { 
    e.preventDefault(); 
    $(this).tab('show'); 
  });

  //summernote 
  if (! $('#aboutme').data('summernote')) {
      $('#aboutme').summernote({
        height: $('#aboutme').height() + 150
      });
  };
});

Template.companyGenSettings.onRendered(function () {
  //tabs
  $('.nav-tabs a').click(function (e) { 
    e.preventDefault(); 
    $(this).tab('show'); 
  });
});
