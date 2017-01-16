module.exports = {
  servers: {
    one: {
      host: '159.203.31.17',
      username: 'root',
      // pem:
      password: 'garyeatsass'
      // or leave blank for authenticate from ssh-agent
    }
  },

  meteor: {
    name: 'elore',
    path: '../../elore',
    servers: {
      one: {}
    },
    buildOptions: {
      serverOnly: true,
    },
    env: {
      ROOT_URL: 'https://beta.elore.io',
      MONGO_URL: 'mongodb://web:garyeatsass@ds031835.mlab.com:31835/elore'
    },

    dockerImage: 'abernix/meteord:base',
    deployCheckWaitTime: 60
  },

  mongo: {
    oplog: true,
    port: 27017,
    servers: {
      one: {},
    },
  },
};
