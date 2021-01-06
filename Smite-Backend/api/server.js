const express = require("express");
const helmet = require("helmet")

const Hirez = require('hirez-api');
const creds = require('./secrets');
const cors = require('cors');

const server = express();

function getByName(name) {
    return db("users").where({ name }).first();
  }

server.use(cors());
server.use(helmet())
server.use(express.json());


global.api = new Hirez.Smite({
    platform: "PC",
    devId: creds. devId,
    authKey: creds.authKey,
})

server.get("/", (req, res) => {
 
      api.getGods()
      .then(gods => {
          res.status(200).json(gods)
      })

});

server.get("/:id", (req,res) => {
  api.getGods()
      .then(gods => {
        const godlist = gods.filter(god => god.Name.toLowerCase().toString().split(" ").join("") === req.params.id)[0];

        res.status(200).json(godlist);
      })
})


    
  
  module.exports = server;
  