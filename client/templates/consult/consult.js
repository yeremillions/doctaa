Template.consult.onCreated(function (){
   this.subscribe('users');
   this.subscribe('consultations');
});

//Provide the consult template with database objects needed
Template.consult.helpers({
   availableConsultations: function () {
       var user = Meteor.user();
       var favouriteDoctors = user.profile.favouriteDoctors || [];

       Consultations.find({ status: null}).forEach(function (consultations) {
           var identity = (consultations.p === user._id) ? 'd': 'p';
           var idx = favouriteDoctors.indexOf((consultations[identity]));

           if (idx > -1) favouriteDoctors.splice(idx, 1);
       });
        console.log('favouriteDoctors');
       return favouriteDoctors.length ? Meteor.users.find({ _id: { $in: favouriteDoctors } } ) : null;
   }
});