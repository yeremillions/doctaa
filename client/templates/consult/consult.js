Template.consult.onCreated(function (){
   this.subscribe('users');
   this.subscribe('consultations');
});

//Provide the consult template with database objects needed
Template.consult.helpers({
   availableConsultations: function () {

       //Get the currently logged in user
       var user = Meteor.user();

       //Get the list of patient's favourite doctors or empty array if they have no favourite doctor
       var favouriteDoctors = user.profile.favouriteDoctors || [];

       //Find all ongoing consultations
       Consultations.find({ status: null}).forEach(function (consultations) {

           //Set the identity of the participants, 'd' for doctor and 'p' for patient
           var identity = (consultations.p === user._id) ? 'd': 'p';
           var idx = favouriteDoctors.indexOf((consultations[identity]));

           //Remove the existing consultation from the array
           if (idx > -1) favouriteDoctors.splice(idx, 1);
       });
        console.log('favouriteDoctors');

        //Return the st of doctors we can consult
       return favouriteDoctors.length ? Meteor.users.find({ _id: { $in: favouriteDoctors } } ) : null;
   }
});