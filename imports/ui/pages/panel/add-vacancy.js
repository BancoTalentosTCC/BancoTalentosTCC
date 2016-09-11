import {
  Template
} from 'meteor/templating';
import '/client/html/pages/panel/add-vacancy.html';

var json = require('/imports/ui/components/skills.json');

Template.newVacancy.onCreated(function() {
  this.skills = new ReactiveVar(json);
});

Template.newVacancy.onRendered(function() { 
  $("#tags").chosen({
    no_results_text: "Sem resultados para",
    placeholder_text_single: "Selecione uma opção",
    placeholder_text_multiple: "Selecione tags para identificação"
  });
});

Template.newVacancy.helpers({
  skills: function() {
    return Template.instance().skills.get();
  }
});
