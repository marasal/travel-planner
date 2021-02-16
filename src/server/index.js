var path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const cors = require("cors");
require("dotenv").config();

const app = express();

console.log(__dirname);
console.log(process.env);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("dist"));

//const baseURL = "https://api.meaningcloud.com/sentiment-2.1?";
//const myApiKey = process.env.MY_API_KEY;

app.get("/", function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve("src/client/views/index.html"));
});

// designates what port the app will listen to for incoming requests
app.listen(3000, function () {
    console.log("Example app listening on port 3000!");
});

app.get("/test", function (req, res) {
    res.send(mockAPIResponse);
});