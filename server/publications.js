import {Meteor} from "meteor/meteor";

//Publish list of users to the client
Meteor.publish('users', function(){
    return Meteor.users.find();
});

//Publish list of consultations to the client
Meteor.publish('consultations', function(){
    this.userId;
    return Consultations.find({  $or: [{ p: this.userId }, { d: this.userId}]});
});