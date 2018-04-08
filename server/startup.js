Meteor.startup(function() {

    // user roles
    var roles = ['doctor', 'patient', 'staff', 'admin']

    // this will fail if the roles package isn't installed
    if(Meteor.roles.find().count() < 2) { //Are there less than two roles created?
        roles.map(function(role) {
            Roles.createRole(role) //Create roles initialized above
        })
    }

})