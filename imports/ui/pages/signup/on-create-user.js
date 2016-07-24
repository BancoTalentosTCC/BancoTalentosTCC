/* Set a gravatar when a new user is created */

Accounts.onCreateUser( ( options, user ) => {
  user.md5hash = Gravatar.hash( user.emails[0].address );
  console.log("A gravatar has been set up");
  return user;
});