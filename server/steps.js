import { Students } from  '../imports/api/students.js';

Meteor.methods({
  addUserSingleStep: function(parameters, studentData, studentId, stepNumber) {
    // SAVE
    if (studentId==0) {
      return Students.insert(
        studentData,        
        { selector: { type: ""+ stepNumber } }
      );
    }
    // UPDATE
    else {
      return Students.update(
        { _id:studentId }, 
        { $set: studentData }, 
        { selector: { type: ""+ stepNumber } }
      );
    }
  }
});
