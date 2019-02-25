const graphqlHTTP = require('express-graphql')
const schema = require('./schema')

class User {
  constructor(app) {
    this.app = app

    this.run()
  }

  root() {
    return ({
      rename: ({ lastname, surname }) => `${lastname} ${surname}`
    })
  }

  run() {
    this.app.use('/user', graphqlHTTP({
      schema,
      rootValue: this.root(),
      graphiql: true,
    }));
  }
}

module.exports = User
