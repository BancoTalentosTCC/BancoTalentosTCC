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
  this.render('students_signup');
  this.render('stepper', {to: 'stepper'});
  this.render('step'+stepNumber, {to: 'form'});

  //DOESN'T ALLOW ACCESSING STEPS 2, 3, 4 AND 5 THROUGH URL
  if ((parseInt(Session.get('completed')) + 1) < stepNumber) {
    Router.go('/signup/'+ (parseInt(Session.get('completed')) + 1));
  }

  //LOADS FIELDS ALREADY FILLED WHEN NAVIGATING BETWEEN STEPS
  if (stepNumber > 0 && stepNumber < 6) {
    Meteor.setTimeout( function() { Meteor.call('setInputs'); }, 50);
  }
},
{
  name: 'students.signup'
});

Router.onAfterAction(function() {
        document.title = 'Banco de Talentos Univás - '+ this.route.getName();
      }
);
