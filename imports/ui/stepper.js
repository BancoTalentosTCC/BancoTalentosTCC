import { Template } from 'meteor/templating';

Template.stepper.helpers({
  stepper: function() {
    let stepperProgress = {};
    for (let i = stepNumber; i > 0; i--) { 
      i == stepNumber ? stepperProgress['step'+i] = "active" : 
      i < stepNumber ? stepperProgress['step'+i] = "completed" : "sdf"
    }
    _dep.depend();
    
    return stepperProgress;
  }
});
