Meteor.methods({
  displayErrors: function(error) {
    if (typeof(error.details) === 'string') {
      let str = JSON.parse(error.details)[0].name;
      Meteor.call('generateErrors', str.split(".").pop() + str.match( /\d+/g ).pop(), error.reason);
    }
    else if (typeof(error.details) === 'object') { 
      Meteor.call('generateErrors', error.details[0].name.split(".").pop(), error.reason);
    }
    else Meteor.call('generateErrors', 'email', T9n.get('error.accounts.' + error.reason));
  },
  generateErrors: function(name, reason) {
    $('#'+name).addClass('warning');
    toastr.error(reason, 'ERRO');

    let parent = $('#'+name).closest('.tab-pane')[0].id;
    document.querySelectorAll("a[href='#" + parent + "']")[0].className += " wizard-error";
  }
});
