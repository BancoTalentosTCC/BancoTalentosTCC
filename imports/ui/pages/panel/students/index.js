orderBy = new Deps.Dependency();
findByValue = "";
searchValue = "";

Template.students.events({
  "click #findBy a": function(event) {
    findByValue = event.toElement.id;
    orderBy.changed();
  },
  "input #searchInput": function(event) {
    searchValue = event.currentTarget.value;
    orderByValue = "createdAt";
    findByValue = "";
    orderBy.changed();
  }
});

Template.students.helpers({
  students: function() {
    orderBy.depend();
    return Meteor.users.find({_id:{$ne:Meteor.userId()}, "profile.nome": eval("/.*"+searchValue+".*/i"), "profile.formacao.curso": eval("/.*"+findByValue+".*/i")}, {sort: {"profile.nome": 1}}).fetch();
  }
});

Template.students.onRendered(function () {
  //tabs
  $('.nav-tabs a').click(function (e) { 
    e.preventDefault(); 
    $(this).tab('show'); 
  });
});
