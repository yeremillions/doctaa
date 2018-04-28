//Create admin user
Meteor.startup(function () {
    if (Meteor.users.find().count() <1){ //Check if there is any user in database. if none,
        var users = [ //No user? Then initialize variables for first user(admin)
            {
                name: "admin",
                email: "yeremibolton@gmail.com",
                roles: ['admin'],
                type: "admin"
            }
        ];

        _.each(users, function(user){
            var id;

            id = Accounts.createUser({ //Create admin super user and assign a password
                email: user.email,
                password: "password",
                profile: {
                    name: user.name
                }
            });

            if (user.roles.length > 0 ){ //Check if user has been created, then add user to admin role
                Roles.addUsersToRoles(id, user.roles);
            }
        });
    }
});

