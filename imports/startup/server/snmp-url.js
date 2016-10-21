/* Email SNMP configuration file 
 * So far it is being hosted on MAILGUN free server
 * in case you wanna work with a personal SNMP, please provide
 * a valid URL with a key
*/

//process.env.MAIL_URL = "<Our URL here>"; 
//https://themeteorchef.com/snippets/using-the-email-package/#tmc-configuration

Meteor.startup(function () {
  // The correct way
  var url = "smtp://postmaster%40bancotalentos.herokuapp.com:b7cc135f721ebbc55658a985bf1667a8@smtp.mailgun.org:587";
  process.env.MAIL_URL = url;
});
