Router.configure({
  layoutTemplate: 'ApplicationLayout',
  notFoundTemplate: 'pageNotFound'
  // loadingTemplate: 'loading'
});

Router.onBeforeAction(function () {
  this.render('header', { to: 'header' });
  this.render('menubar', { to: 'menubar' });
  this.next();
});

Router.map(function() {
  this.route("/", {
    name: "home",
    action: function() {
      this.render("home");
    },
    controller: "HomeController"
  });

  this.route("/login", {
    name: "login",
    action: function() {
      this.render("login");
    },
    controller: "HomeController"
  });

  this.route("/signup/companies", {
    name: "companiesSignup",
    action: function() {
      this.render('companiesSignup');
    }
  });

  this.route("/signup/students", {
    name: "studentsSignup",
    action: function() {
      this.render('studentsSignup');
    }
  });
});

Router.map(function() {
  this.route("/student", {
    name: "studentPanel",
    controller: "StudentController"
  });

  this.route('/student/profile', {
    name: "studentProfile",
    controller: "StudentController",
    action: function() {
      this.render('profile');
    }
  });

  this.route("/company", {
    name: "companyPanel",
    controller: "CompanyController"
  });

  this.route('/company/profile', {
    name: "companyProfile",
    controller: "CompanyController",
    action: function() {
      this.render('profile');
    }
  });

  this.route('/company/include', {
    name: "includeJobVacancy",
    controller: "CompanyController",
    action: function() {
      this.render('includeJobVacancy');
    }
  });
});

Router.onAfterAction(function() {
  document.title = 'Banco de Talentos Univás - ' + this.route.getName();
});
