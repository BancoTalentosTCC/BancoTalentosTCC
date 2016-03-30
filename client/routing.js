Router.configure({
  layoutTemplate: 'ApplicationLayout'
});

Router.map(function() {
  this.route('home', {path: '/'});
  this.route('stepper', {path: '/components/stepper'});
});

Router.route('signup', function () {
  this.render('steps');
  this.render('stepper', {to: 'stepper'});
  this.render('step1', {to: 'step1'});
  this.render('step2', {to: 'step2'});
  this.render('step3', {to: 'step3'});
  this.render('step4', {to: 'step4'});
  this.render('step5', {to: 'step5'});
});

