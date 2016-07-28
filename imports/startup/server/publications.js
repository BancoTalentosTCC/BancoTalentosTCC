Meteor.publish( 'user', function() {
  return Meteor.users.find( this.userId, {
    fields: { md5hash: 1 }
  });
});
