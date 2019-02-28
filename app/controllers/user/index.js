// Dependencies
const graphqlHTTP = require('express-graphql')

// Modules
const rootValue = require('./root')
const schema = require('./schema')

class User {
  constructor(app) {
    this.app = app

    this.run()
  }

  run() {
    this.app.use('/user', graphqlHTTP({
      schema,
      rootValue,
      graphiql: true
    }));
  }
}

module.exports = User
