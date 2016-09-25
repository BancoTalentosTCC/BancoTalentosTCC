import {
  Template
} from 'meteor/templating';


Template.HomeLayout.rendered = function() {
  this.autorun(_.bind(function() {
    Deps.afterFlush(function() {
      // only initialize when DOM is ready
      import '/imports/ui/materialadmin/core/source/AppForm.js';
      fixFloatingLabels();
    });
  }, this));
}

Template.PanelLayout.rendered = function() {
  this.autorun(_.bind(function() {
    Deps.afterFlush(function() {
      // only initialize when DOM is ready
      loadApp();
    });
  }, this));
}

function loadApp() {
  import '/imports/ui/materialadmin/core/source/App.js';		
  import '/imports/ui/materialadmin/core/source/AppNavigation.js';		
  import '/imports/ui/materialadmin/core/source/AppOffcanvas.js';		
  import '/imports/ui/materialadmin/core/source/AppCard.js';		
  import '/imports/ui/materialadmin/core/source/AppForm.js';		
  import '/imports/ui/materialadmin/core/source/AppNavSearch.js';		
  import '/imports/ui/materialadmin/core/source/AppVendor.js';
}

function fixFloatingLabels() {
  var o = this;
  $('.floating-label .form-control').on('keyup change', function(e) {
    var input = $(e.currentTarget);
    if ($.trim(input.val()) !== '') {
      input.addClass('dirty').removeClass('static');
    } else {
      input.removeClass('dirty').removeClass('static');
    }
  });
  $('.floating-label .form-control').each(function() {
    var input = $(this);
    if ($.trim(input.val()) !== '') {
      input.addClass('static').addClass('dirty');
    }
  });
  $('.floating-label .form-control').each(function() {
    $(this).after('<div class="form-control-line"></div>');
  });
}

