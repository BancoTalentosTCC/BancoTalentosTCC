import { Students } from  '../imports/api/students.js';

Meteor.methods({
  addUserSingleStep: function(parameters, student_data, studentId, stepNumber) {
    // SAVE
    if (studentId==0) {
      return Students.insert(
        student_data,        
        { selector: { type: ""+ stepNumber } }
      );
    }
    // UPDATE
    else {
      return Students.update(
        { _id:studentId }, 
        { $set: student_data }, 
        { selector: { type: ""+ stepNumber } }
      );
    }
  }
});