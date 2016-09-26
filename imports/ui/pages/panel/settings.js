import {
  Template
} from 'meteor/templating';

Template.settings.rendered = function(){
  //summernote 
  if (! $('#aboutme').data('summernote')) {
      $('#aboutme').summernote({
        height: $('#aboutme').height() + 150
      });
  };

  //tabs
  $('.nav-tabs a').click(function (e) { 
    // e.preventDefault(); 
    $(this).tab('show'); 
  });
}
