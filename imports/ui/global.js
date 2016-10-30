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
  'formatDate', (milliseconds, type) => {
    var date = new Date(milliseconds);

    switch(type) {
      case "fullDate":
        return date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear() + " às " + ('0' + date.getHours()).substr(-2) + ":" + ('0' + date.getMinutes()).substr(-2);
      case "noHour":
        return date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear();
    }
  }
);

Template.registerHelper(
  'calculateAge', (string) => {
    var birthday = string.split("-");
    var date = new Date(birthday[2], birthday[1] - 1, birthday[0], 23, 59, 59);

    var ageDifMs = Date.now() - date.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch

    var result = Math.abs(ageDate.getFullYear() - 1970);
    if (result > 1) {
      return result + " anos"
    }
    else return result + " ano"
  }
);

Template.registerHelper(
  'getGender', (string) => {
    if (string === "m") {
      return "o"
    }
    else return "a"
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
    if(diff == 0) return 'hoje';
    else if(diff == 1) return 'há 1 dia atrás';
    else return ('há ' + diff + ' dias atrás');

  }
);

Template.registerHelper(
  'jobStatus', (status) => {
    if (status == 'active') {
      return '<span class="label label-primary"><i class="md mdi mdi-checkbox-marked-circle"></i>&nbsp;Ativa</span>';
    }
    else if (status == 'expired') {
      return '<span class="label label-warning"><i class="md mdi mdi-alert-circle"></i>&nbsp;Expirada</span>';
    }
    else if (status == 'disabled') {
      return '<span class="label label-default"><i class="md mdi mdi-minus-circle"></i>&nbsp;Desabilitada</span>';
    }
  }
);

Template.registerHelper(
  'job', () => {
    var id = FlowRouter.getParam('id');
    return Jobs.find({_id: id}).fetch()[0];
  }
);

Template.registerHelper(
  'userById', (id) => {
    return Meteor.users.find({_id: id}).fetch();
  }
);

Template.body.events({
  // horizontal and vertical search tabs
  'click .nav-tabs a, click .nav-tabs-vert a': function(e) {
    e.preventDefault();
    $(e.currentTarget).tab('show'); 
  }
});
