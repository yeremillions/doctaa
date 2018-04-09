
Meteor.methods({

    addUserRole(role){
        if(!Meteor.user().roles){
            Roles.addUsersToRoles(Meteor.user()._id, ['patient']);
        }
    },

    setFavourite: function (userId) {
        var query = {};

        query[ alreadyFavourited(userId) ? '$pull' : '$push' ] = { //check to see if doctor is already in favourite list. if doctor is, we remove it; if it isn't, we push it in
            'profile.favouriteDoctors': userId
        };

        Meteor.users.update(this.userId, query); //we save current changes to the collection
    }

});

