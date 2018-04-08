import {Meteor} from "meteor/meteor";

Meteor.publish("doctors", function(){
    var result = [];
    if (Roles.userIsInRole(this.userId, ['admin', 'patient', 'staff', 'doctor'])) {
        Meteor.users.find({ roles: { $in: ['doctor'] } });
    } else {
        this.stop();
        // YOUUU SHALL NOT.... PASS!!!
    }
    return result;
});

Meteor.publish('doctorUsers', function(){
    Meteor.users.find({ roles: { $in: ['doctor'] } });
});