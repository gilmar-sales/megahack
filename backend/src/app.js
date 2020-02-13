const express = require("express");
const http = require("http");
const cors = require("cors");

class App {
  constructor() {
    this.express = express();
    this.server = http.Server(this.express);

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(cors());
    this.express.use(express.json());
  }

  routes() {
    this.express.use(require("./routes"));
  }
}

module.exports = new App();
