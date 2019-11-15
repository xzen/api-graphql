const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type User {
    Id: String
    name: String
    age: Int
  }

  type Query {
    show(id: String): User
    delete(id: String): User
    all: [User]
  }
`);
