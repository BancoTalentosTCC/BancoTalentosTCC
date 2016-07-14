Router.configure({
  layoutTemplate: 'ApplicationLayout',

});

Router.map(function() {
  this.route('home', function () {
      this.render('header', {to: 'header'});
      this.render('home');
    }, 
    { path: '/' }
  );    

  this.route('studentsLogin', function () {
      this.render('header', {to: 'header'});
      this.render('studentsLogin');
    }, 
    { path: '/students/login' }
  );

  this.route('companiesLogin', function () {
      this.render('header', {to: 'header'});
      this.render('companiesLogin');
    }, 
    { path: '/companies/login' }
  );

  this.route('companiesSignup', function () {
      this.render('header', {to: 'header'});
      this.render('companies.signup');
    }, 
    { path: '/signup/companies' }
  );

  this.route('studentsSignup', function () {
      this.render('header', {to: 'header'});
      this.render('students_signup');
    },
    { path: 'signup/students' }
  );

  this.route('studentPanel', function () {
      this.render('header', {to: 'header'});
      this.render('studentPanel');
    }, 
    { path: 'students/panel' }
  );

  this.route('companyPanel', function () {
      this.render('header', {to: 'header'});
      this.render('companyPanel');
    }, 
    { path: 'companies/panel' }
  );
    
});

Router.onAfterAction(function() {
     document.title = 'Banco de Talentos Univás - '+ this.route.getName();
   }
);