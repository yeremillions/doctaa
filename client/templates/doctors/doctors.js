Template.doctors.onCreated(function () {
   this.subscribe('doctorUsers');
});

// Template.doctors.onCreated(function () {
//    this.subscribe('doctors');
// });

// Template.doctors.userList = function () {
//    return Meteor.users.find();
// };

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