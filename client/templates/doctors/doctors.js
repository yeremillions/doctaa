Template.doctors.onCreated(function () {
    this.subscribe('users');
});

//Create a Template Helper to supply the template cursor with an iteration of doctors
Template.doctors.helpers({
    doctorUsers: function(){
        return Meteor.users.find({ roles: { $in: ['doctor'] } }); //Search through the returned list of users and return doctors.
    }
});

//Access the alreadyFavourited global function to check if doctor is already favouritedfunction
Template.doctor.helpers({
    alreadyFavourited: alreadyFavourited
});

//Wire up the add event handler call the set setFavourite method in ../server/methods.js
Template.doctor.events({
    'click .add': function (event) {
        Meteor.call('setFavourite', this._id);
    }
});