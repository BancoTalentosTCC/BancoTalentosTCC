import { Template } from 'meteor/templating';
import '../api/signup.js';

import '../../client/pages/signup/steps.html';

//Template.body.helpers({
 // tasks() {
 //   return Tasks.find({});
 // },
//});

Template.step1.events({
  "submit form": function (event) {
    console.log("Form submitted");
    console.log(event, "event");
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const text = target.text.value;

    // Insert a task into the collection
    Students.insert({
      text,
      createdAt: new Date(), // current time
    });

    // Clear form
    target.text.value = '';
  }
});