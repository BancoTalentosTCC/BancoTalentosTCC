Meteor.methods({
  displayErrors: function(error) {
    if (typeof(error.details) === 'string') {
      let str = JSON.parse(error.details)[0].name;
      let number = str.match(/\d+/g) ? str.match(/\d+/g).pop() : "";

      Meteor.call('generateErrors', str.split(".").pop() + number, error.reason);
    } else if (typeof(error.details) === 'object') {
      Meteor.call('generateErrors', error.details[0].name.split(".").pop(), error.reason);
    } else Meteor.call('generateErrors', '', T9n.get('error.accounts.' + error.reason));
  },
  generateErrors: function(name, reason) {
    //html5 vibration api
    if (navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate) {
      navigator.vibrate([500, 300, 100]);
    }

    $('#' + name).addClass('warning');
    toastr.error(reason, 'ERRO');

    if (FlowRouter.current().route.name == 'studentSignup') {
      Meteor.call('generateWizardErrors', name);
    }
  },
  generateWizardErrors: function(name) {
    let parent = $('#' + name).closest('.tab-pane')[0].id;
    document.querySelectorAll("a[href='#" + parent + "']")[0].className += " wizard-error";
  }
});
