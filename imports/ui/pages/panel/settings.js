import {
  Template
} from 'meteor/templating';

Template.settings.rendered = function(){

  if (! $('#aboutme').data('summernote')) {
      $('#aboutme').summernote({
        height: $('#aboutme').height() + 150
      });
  };
}
