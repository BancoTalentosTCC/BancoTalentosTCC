FlowRouter.route('/', {
  name: 'home',
  triggersEnter: [
    function(context, redirect, stop) {
      Tracker.autorun(function() {
        var id = Meteor.userId();
        var ready = Roles.subscription.ready();
        if (id && ready) {
          if(FlowRouter.current().route.name == 'home') {
            if(Roles.userIsInRole(Meteor.userId(), 'student', 'default-group')){
              FlowRouter.go("student");
            }
            else if(Roles.userIsInRole(Meteor.userId(), 'company', 'default-group')){
              FlowRouter.go("company");
            }
          }
        }
      });
    }
  ],
  action: function(params) {
    BlazeLayout.render('HomeLayout', { header: "header", main: "home" });
  }
});

FlowRouter.route('/cadastro/estudante', {
  name: 'studentSignup',
  action: function(params) {
    BlazeLayout.render('HomeLayout', { header: "header", main: "studentSignup" });
  }
});

FlowRouter.route('/cadastro/empresa', {
  name: 'companySignup',
  action: function(params) {
    BlazeLayout.render('HomeLayout', { header: "header", main: "companySignup" });
  }
});

var panel = FlowRouter.group({
  triggersEnter: [
    function(context, redirect) {
      Meteor.subscribe('jobs');
    },
    function(context, redirect, stop) {
      Tracker.autorun(function() {
        var id = Meteor.userId();
        var ready = Roles.subscription.ready();
        if (!id && ready) {
          FlowRouter.go("home");
        }
      });
    }
  ]
});

var company = panel.group({
  prefix: "/empresa",
  triggersEnter: [
    function(context, redirect, stop) {
      Tracker.autorun(function() {
        var ready = Roles.subscription.ready();
        var isCompany = Roles.userIsInRole(Meteor.userId(), 'company', 'default-group');
        if (ready && !isCompany) {
          BlazeLayout.render('PanelLayout', { header: "header", menubar: "menubar", main: "notAllowed" });
          stop();
        }
      });
    }
  ]
});

company.route('/', {
  name: 'company',
  action: function() {
    BlazeLayout.render('PanelLayout', { header: "header", menubar: "menubar", main: "mainPanel" });
  }
});

company.route('/perfil', {
  name: 'companyProfile',
  action: function() {
    BlazeLayout.render('PanelLayout', { header: "header", menubar: "menubar", main: "profile" });
  }
});

company.route('/vagas/nova', {
  name: 'newJob',
  action: function(params) {
    BlazeLayout.render('PanelLayout', { header: "header", menubar: "menubar", main: "newJob" });
  }
});

company.route('/vagas', {
  name: 'companyjobs',
  action: function(params) {
    BlazeLayout.render('PanelLayout', { header: "header", menubar: "menubar", main: "jobs" });
  }
});

company.route('/alunos', {
  name: 'studentSearch',
  action: function(params) {
    BlazeLayout.render('PanelLayout', { header: "header", menubar: "menubar", main: "studentSearch" });
  }
});

var student = panel.group({
  prefix: "/estudante",
  triggersEnter: [
    function(context, redirect, stop) {
      Tracker.autorun(function() {
        var ready = Roles.subscription.ready();
        var isStudent = Roles.userIsInRole(Meteor.userId(), 'student', 'default-group');
        if (ready && !isStudent) {
          BlazeLayout.render('PanelLayout', { header: "header", menubar: "menubar", main: "notAllowed" });
          stop();
        }
      });
    }
  ]
});

student.route('/', {
  name: 'student',
  action: function() {
    BlazeLayout.render('PanelLayout', { header: "header", menubar: "menubar", main: "mainPanel" });
  }
});

student.route('/perfil', {
  name: 'studentProfile',
  action: function() {
    BlazeLayout.render('PanelLayout', { header: "header", menubar: "menubar", main: "profile" });
  }
});

student.route('/vagas', {
  name: 'studentjobs',
  action: function(params) {
    BlazeLayout.render('PanelLayout', { header: "header", menubar: "menubar", main: "jobs" });
  }
});

student.route('/vagas/:id', {
  name: 'studentJob',
  action: function() {
    BlazeLayout.render('PanelLayout', { header: "header", menubar: "menubar", main: "showJob" });
  }
});

student.route('/alunos', {
  name: 'companySearch',
  action: function(params) {
    BlazeLayout.render('PanelLayout', { header: "header", menubar: "menubar", main: "companySearch" });
  }
});

FlowRouter.notFound = {
  action: function() {
    BlazeLayout.render('PanelLayout', { header: "header", menubar: "menubar", main: "pageNotFound" });
  }
};
