import {
  Template
} from 'meteor/templating';

Template.HomeLayout.onRendered(loadApp);
Template.PanelLayout.onRendered(loadApp);

function loadApp() {		
  import '/imports/ui/materialadmin/core/source/App.js';		
  import '/imports/ui/materialadmin/core/source/AppNavigation.js';		
  import '/imports/ui/materialadmin/core/source/AppOffcanvas.js';		
  import '/imports/ui/materialadmin/core/source/AppCard.js';		
  import '/imports/ui/materialadmin/core/source/AppForm.js';		
  import '/imports/ui/materialadmin/core/source/AppNavSearch.js';		
  import '/imports/ui/materialadmin/core/source/AppVendor.js';
}
