module.exports = {
    server: {
        port: process.env.PORT || 3000,
        hostname: process.env.HOSTNAME || 'localhost',
    },
    database: {
      url: 'mongodb://admin:password@localhost:27017',
      name: 'icecream'
    }
  };
