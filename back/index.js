require("dotenv").config();
const express = require("express");
const { MongoClient } = require("mongodb");

const db = new MongoClient(process.env.DB);
console.log(MongoClient.toString());

class Server {
  constructor() {
    this.demon = null;
    this.PORT = process.env.PORT;
  }
  initDemon() {
    this.demon = express();
  }
  initMiddlewares() {
    this.demon.use(express.json());
  }
  initRoutes() {
    this.demon.use("/", express.static("/"));
  }
  runServre() {
    this.initDemon();
    this.initMiddlewares();
    this.initRoutes();
    this.demon.listen(this.PORT, () =>
      console.log("server is running on port 8080")
    );
  }
}

// new Server().runServre()

// ==================================
