const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type Query {
    rename(lastname: String!, surname: String!): String
  }
`);
