Template.doctors.onCreated(function () {
   this.subscribe('doctorUsers');
});

Template.doctors.onCreated(function () {
    this.subscribe('doctors');
});

Template.doctors.helpers({
   users: function(){
       return Meteor.users.find({ username: {$not: (Meteor.user() || {}).username }}); //Search through the returned list of doctors and ensure current user is not listed.
   }
});