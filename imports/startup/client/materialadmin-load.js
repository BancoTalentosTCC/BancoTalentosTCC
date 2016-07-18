import { Template } from 'meteor/templating';

/* Runs fixFloatingLabels() before the route is completely changed */
Router.onBeforeAction(function () {
    Meteor.setTimeout(function () {
        fixFloatingLabels();
    }, 0);
    this.next();
});


/* NOTICE: This was created due to a bug that I haven't managed to solve so far.
 * When a route is switched, somehow the floating labels from AppForm.js suddenly
 * stop working. This was the only way I managed to fix it.
 */
function fixFloatingLabels() {
    var o = this;
    $('.floating-label .form-control').on('keyup change', function (e) {
        var input = $(e.currentTarget);
        if ($.trim(input.val()) !== '') {
            input.addClass('dirty').removeClass('static');
        }
        else {
            input.removeClass('dirty').removeClass('static');
        }
    });
    $('.floating-label .form-control').each(function () {
        var input = $(this);
        if ($.trim(input.val()) !== '') {
            input.addClass('static').addClass('dirty');
        }
    });
    $('.floating-label .form-control').each(function () {
        $(this).after('<div class="form-control-line"></div>');
    });
}
Template.ApplicationLayout.onRendered(function () {
    import '/imports/ui/materialadmin/core/source/App.js';
    import '/imports/ui/materialadmin/core/source/AppNavigation.js';
    import '/imports/ui/materialadmin/core/source/AppOffcanvas.js';
    import '/imports/ui/materialadmin/core/source/AppCard.js';
    import '/imports/ui/materialadmin/core/source/AppForm.js';
    import '/imports/ui/materialadmin/core/source/AppNavSearch.js';
    import '/imports/ui/materialadmin/core/source/AppVendor.js';
    console.log("All App JS has been built");
});