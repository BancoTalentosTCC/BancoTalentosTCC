import {Template} from 'meteor/templating';

Template.wizard.onRendered(function(){
  var template = this;
  var wizard = template.find('#wizard');

  handleTabShow = function(tab, navigation, index, wizard) {
    var total = navigation.find('li').length;
    var current = index + 0;
    var percent = (current / (total - 1)) * 100;
    var percentWidth = 100 - (100 / total) + '%';

    navigation.find('li').removeClass('done');
    navigation.find('li.active').prevAll().addClass('done');

    wizard.find('.progress-bar').css({
      width: percent + '%'
    });
    $('.form-wizard-horizontal').find('.progress').css({
      'width': percentWidth
    });
  };

  var jqueryValidate = function(tab, navigation, index) {
    var form = $(wizard).find('.form-validation');
    var valid = form.valid();
    if (!valid) {
      form.data('validator').focusInvalid();
      return false;
    }
  }

  $(wizard).bootstrapWizard({
    'nextSelector': '#next',
    'previousSelector': '#previous',
    'firstSelector': '#first',
    'lastSelector': '#last',
    'onTabShow': function(tab, navigation, index) {
      handleTabShow(tab, navigation, index, $(wizard));
    },
    onNext: jqueryValidate,
    onLast: jqueryValidate,
    onTabClick: jqueryValidate
  });
});
