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

Template.HomeLayout.helpers({
  mobile_bg() {
    if(FlowRouter.current().route.name == 'home') {
      return 'mobile_bg';
    }
  }
});
