import { Accounts } from 'meteor/accounts-base';

Meteor.methods({
  addNewUser: function(name, email, password) {
    // you need to do validations here

    id = Accounts.createUser({
      email: email,
      password: password,
      profile: { name: name }
    });
    console.log(id, 'Roles ....');
    return Roles.addUsersToRoles(id, ['patient']);
  }
});
