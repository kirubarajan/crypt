import { Mongo } from 'meteor/mongo';
import secureRandom from 'secure-random';
import crypto from 'crypto';
import base64url from 'base64url';

Meteor.methods({

  'profiles.insert': function(name) {

    // generating email

    let email = crypto.randomBytes(8).toString('hex') + '@mail.plsencrypt.me';

    // generating password

    let generated_password = base64url(crypto.randomBytes(12));

    // encrypting email and password using AES256

    let cipher = crypto.createCipher('aes-256-ctr', 'ieatass');

    let password = cipher.update(generated_password, 'utf8', 'hex');
    password += cipher.final('hex');
    password += "@4@!!0016";

    // inserting new account into database

    return Profiles.insert({
      name,
      email,
      password,
      owner: this.userId
    });

  },

  'profiles.remove': function(account) {

    return Profiles.remove(account);

  },

  'edit': function(site) {

    // encrypting email and password using AES256

    console.log(site);

    return Profiles.update(site.id, {$set: {
      password: site.password,
      email: site.email,
      name: site.name
    }});

  }

});

export const Profiles = new Mongo.Collection('profiles');
