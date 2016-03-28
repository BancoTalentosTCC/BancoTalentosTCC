Router.configure({
  layoutTemplate: 'ApplicationLayout'
});

Router.map(function() {
  this.route('home', {path: '/'});
  this.route('stepper', {path: '/components/stepper'});
});

//Router.route('/components/stepper', function () {
 // this.render('Header');
 // this.render('Stepper');
//});


  // render the PostFooter template into the yield region named "footer" 
  // {{> yield "footer"}}