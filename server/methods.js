
Meteor.methods({

    addUserRole(role){
        if(!Meteor.user().roles){
            Roles.addUsersToRoles(Meteor.user()._id, ['patient']);
        }
    },

});

