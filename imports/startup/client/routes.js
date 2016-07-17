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

  this.route('login', function () {
      if (Roles.userIsInRole(Meteor.userId(), 'student', 'default-group')) {
        Router.go('studentPanel'); 
      }
      else if (Roles.userIsInRole(Meteor.userId(), 'company', 'default-group')) {
        Router.go('companyPanel'); 
      }
      else {
        this.render('header', {to: 'header'});
        this.render('login');
      }
    }, 
    { path: 'login' }
  );

  this.route('companiesSignup', function () {
      this.render('header', {to: 'header'});
      this.render('companiesSignup');
    }, 
    { path: '/signup/companies' }
  );

  this.route('studentsSignup', function () {
      this.render('header', {to: 'header'});
      this.render('studentsSignup');
    },
    { path: 'signup/students' }
  );

  this.route('studentPanel', function () {
      this.render('header', {to: 'header'});
      this.render('studentPanel');
      
      if(!Meteor.userId()) {
        Router.go('login');
      }
      else if (Roles.userIsInRole(Meteor.userId(), 'student', 'default-group')) {
        this.render('studentPanel');
      }
      else if (Roles.userIsInRole(Meteor.userId(), 'company', 'default-group')) {
        Router.go('companyPanel'); 
      }
    }, 
    { path: 'panel/student' }
  );

  this.route('companyPanel', function () {
      this.render('header', {to: 'header'});

      if(!Meteor.userId()) {
        Router.go('login');
      }
      else if (Roles.userIsInRole(Meteor.userId(), 'company', 'default-group')) {
        this.render('companyPanel');
      }
      else if (Roles.userIsInRole(Meteor.userId(), 'student', 'default-group')) {
        Router.go('studentPanel'); 
      }
    }, 
    { path: 'panel/company' }
  );    
});

Router.onAfterAction(function() {
     document.title = 'Banco de Talentos Univás - '+ this.route.getName();
   }
);