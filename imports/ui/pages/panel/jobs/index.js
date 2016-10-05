orderBy = new Deps.Dependency();
orderByValue = ""
findByValue = ""
searchValue = ""

Template.jobs.events({
  "click #orderBy a": function(event) {
    orderByValue = event.toElement.id;
    orderBy.changed();
  },
  "click #findBy a": function(event) {
    findByValue = event.toElement.id;
    orderBy.changed();
  },
  "input #searchInput": function(event) {
    searchValue = event.currentTarget.value;
    orderByValue = 'createdAt'
    findByValue = ""
    orderBy.changed();
  }
});

Template.jobs.helpers({
  jobs: function() {
    orderBy.depend();
    if (orderByValue) {
      var sortBy = {};
      if (orderByValue == "nome") sortBy[orderByValue] = 1;
      else if (orderByValue == "createdAt") sortBy[orderByValue] = -1;
    }
    return Jobs.find({ nome: eval("/.*"+searchValue+".*/i"), categoria: eval("/.*"+findByValue+".*/i")}, {sort: sortBy} ).fetch();
  }
});

Template.jobs.onRendered(function () {
  //tabs
  $('.nav-tabs a').click(function (e) { 
    e.preventDefault(); 
    $(this).tab('show'); 
  });
});
