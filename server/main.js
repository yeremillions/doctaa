import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.publish('users', function () {
    Meteor.users.find({roles :{ $in : ['doctor']}});
});