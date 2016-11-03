if (Meteor.isClient) {
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
      },
      function() {
        Session.set("isHome", true);
      }
    ],
    triggersExit: [
      function() {
        Session.set("isHome", false);
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
    title: "Banco de Talentos - Cadastrar Aluno",
    action: function(params) {
      BlazeLayout.render('HomeLayout', {main: "studentSignup", wizard: "studentSteps" });
    }
  });

  signup.route('/empresa', {
    name: 'companySignup',
    title: "Banco de Talentos - Cadastrar Empresa",
    action: function(params) {
      BlazeLayout.render('HomeLayout', {main: "companySignup" });
    }
  });

  var panel = FlowRouter.group({
    subscriptions: function(params) {
      Meteor.subscribe('users');
      Meteor.subscribe('jobs');
      Meteor.subscribe('tags');
    },
    triggersEnter: [
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
    title: "Banco de Talentos - Home",
    action: function() {
      BlazeLayout.render('PanelLayout', { main: "mainPanel" });
    }
  });

  company.route('/perfil', {
    title: "Banco de Talentos - Perfil",
    name: 'companyProfile',
    action: function() {
      BlazeLayout.render('PanelLayout', { main: "profile" });
    }
  });

  company.route('/vagas/nova', {
    name: 'newJob',
    title: "Banco de Talentos - Criar Vaga",
    action: function(params) {
      BlazeLayout.render('PanelLayout', { main: "newJob" });
    }
  });

  company.route('/vagas', {
    title: "Banco de Talentos - Procurar Vagas",
    name: 'companyjobs',
    action: function(params) {
      BlazeLayout.render('PanelLayout', { main: "jobs" });
    }
  });

  company.route('/alunos', {
    name: 'companyStudents',
    title: "Banco de Talentos - Alunos",
    action: function(params) {
      BlazeLayout.render('PanelLayout', { main: "students" });
    }
  });

  company.route('/alunos/:id', {
    name: 'companyStudent',
    title: "Banco de Talentos - Aluno",
    action: function(params) {
      BlazeLayout.render('PanelLayout', { main: "profile" });
    }
  });

  company.route('/vagas/:id', {
    name: 'companyJob',
    title: "Banco de Talentos - Vaga",
    action: function() {
      BlazeLayout.render('PanelLayout', { header: "header", menubar: "menubar", main: "showJob" });
    }
  });

  company.route('/vagas/:id/detalhes', {
    name: 'companyJobDetails',
    title: "Banco de Talentos - Detalhes da Vaga",
    action: function() {
      BlazeLayout.render('PanelLayout', { header: "header", menubar: "menubar", main: "jobDetails" });
    }
  });

  company.route('/configuracoes', {
    name: 'companysettings',
    title: "Banco de Talentos - Configurações ",
    triggersExit: [trackRouteClose],
    action: function(params) {
      BlazeLayout.render('PanelLayout', { main: "settings", settings: "companySettings"  });
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
    title: "Banco de Talentos - Home ",
    action: function() {
      BlazeLayout.render('PanelLayout', { main: "mainPanel" });
    }
  });

  student.route('/perfil', {
    name: 'studentProfile',
    title: "Banco de Talentos - Perfil",
    action: function() {
      BlazeLayout.render('PanelLayout', { main: "profile" });
    }
  });

  student.route('/vagas', {
    name: 'studentjobs',
    title: "Banco de Talentos - Procurar Vagas ",
    action: function(params) {
      BlazeLayout.render('PanelLayout', { main: "jobs" });
    }
  });

  student.route('/vagas/:id', {
    name: 'studentJob',
    title: "Banco de Talentos - Vaga",
    action: function() {
      BlazeLayout.render('PanelLayout', { main: "showJob" });
    }
  });

  student.route('/empresas', {
    title: "Banco de Talentos - Procurar Empresas",
    name: 'studentCompanies',
    action: function(params) {
      BlazeLayout.render('PanelLayout', { main: "studentCompanies" });
    }
  });

  student.route('/empresas/:id', {
    name: 'studentCompany',
    title: "Banco de Talentos - Empresa",
    action: function(params) {
      BlazeLayout.render('PanelLayout', { main: "profile" });
    }
  });

  student.route('/configuracoes', {
    name: 'studentsettings',
    title: "Banco de Talentos - Configurações",
    triggersExit: [trackRouteClose],
    action: function(params) {
      BlazeLayout.render('PanelLayout', { main: "settings", settings: "studentSettings" });
    }
  });

  FlowRouter.notFound = {
    action: function() {
      BlazeLayout.render('PanelLayout', { main: "pageNotFound" });
    }
  };

  FlowRouter.route( '/verify-email/:token', {
    name: 'verify-email',
    title: "Banco de Talentos - Verificando E-mail: ",
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

  function trackRouteClose() {
    // if isn't yet saved
    if (!$('.btn-update').prop('disabled')) {

      if(!confirm("Suas alterações não foram salvas. Deseja sair?")) {
        FlowRouter.go();
      }
    }
  }

  // initialize flow router title
  new FlowRouterTitle(FlowRouter);
}
