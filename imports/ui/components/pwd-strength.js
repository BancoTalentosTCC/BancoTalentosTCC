/* Password strength validator */
Template.studentSignup.onRendered(function() {
  pwdValidate();
});

Template.companySignup.onRendered(function() {
  pwdValidate();
});

function pwdValidate() {
  $('#password').keyup(function(e) {
    var strongRegex = new RegExp("^(?=.{9,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{8,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    var enoughRegex = new RegExp("(?=.{8,}).*", "g");

    // less than 8, damn
    if (false == enoughRegex.test($(this).val())) {
      $('#passstrength .progress div').removeClass('progress-bar-success progress-bar-warning progress-bar-danger');
      $('#passstrength .progress div').addClass('progress-bar progress-bar-danger');
      $('#passstrength .progress div p').html('No mínimo 8');
    }
    // great password, dude!
    else if (strongRegex.test($(this).val())) {
      $('#passstrength .progress div').removeClass('progress-bar-error progress-bar-warning progress-bar-danger');
      $('#passstrength .progress div').addClass('progress-bar progress-bar-success');
      $('#passstrength .progress div p').html('Ótima senha');
    }
    // could be better, but still ok
    else if (mediumRegex.test($(this).val())) {
      $('#passstrength .progress div').removeClass('progress-bar-success progress-bar-error progress-bar-danger');
      $('#passstrength .progress div').addClass('progress-bar progress-bar-warning');
      $('#passstrength .progress div p').html('Senha mediana');
    }
    // awn, rly? this?
    else {
      $('#passstrength .progress div').removeClass('progress-bar-success progress-bar-warning progress-bar-error');
      $('#passstrength .progress div').addClass('progress-bar progress-bar-danger');
      $('#passstrength .progress div p').html('Senha fraca');
    }
    return true;
  });
}
