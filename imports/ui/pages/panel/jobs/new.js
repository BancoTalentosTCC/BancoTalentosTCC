import {Template} from 'meteor/templating';
import '/client/html/pages/panel/jobs/new.html';
import '/imports/api/collections/jobs.js';
import '/imports/api/collections/tags.js';

Template.newJob.onCreated(function() {
  this.skills = new ReactiveVar(
    Tags.find().fetch()
  );
});

Template.newJob.rendered = function() {
  this.autorun(_.bind(function() {
    Deps.afterFlush(function() {
      // only initialize when DOM is ready
      reloadChosen();
      setSummernote();
      loadCalendar();
    });
  }, this));
}

Template.newJob.events({
  "submit form": function(event) {
    event.preventDefault();
    //REMOVE ERRORS
    $('.warning').removeClass('warning');

    let target = event.target;

    vacancy = {
      categoria: targetValue(target["categoria"]),
      tipo_vaga: targetValue(target["tipo_vaga"]),
      nome: targetValue(target["nome"]),
      expiration: formatDate($('#expiration').val()),
      descricao: targetValue(target["descricao"]),
      especial: $('#especial').is(':checked'),
      tags: $('#tags').val()
    }

    Meteor.call('saveJob', vacancy, function(error, result) {
      if (error) {
        Meteor.call('displayErrors', error);
      }
      else {
        FlowRouter.go('/empresa/vagas/' + result);
        toastr.success('Nova oportunidade cadastrada com sucesso', 'Vaga Registrada!');
        $('.btn-send').button('reset');
      }
    });
  },
  "click .btn-send": function() {
    var btn = $(this);
    btn.button('loading');
  }
});

function targetValue(target) {
  return target.value != "" ? target.value : undefined;
}

function reloadChosen() {
  $("#tags").chosen({
    no_results_text: "Sem resultados para",
    placeholder_text_single: "Selecione uma opção",
    placeholder_text_multiple: "Selecione tags para identificação"
  });
}

function setSummernote() {
  $('#descricao').summernote({
    height: $('#descricao').height() + 150,
    // clear clipboard before paste
    callbacks: {
      onPaste: function (e) {
        var bufferText = ((e.originalEvent || e).clipboardData || window.clipboardData).getData('Text');

        e.preventDefault();

        // Firefox fix
        setTimeout(function () {
          document.execCommand('insertText', false, bufferText);
        }, 10);
      }
    },
  });
}

function loadCalendar() {
  $('#expiration').datepicker({
    format: 'dd-mm-yyyy',
    language: 'pt-BR',
    startDate: new Date
  });

  $('#expiration').focus(function() {
    $('#expiration').blur();
  });
}

function formatDate(value) {
  var from = value.split("-");
  var date = new Date(from[2], from[1] - 1, from[0], 23, 59, 59);
  return date.getTime();
}

Template.newJob.helpers({
  skills: function() {
    return Template.instance().skills.get();
  }
});

