Template.jobs.helpers({
  jobs: function() {
    return Jobs.find().fetch();
  }
});
