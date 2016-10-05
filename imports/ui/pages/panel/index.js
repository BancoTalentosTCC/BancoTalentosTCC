Template.mainPanel.helpers({
  jobs: function() {
    return Jobs.find({}, {sort: {createdAt: -1}}).fetch();
  }
});
