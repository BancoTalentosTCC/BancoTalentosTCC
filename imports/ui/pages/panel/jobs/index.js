orderBy = new Deps.Dependency();
orderByValue = 'createdAt'
findByValue = {}

Template.jobs.events({
  "click #orderBy a": function(event) {
    orderByValue = event.toElement.id;
    orderBy.changed();
  },
  "click #findBy a": function(event) {
    findByValue = {categoria: event.toElement.id};
    orderBy.changed();
  }
});

Template.jobs.helpers({
  jobs: function() {
    orderBy.depend();
    if (orderByValue == "createdAt") return Jobs.find(findByValue, {sort: {createdAt: 1}}).fetch();
    else if (orderByValue == "nome") return Jobs.find(findByValue, {sort: {nome: 1}}).fetch();
  }
});
