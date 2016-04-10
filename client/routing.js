Router.configure({
  layoutTemplate: 'ApplicationLayout'
});

Router.map(function() {
  this.route('home', {path: '/'});
  this.route('stepper', {path: '/components/stepper'});
});

Router.route('/signup/:step_id', function () {
  var step = this.params.step_id;
  this.render('steps');
  this.render('stepper', {to: 'stepper'});
  this.render('step'+step, {to: 'form'});
});



