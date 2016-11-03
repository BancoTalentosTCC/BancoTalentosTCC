Template.HomeLayout.helpers({
  mobile_bg: function() {
    if(Session.get('isHome')) return 'mobile_bg';
  }
});

