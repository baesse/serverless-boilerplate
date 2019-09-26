module.exports = {
  corsOptions: {
    origin: '*',
    methods: 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  },
  database: {
    name: 'serverless-boilerplate-development',
    host: 'localhost',
    port: '27017',
    user: '',
    password: '',
  },

};
