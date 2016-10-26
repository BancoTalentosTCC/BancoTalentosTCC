/* Email SNMP configuration file 
 * So far it is being hosted on MAILGUN free server
 * in case you wanna work with a personal SNMP, please provide
 * a valid URL with a key
*/

//process.env.MAIL_URL = "<Our URL here>"; 
//https://themeteorchef.com/snippets/using-the-email-package/#tmc-configuration

Meteor.startup(function () {
  smtp = {
    username: 'joseluizibm',
    // We should use SSL encryption in the future for the password
    password: 'pass2468',
    server:   'smtp.gmail.com',
    port: 465
  }

  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
});
