Template.HomeLayout.helpers({
  mobile_bg() {
    if(FlowRouter.current().route.name == 'home') {
      return 'mobile_bg';
    }
  }
});
