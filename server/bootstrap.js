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

//Populate the queries database with some default questions
if (Queries.find().count() === 0) {
    Queries.insert({
        title: 'My eyes are sensitive to lights',
        detail: 'I get teary eyed whenever I am around bright lights. This is not just some wetness of the eyes, the tears really flow. Besides the discomfort and embarassment, there is no pain. What could account for this?'
    });
    Queries.insert({
        title: 'Stomach Cramps',
        detail: 'I have stomach cramps whenever I take milk. What could be wrong?'
    });
    Queries.insert({
        title: 'Growing Mole',
        detail: 'There is a large mole on my back. For a long time it was just there minding its own business. But for the past one week it has been sensitive and it appears to be growing. Should I be worried?'
    });
}