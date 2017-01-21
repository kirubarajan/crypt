import { Meteor } from 'meteor/meteor';
import { Profiles } from '../imports/collections/accounts';

Meteor.startup(() => {

  Meteor.publish('Profiles', function() {

    return Profiles.find({owner: this.userId});

  });

});
