stepNumber=0;

Router.configure({
  layoutTemplate: 'ApplicationLayout'
});

Router.map(function() {
  this.route('home', {path: '/'});
  this.route('stepper', {path: '/components/stepper'});
  this.route('login', {path: '/signin/login'});
  this.route('signup'), {path: '/signup/:step_id'};
});

Router.route('/signup/:step_id', function () {
  stepNumber = this.params.step_id;
  this.render('steps');
  this.render('stepper', {to: 'stepper'});
  this.render('step'+stepNumber, {to: 'form'});

  Meteor.setTimeout(
	function() { Meteor.call('setInputs'); }
  	, 50);
});
