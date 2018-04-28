
Template.registerHelper('formatDate', function (date) {
    return moment(date).format('MMMM Do YYYY, h:mm:ss a');
});

Template.registerHelper('isDoctor', function () {
    if(Meteor.user().roles =='doctor'){
        return true;
    }
});