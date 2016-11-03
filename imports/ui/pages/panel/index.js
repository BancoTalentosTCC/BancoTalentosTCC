Template.mainPanel.helpers({
  jobs: function() {
    return Jobs.find({}, {sort: {createdAt: -1}}).fetch();
  },
  applications: function() {
    let applications = Meteor.user().profile.applications;
    let jobs = [];

    applications.map(function(application) {
      let job = Jobs.find({_id: application}).fetch()[0];
      jobs.push(job);
    });
    return jobs;
  }
});

Template.mainPanel.events({
  "mouseenter .isSpecial": function(){
    $(".isSpecial").tooltip(); 
  }
});
