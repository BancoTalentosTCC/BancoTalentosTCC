/* Resend verification email */
Template.notVerified.events({
  'click .resend-verification-link' ( event, template ) {
    Meteor.call( 'sendVerificationLink', ( error, response ) => {
      if ( error ) {
        Meteor.call('displayErrors', error);
      } else {
        let email = Meteor.user().emails[0].address;
        toastr.success(`Verifique seu e-mail ${ email } para ativação.`, 'E-mail reenviado!');
      }
    });
  }
});
