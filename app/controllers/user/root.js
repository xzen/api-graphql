const users = require('./mock')

module.exports = {
  show: ({ id }) => users[id],
  delete: ({ id }) => {
    const user = users[id]

    delete users[id]

    return user
  },
  all: () => Object.entries(users).map(user => user[1])
}
