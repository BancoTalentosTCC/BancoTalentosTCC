Template.header.events({
  // fix toggle button event
  'click .menubar-toggle': function (e) {
    e.preventDefault();
    if (!$('.device-xs').is(':visible')) {
      handleToggle();
    } else {
      handleToggleMob();
    }
  },
  "click #logout": function(e) {
    e.preventDefault();
    $('body').removeClass('menubar-pin');
  }
});

Template.header.onRendered(function(){
  treatMenuHover();
});

function handleToggle() {
  if(!$('body').hasClass('menubar-pin')) {
    $('body').toggleClass('menubar-pin');
  }
  else {
    $('body').removeClass('menubar-pin');
  }
}

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

  if(menuItemClicked === true) {
    $("#base").on( "click", function() {
      $('body').removeClass('menubar-pin');
    });
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

function treatMenuHover() {
  $('body.menubar-hoverable').on('mouseenter', '#menubar', function (e) {
    setTimeout(function () {
      handleToggleMob();
    }, 1);
  });
}
