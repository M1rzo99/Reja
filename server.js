console.log("For test");
// 2023 09 20

const express = require("express");
const res = require("express/lib/response");
const app = express();
const http = require("http");
const fs = require("fs");
let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("Error:",err);
  } else {
    user = JSON.parse(data)
  }
});


// #1.Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // htmldan yozilganlarni expreswga kkiritmaydi,agar buni yozmasak.

//#2 sesssion code

// #3.Backendda html ni yasaymiz.viwes code.

app.get("/author", (req, res) => {
  res.render("author", { user: user })
});


app.set("views", "views");
app.set("view engine", "ejs");

// #4.Routinglar.routing code
app.post('/create-item', (req, res) => {
  console.log(req);
  res.json({test: "success"});
})

app.get("/local", function (req,res) {
  res.render("harid")
});


const server = http.createServer(app);
let PORT = 3002;
server.listen(PORT, function () {
  console.log(`the server is running succesfully on port ${PORT}`);
});
