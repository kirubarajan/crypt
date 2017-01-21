import { Meteor } from 'meteor/meteor';
import { Accounts } from '../imports/collections/accounts';

Meteor.startup(() => {

  Meteor.publish('accounts', function() {

    return Accounts.find({owner: this.userId});

  });

});
