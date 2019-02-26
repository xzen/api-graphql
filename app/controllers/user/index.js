const graphqlHTTP = require('express-graphql')

const schema = require('./schema')
const users = require('./mock')

class User {
  constructor(app) {
    this.app = app

    this.run()
  }

  /**
   * GraphQL root
   * @return {function} root
   */
  root() {
    return ({
      show: ({ id }) => users[id],
      delete: ({ id }) => {
        delete users[id]

        return `sucess`
      },
      all: () => Object.entries(users).map(user => user[1])
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
