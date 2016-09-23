import {
  Template
} from 'meteor/templating';


Template.HomeLayout.rendered = function() {
  this.autorun(_.bind(function() {
    Deps.afterFlush(function() {
      // only initialize when DOM is ready
      import '/imports/ui/materialadmin/core/source/AppForm.js';
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
