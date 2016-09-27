/* Email SNMP configuration file 
 * So far it is being hosted on MAILGUN free server
 * in case you wanna work with a personal SNMP, please provide
 * a valid URL with a key
*/

//process.env.MAIL_URL = "<Our URL here>"; 
//https://themeteorchef.com/snippets/using-the-email-package/#tmc-configuration

Meteor.startup(function () {
  // The correct way
  var url = "smtp://postmaster%40sandbox778df5b5adf948f9af95ceb5bf2eff93.mailgun.org:b6f57a0a9f50d3aa2e3ac949dfd43d1b@smtp.mailgun.org:587";
  process.env.MAIL_URL = url;
});
