orderBy = new Deps.Dependency();
orderByValue = 'createdAt'

Template.jobs.events({
  "click #orderByDate": function(event) {
    orderByValue = "createdAt";
    orderBy.changed();
  },
  "click #orderByName": function(event) {
    orderByValue = "nome";
    orderBy.changed();
  }
});

Template.jobs.helpers({
  jobs: function() {
    orderBy.depend();
    if (orderByValue == "createdAt") return Jobs.find({}, {sort: {createdAt: 1}}).fetch();
    else if (orderByValue == "nome") return Jobs.find({}, {sort: {nome: 1}}).fetch();
  }
});
