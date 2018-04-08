import {Meteor} from "meteor/meteor";

Meteor.publish("doctorUsers", function(){
    var result = [];
    if (Roles.userIsInRole(this.userId, ['admin', 'patient', 'staff', 'doctor'])) {
        Meteor.users.find({ roles: { $in: ['doctor'] } });
    } else {
        this.stop();
        // YOUUU SHALL NOT.... PASS!!!  ~Gandalf
    }
    return result;
});