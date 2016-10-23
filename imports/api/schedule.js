var schedule = require('node-schedule');
var Fiber = require('fibers');

var rule = new schedule.RecurrenceRule();
rule.hour = 0;
rule.minute = 0;

var j = schedule.scheduleJob(rule, 
  Fiber(function() {
    var now = new Date().getTime();
    var jobs = Jobs.find({status: 'active'});

    jobs.map(function(job) {
      if (now > job.expiration) {
        Jobs.update(job._id, { $set: { status: 'expired' }}, { getAutoValues: false });
      }
    })
  }).run()
);
