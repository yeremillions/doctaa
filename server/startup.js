Meteor.startup(function() {

    // user roles
    var roles = ['patient', 'doctor', 'admin', 'staff']

    // this will fail if the roles package isn't installed
    if(Meteor.roles.find().count() === 0) {
        roles.map(function(role) {
            Roles.createRole(role)
        })
    }
})