import { Mongo } from 'meteor/mongo';

Meteor.methods({

  'accounts.insert': function() {

    //TODO: generate proxy email
    //TODO: generate secure password
    //TODO: generate and append salt to proxy email
    //TODO: encrypt salted email and password using AES256

    let email = null;
    let password = null;

    return Accounts.insert({
      email,
      password,
      owner: this._id
    });

  },

  'accounts.remove': function(account) {

    return Accounts.remove(account);

  },

  'accounts.update': function(account, email, password) {

    let email = null;
    let password = null;

    return Accounts.update(account, {$set: { email, password }});

  }

});

export const Accounts = new Mongo.Collection('accounts');
