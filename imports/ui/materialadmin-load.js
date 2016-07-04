Template.ApplicationLayout.onRendered(function () {
    import '../ui/components/js/core/source/App.js';
    import '../ui/components/js/core/source/AppNavigation.js';
    import '../ui/components/js/core/source/AppOffcanvas.js';
    import '../ui/components/js/core/source/AppCard.js';
    import '../ui/components/js/core/source/AppForm.js';
    import '../ui/components/js/core/source/AppNavSearch.js';
    import '../ui/components/js/core/source/AppVendor.js';
    console.log("App JS have been built");
});

Template.studentsLogin.onRendered(function () {
    import '../ui/components/js/core/source/AppForm.js';
});

Template.companiesLogin.onRendered(function () {
    import '../ui/components/js/core/source/AppForm.js';
});