import {Template} from 'meteor/templating';
import '/client/html/pages/home.html';

Template.home.onRendered(function () {
    $('#homeCarousel').carousel({
        interval: 6000,
        cycle: true
    });
});