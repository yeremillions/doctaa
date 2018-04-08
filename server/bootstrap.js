//Create admin user
Meteor.startup(function () {
   if (Meteor.users.find().count() <1){ //Check if there is any user in database. if none, create user
       var users = [
           {
               name: "admin",
               email: "yeremibolton@gmail.com",
               roles: ['admin'],
               type: "admin"
           }
       ];

        _.each(users, function(user){
            var id;

            id = Accounts.createUser({
                email: user.email,
                password: "password",
                profile: {
                    name: user.name
                }
            });

            if (user.roles.length > 0 ){
                Roles.addUsersToRoles(id, user.roles);
            }
       });
   }
});

