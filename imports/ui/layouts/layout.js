Template.ApplicationLayout.events({
  "click #logout": function() {
    Accounts.logout();
  }
});

Template.ApplicationLayout.helpers({
  base_classes: function() {
    if (isDifferentLayout()) return "no-padding";
  }
});

Template.header.helpers({
  hasToggleIcon: function() {
    if (isDifferentLayout()) return "no-toggle-btn";
  }
});

Template.registerHelper(
  'user', () => {
    return Meteor.user();
  }
);

Template.registerHelper(
  'avatar', (avatarSize, user) => {
    
    var md5hash = Gravatar.hash(Meteor.user().emails[0].address);
      
    md5hash = md5hash || "3eda6fcd3204ef285fa52176c28c4d3e"; // Equivalent to Gravatar.hash( 'none@none.com' );
    return Gravatar.imageUrl(md5hash, {
      secure: true,
      size: avatarSize,
      d: 'mm',
      rating: 'pg'
    });
  }
);

function isDifferentLayout() {
  let route = Router.current().route.getName();
  return route == "home" || route == "companiesSignup" || route == "login" || route == "companiesSignup" || route == "studentsSignup"
}
