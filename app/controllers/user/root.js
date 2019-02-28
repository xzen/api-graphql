const users = require('./mock')

module.exports = {
  show: ({ id }) => users[id],
  delete: ({ id }) => {
    delete users[id]

    return `sucess`
  },
  all: () => Object.entries(users).map(user => user[1])
}
