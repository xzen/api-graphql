// Dependencies
const express = require('express')

// Modules
const routes = require('./routes')

class Server {
  constructor() {
    this.app = express()
  }

  routes() {
    new routes.User(this.app)

    this.app.listen(4000)
  }

  run() {
    this.routes()
  }
}

module.exports = Server
