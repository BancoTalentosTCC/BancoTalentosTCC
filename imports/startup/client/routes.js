Router.configure({
    layoutTemplate: 'ApplicationLayout'
, });
Router.map(function () {
    this.route('home', function () {
        this.render('header', {
            to: 'header'
        });
        this.render('home');
    }, {
        path: '/'
    });
    this.route('login', function () {
        this.render('header', {
            to: 'header'
        });
        if (Meteor.userId()) {
            Router.go('mainPanel');
        }
        else {
            this.render('login');
        }
    }, {
        path: 'login'
    });
    this.route('companiesSignup', function () {
        this.render('header', {
            to: 'header'
        });
        this.render('companiesSignup');
    }, {
        path: '/signup/companies'
    });
    this.route('studentsSignup', function () {
        this.render('header', {
            to: 'header'
        });
        this.render('studentsSignup');
    }, {
        path: 'signup/students'
    });
    this.route('mainPanel', function () {
        this.render('header', {
            to: 'header'
        });
        this.render('mainPanel');
        this.render('menubar', {
            to: 'menubar'
        });
        if (!Meteor.userId()) {
            Router.go('login');
        }
        else {
            this.render('mainPanel');
        }
    }, {
        path: '/panel'
    });
    this.route('profile', function () {
        this.render('header', {
            to: 'header'
        });
        this.render('profile');
        this.render('menubar', {
            to: 'menubar'
        });
        if (!Meteor.userId()) {
            Router.go('login');
        }
    }, {
        path: 'panel/profile'
    });
});
Router.onAfterAction(function () {
    document.title = 'Banco de Talentos Univás - ' + this.route.getName();
});