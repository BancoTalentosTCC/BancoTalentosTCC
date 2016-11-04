import {Template} from 'meteor/templating';
import '/imports/ui/components/selects.js';
import '/imports/ui/materialadmin/libs/jquery-validation/dist/jquery.validate.min.js';

Template.formField.onRendered(function(){
  var template = this;
  var input = template.find('.form-control');
  floatingLabel(input);
  validation(input);

  jQuery.validator.setDefaults({
    debug: true,
    success: "valid"
  });
  $( "form" ).validate({
    rules: {
      field: {
        required: true,
        email: true
      },
      password: "required",
      password_confirmation: {
        equalTo: "#password"
      }
    }
  });
});

Template.formField.events({
  // FLOATING LABEL
  'keyup, change .form-control': function(event) {
    var input = $(event.currentTarget);
    if ($.trim(input.val()) !== '') {
      input.addClass('dirty').removeClass('static');
    } else {
      input.removeClass('dirty').removeClass('static');
    }
  }
});

Template.formField.helpers({
  isSelect: function(type) {
    if (type==='select') return true;
  },
  isTextArea: function(type) {
    if (type==='textarea') return true;
  },
  isText: function(type) {
    if (type !=='select' && type !=='textarea') return true;
  }
});

function floatingLabel(elem) {
  Meteor.setTimeout(function() {
    if ($(elem).val() !== '') {
      $(elem).addClass('static').addClass('dirty');
    }
    $(elem).after('<div class="form-control-line"></div>');
  }, 200);
}

function validation(elem) {
  if (!$.isFunction($.fn.validate)) {
    return;
  }
  $.validator.setDefaults({
    highlight: function (elem) {
      $(elem).closest('.form-group').addClass('has-error');
    },
    unhighlight: function (elem) {
      $(elem).closest('.form-group').removeClass('has-error');
    },
    errorElement: 'span',
    errorClass: 'help-block',
    errorPlacement: function (error, elem) {
      if (elem.parent('.input-group').length) {
        error.insertAfter(elem.parent());
      }
      else if (elem.parent('label').length) {
        error.insertAfter(elem.parent());
      }
      else {
        error.insertAfter(elem);
      }
    }
  });
};
