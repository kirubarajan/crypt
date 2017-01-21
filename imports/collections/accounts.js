import { Mongo } from 'meteor/mongo';
import secureRandom from 'secure-random';
import crypto from 'crypto';
import base64url from 'base64url';

Meteor.methods({

  'accounts.insert': function(name, url) {

    //TODO: generate proxy email

    let email = "";

    // generating password

    let generated_password = base64url(crypto.randomBytes(12));

    // encrypting email and password using AES256

    let cipher = crypto.createCipher('aes-256-ctr', this._id);

    let password = cipher.update(generated_password, 'utf8', 'hex');
    password += cipher.final('hex');

    // inserting new account into database

    return Accounts.insert({
      name,
      url,
      email,
      password,
      salt,
      owner: this._id
    });

  },

  'accounts.remove': function(account) {

    return Accounts.remove(account);

  },

  'accounts.update': function(account, name, url, email, password) {

    // encrypting email and password using AES256

    let cipher = crypto.createCipher('aes-256-ctr', this._id);

    let encrypted_password = cipher.update(generated_password, 'utf8', 'hex');
    encrypted_password += cipher.final('hex');

    return Accounts.update(account, {$set: {
      password: encrypted_password,
      email,
      name,
      url
    }});

  }

});

export const Accounts = new Mongo.Collection('accounts');
