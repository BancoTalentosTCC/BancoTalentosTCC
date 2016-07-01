Router.configure({
  layoutTemplate: 'ApplicationLayout',

});

Router.map(function() {
  this.route('home', function () {
      this.render('header', {to: 'header'});
      this.render('home');
    }, 
    {path: '/'}
  );    

  this.route('studentsLogin', function () {
      this.render('header', {to: 'header'});
      this.render('studentsLogin');
    }, 
    {path: '/students/login'}
  );


  this.route('companiesLogin', function () {
      this.render('header', {to: 'header'});
      this.render('companiesLogin');
    }, 
    {path: '/companies/login'}
  );

  this.route('companies.signup', function () {
      this.render('header', {to: 'header'});
      this.render('companies.signup');
    }, 
    {path: '/companies/signup'}
  );

  this.route('/students/signup/:step_id', function () {

    this.render('header', {to: 'header'});

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
    }
  );
});

// Router.onAfterAction(function() {
//         document.title = 'Banco de Talentos Univás - '+ this.route.getName();
//       }
// );
