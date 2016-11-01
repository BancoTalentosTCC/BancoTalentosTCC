var id = FlowRouter.getParam('id');

Template.jobDetails.events({
  "click #deactivate-job": function() {  

      if(confirm("Você realmente deseja desativar essa vaga? Esse processo não poderá ser desfeito")) {
        Meteor.call('deactivateJob', id, function(error, result) {
          if (error) {
            Meteor.call('displayErrors', error);
          } else if (result) {
            let job = Jobs.find({_id: id}).fetch()[0];
            toastr.success(`A vaga ${ job.name } foi desativada`, 'Sucesso!');
          }      
        });
      }
  }
});

Template.jobDetails.helpers({
  isDisabled: function(job) {
    if("disabled" === job.status) return "disabled";
  }
});
