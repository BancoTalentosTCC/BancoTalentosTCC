import {
  Template
} from 'meteor/templating';
import '/client/html/pages/panel/include.html';

var json = require('./skills.json');

Template.includeJobVacancy.onCreated(function() {
  this.skills = new ReactiveVar(json);
});

Template.includeJobVacancy.helpers({
  skills: function() {
    return Template.instance().skills.get();
  }
});