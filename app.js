console.log("For test");
// 2023 09 20

const express = require("express");
const app = express();
const http = require("http");
const fs = require("fs");
const db = require("./server").db();
let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("Error:",err);
  } else {
    user = JSON.parse(data)
  }
});

// MONGODB connect



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

app.get("/", function (req,res) {
  
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        res.end("something went wrong");
      } else {
        console.log(data);
        res.render("reja")
    }
  })
res.render("reja")
});
// module.exports = app;
module.exports = app;
