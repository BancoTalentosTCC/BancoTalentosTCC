Template.ApplicationLayout.events({
  "click #logout": function () {
    Accounts.logout();
  }
});

Template.ApplicationLayout.helpers({
  base_classes: function() {
    let route = Router.current().route.getName();
    if (route == "home" || route == "companiesSignup" || route == "login" || route == "companiesSignup" || route == "studentsSignup") {
      return "no-padding";
    }
  }
});

Template.registerHelper(
  'user', () => {
    return Meteor.user();
  }
);


Template.header.helpers({
  hasToggleIcon: function () {
    let route = Router.current().route.getName();
    if (route == "home" || route == "companiesSignup" || route == "login" || route == "companiesSignup" || route == "studentsSignup") {
        return "no-toggle-btn";
    }
  }
});

/* Global helper for gravatar */
Template.registerHelper( 'avatar', function( avatarSize, user ) {
  if ( user && user.md5hash ) {
    var md5hash = user.md5hash;
  } else if ( this.md5hash ) {
    var md5hash = this.md5hash;
  }
  
  md5hash = md5hash || "3eda6fcd3204ef285fa52176c28c4d3e"; // Equivalent to Gravatar.hash( 'none@none.com' );
  return Gravatar.imageUrl( md5hash, { secure: true, size: avatarSize, d: 'mm', rating: 'pg' } );  
});
