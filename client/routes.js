Router.configure({
  layoutTemplate: 'ApplicationLayout'
});

Router.map(function() {
  this.route('home', {path: '/'});
  this.route('stepper', {path: '/components/stepper'});
  this.route('studentsLogin', {path: '/students/login'});
  this.route('companiesLogin', {path: '/companies/login'});
  this.route('companies.signup', {path: '/companies/signup'});
  this.route('signup'), {path: '/signup/:step_id'};
});

Router.route('/students/signup/:step_id', function () {

  stepNumber = this.params.step_id;
  this.render('studentsSignup');
  this.render('stepper', {to: 'stepper'});
  this.render('step'+stepNumber, {to: 'form'});
},
{
  name: 'students.signup'
});
