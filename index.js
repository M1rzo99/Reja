
// 2023 09 20
const express = require("express");
const app = express();
const http = require("http");

// #1.Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // htmldan yozilganlarni expreswga kkiritmaydi,agar buni yozmasak.

//#2 sesssion code

// #3.Backendda html ni yasaymiz.viwes code
app.set("viwes", "viwes");
app.set("view engine", "ejs");

// #4.Rooterlar.routing code
app.get("/hello", function (req, res) {
  res.end('Hello world Mirzo 6466')
});

app.get("/gift", function (req, res) {
  res.end('For you gift Mirzo')
});
const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`the server is running succesfully on port ${PORT}`);
});
