Template.registerHelper(
  'user', () => {
    return Meteor.user();
  }
);

Template.registerHelper(
  'avatar', (avatarSize, user) => {
    if (typeof(user) == "string") {
      var email = Meteor.users.find({_id: user}).fetch()[0].emails[0].address;
      var md5hash = Gravatar.hash(email);
    }
    else if (user._id) var md5hash = Gravatar.hash(user.emails[0].address);
    md5hash = md5hash || "3eda6fcd3204ef285fa52176c28c4d3e"; // Equivalent to Gravatar.hash( 'none@none.com' );
    return Gravatar.imageUrl(md5hash, {
      secure: true,
      size: avatarSize,
      d: 'mm',
      rating: 'pg'
    });
  }
);

Template.registerHelper(
  'formatDate', (milliseconds) => {
    var date = new Date(milliseconds);
    var dateFormated = date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear() + " às " + date.getHours() + ":" + date.getMinutes()
    return dateFormated ;
  }
);

Template.registerHelper(
  'isCompany', (user) => {
    if (user) return Roles.userIsInRole(user._id, 'company', 'user-type');
    else return Roles.userIsInRole(Meteor.userId(), 'company', 'user-type');
  }
);

Template.registerHelper(
  'isStudent', (user) => {
    if (user) return Roles.userIsInRole(user._id, 'student', 'user-type');
    else return Roles.userIsInRole(Meteor.userId(), 'student', 'user-type');
  }
);

Template.registerHelper(
  'isSelected', (key, value) => {
    return key == value ? 'selected' : '';
  }
);

Template.registerHelper(
  'daysAgo', (date) => {
    let now = new Date().getTime();
    let diff = now - date;
    diff = parseInt(diff / 86400000);
    if(diff == 0) return 'Hoje';
    else if(diff == 1) return 'Há 1 dia atrás';
    else return ('Há ' + diff + ' dias atrás');

  }
);

Template.body.events({
  // horizontal and vertical search tabs
  'click .nav-tabs a, click .nav-tabs-vert a': function(e) {
    e.preventDefault();
    $(e.currentTarget).tab('show'); 
  }
});
