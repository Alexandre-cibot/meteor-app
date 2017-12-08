import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

Meteor.startup(() => {
  // code to run on server at startup
  Accounts.onCreateUser((options, user) => {
    //Accounts.setUsername(userId, newUsername)
    console.log("Option", options);
    console.log('-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-')
    console.log("users", user);
    Meteor.users.update(user._id, {
      $set: {
        pseudo: options.fullname
      }
    });
    // user.fullname = options.fullname;
    return user;
  });  
});