Template.students.helpers({
  students: function() {
    return Meteor.users.find({_id:{$ne:Meteor.userId()}}).fetch();
  }
});
