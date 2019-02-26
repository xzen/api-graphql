const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type User {
    id: String
    name: String
    age: Int
  }

  type Query {
    show(id: String): User
    delete(id: String): String
    all: [User]
  }
`);
