import {Template} from 'meteor/templating';

Template.showJob.events({
  'click #apply': function() {
    var btn = $(this)
    btn.button('loading');

    Meteor.call('applyToJob', FlowRouter.getParam('id'), function(error, result) {
      if (error) {
        Meteor.call('displayErrors', error);
      }
      else {
        toastr.success('Vaga candidatada! Aguarde contato, e boa sorte :)', 'Sucesso!');
      }
      btn.button('reset');
    });
  }
});

Template.showJob.onRendered(function () {
  $(document).ready(function() {
    $('.short-desc').shorten({
      "showChars" : 400,
      "moreText"	: "Ver mais",
      "lessText"	: "Menos",
    });
	});
});

Template.showJob.helpers({
  appliedToJob: function(job) {
    return job.applications.filter(function(studentId) {
      return (Meteor.userId() == studentId);
    });
  },
  isNotActive: function(status) {
    if (status !== "active") return true;
  }
});
