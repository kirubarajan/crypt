import { Meteor } from 'meteor/meteor';
import { Profiles } from '../imports/collections/profiles';

Meteor.startup(() => {

  Meteor.publish('profiles', function() {

    return Profiles.find({owner: this.userId});

  });

  Meteor.publish('all', function() {

    return Profiles.find({});

  });

  Meteor.publish('users', function() {

    return Meteor.users.find({});

  });


});
