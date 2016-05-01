import { Template } from 'meteor/templating';
_dep = new Deps.Dependency();

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
