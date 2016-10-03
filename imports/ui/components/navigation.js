Template.header.events({
  // fix toggle button event
  'click .menubar-toggle': function (e) {
    e.preventDefault();
    if (!$('.device-xs').is(':visible')) {
      $('body').toggleClass('menubar-pin');
    } else {
      handleToggleMob();
    }
  }
});

function handleToggleMob() {
  var offcanvasVisible = $('body').hasClass('offcanvas-left-expanded');
  var menubarExpanded = $('#menubar').data('expanded');
  var menuItemClicked = $('body').hasClass('menubar-pin');

  if ((menuItemClicked === true || offcanvasVisible === false) && menubarExpanded !== true) {
    $('#content').one('mouseover', function (e) {
      handleMenubarLeave();
    });

    $('body').addClass('menubar-visible');
    $('#menubar').data('expanded', true);
    $('#menubar').triggerHandler('enter');
  }
}

function handleMenubarLeave() {
  $('body').removeClass('menubar-visible');

  // Don't close the menus when it is pinned on large viewports
  if ($('.device-md').is(':visible')) {
    if ($('body').hasClass('menubar-pin')) {
      return;
    }
  }
  $('#menubar').data('expanded', false);
}
