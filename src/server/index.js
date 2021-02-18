var path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("dist"));

app.get("/", function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve("src/client/views/index.html"));
});

// designates what port the app will listen to for incoming requests
const server = app.listen(3000, function(){
  console.log("Example app listening on port 3000!");
}); 

module.exports = server;

app.get("/test", function (req, res) {
    res.send(mockAPIResponse);
});
// Setup empty JS object to act as endpoint for all routes
let projectData = {};

//POST
app.post("/add", function (req, res) {
    console.log("inside post")
    projectData = {
      imageUrl: req.body.imageUrl,
      cityName: req.body.cityName,
      country: req.body.country,
      flagUrl: req.body.flagUrl,
      temp: req.body.temp,
      icon: req.body.icon,
    };
    res.send(req.body);
  });

//Get project data
app.get("/all", function (req, res) {
    console.log("inside server get")
    res.send(projectData);
  });
