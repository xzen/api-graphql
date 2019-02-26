const graphqlHTTP = require('express-graphql')
const schema = require('./schema')

const users = require('./mock')

class User {
  constructor(app) {
    this.app = app

    this.run()
  }

  root() {
    return ({
      show: ({ id }) => users[id],
      delete: ({ id }) => {
        delete users[id]

        return `sucess`
      },
      all: () => {
        return Object.entries(users).map(user => user[1])
      }
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
