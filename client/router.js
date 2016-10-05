// define global title
FlowRouter.globals.push({
  title: 'Banco de Talentos'
});

// further routes and titles
FlowRouter.route('/', {
  name: 'home',
  triggersEnter: [
    function(context, redirect, stop) {
      Tracker.autorun(function() {
        var id = Meteor.userId();
        var ready = Roles.subscription.ready();
        if (id && ready) {
          if(FlowRouter.current().route.name == 'home') {
            if(Roles.userIsInRole(Meteor.userId(), 'student', 'user-type')){
              FlowRouter.go("student");
            }
            else if(Roles.userIsInRole(Meteor.userId(), 'company', 'user-type')){
              FlowRouter.go("company");
            }
          }
        }
      });
    }
  ],
  action: function(params) {
    BlazeLayout.render('HomeLayout', {main: "home" });
  }
});

var signup = FlowRouter.group({
  prefix: "/cadastro",
  name: "signup"
});

signup.route('/estudante', {
  name: 'studentSignup',
  title: "Cadastrar Aluno",
  action: function(params) {
    BlazeLayout.render('HomeLayout', {main: "studentSignup", wizard: "studentSteps" });
  }
});

signup.route('/empresa', {
  name: 'companySignup',
  title: "Cadastrar Empresa",
  action: function(params) {
    BlazeLayout.render('HomeLayout', {main: "companySignup" });
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
        var isCompany = Roles.userIsInRole(Meteor.userId(), 'company', 'user-type');
        if (ready && !isCompany) {
          BlazeLayout.render('PanelLayout', { main: "notAllowed" });
          stop();
        }
      });
    }
  ]
});

company.route('/', {
  name: 'company',
  title: "Painel da Empresa",
  action: function() {
    BlazeLayout.render('PanelLayout', { main: "mainPanel" });
  }
});

company.route('/perfil', {
  title: "Perfil",
  name: 'companyProfile',
  action: function() {
    BlazeLayout.render('PanelLayout', { main: "profile" });
  }
});

var companyJobs = company.group({
  prefix: "/vagas"
});

companyJobs.route('/', {
  name: 'companyjobs',
  title: "Vagas",
  action: function(params) {
    BlazeLayout.render('PanelLayout', { main: "jobs" });
  }
});

companyJobs.route('/nova', {
  name: 'newJob',
  title: "Nova Vaga",
  action: function(params) {
    BlazeLayout.render('PanelLayout', { main: "newJob" });
  }
});

companyJobs.route('/:id', {
  name: 'companyJob',
  title: 'Vaga',
  action: function() {
    BlazeLayout.render('PanelLayout', { header: "header", menubar: "menubar", main: "showJob" });
  }
});

company.route('/alunos', {
  triggersEnter: [
    function(context, redirect) {
      Meteor.subscribe('students');
    }
  ],
  name: 'companyStudents',
  title: "Estudantes",
  action: function(params) {
    BlazeLayout.render('PanelLayout', { main: "students" });
  }
});


company.route('/configuracoes', {
  name: 'companysettings',
  title: "Configurações",
  action: function(params) {
    BlazeLayout.render('PanelLayout', { header: "header", menubar: "menubar", main: "settings", settings: "companySettings"  });
  }
});

var student = panel.group({
  prefix: "/estudante",
  triggersEnter: [
    function(context, redirect, stop) {
      Tracker.autorun(function() {
        var ready = Roles.subscription.ready();
        var isStudent = Roles.userIsInRole(Meteor.userId(), 'student', 'user-type');
        if (ready && !isStudent) {
          BlazeLayout.render('PanelLayout', { main: "notAllowed" });
          stop();
        }
      });
    }
  ]
});

student.route('/', {
  name: 'student',
  title: "Painel do Aluno",
  action: function() {
    BlazeLayout.render('PanelLayout', { main: "mainPanel" });
  }
});

student.route('/perfil', {
  name: 'studentProfile',
  title: "Perfil",
  action: function() {
    BlazeLayout.render('PanelLayout', { main: "profile" });
  }
});

var studentJobs = student.group({
  prefix: "/vagas"
});

studentJobs.route('/', {
  name: 'studentjobs',
  title: "Vagas",
  action: function(params) {
    BlazeLayout.render('PanelLayout', { main: "jobs" });
  }
});


studentJobs.route('/:id', {
  name: 'studentJob',
  title: "Vaga",
  subscriptions: function(params) {
    Meteor.call('findCompanyByJob', params.id, function(error, result) {
      Meteor.subscribe('company', result, function() {
        Session.set('company', Meteor.users.find({_id: result}).fetch()[0]);
      });
    });
  },
  action: function() {
    BlazeLayout.render('PanelLayout', { main: "showJob" });
  }
});

student.route('/empresas', {
  title: "Empresas",
  name: 'studentCompanies',
  action: function(params) {
    BlazeLayout.render('PanelLayout', { main: "studentCompanies" });
  }
});

student.route('/configuracoes', {
  name: 'studentsettings',
  title: "Configurações",
  action: function(params) {
    BlazeLayout.render('PanelLayout', { header: "header", menubar: "menubar", main: "settings", settings: "studentSettings" });
  }
});

FlowRouter.notFound = {
  action: function() {
    BlazeLayout.render('PanelLayout', { main: "pageNotFound" });
  }
};

FlowRouter.route( '/verify-email/:token', {
  name: 'verify-email',
  title: "Verificando E-mail: ",
  action: function(params) {
    Accounts.verifyEmail( params.token, ( error ) =>{
      if ( error ) {
        Meteor.call('displayErrors', error);
      } else {
        FlowRouter.go( '/' );
        toastr.success('Você já pode acessar o painel', 'Email verificado!');
      }
    });
  }
});

// initialize flow router title
new FlowRouterTitle(FlowRouter);
