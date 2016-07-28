Router.configure({
  layoutTemplate: 'ApplicationLayout',
});

Router.map(function() {
  this.route('pageNotFound', {
    path: '*',
    where: 'server',
    action: function() {
      this.response.writeHead(404);
      this.response.end(html);
      this.render('header', {
        to: 'header'
      });
      this.render('pageNotFound');
    }
  });
});
