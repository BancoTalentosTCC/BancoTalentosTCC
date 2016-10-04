//TODO: Implement companysearch

Template.jobs.onRendered(function () {
  //tabs
  $('.nav-tabs a').click(function (e) { 
    e.preventDefault(); 
    $(this).tab('show'); 
  });
});
