console.log("For test");
// 2023 09 20

const express = require("express");
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
// MONGODB connect
const db = require("./server").db();
const mongodb = require("mongodb") // new mongodb ichida obj id lar kerak
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

  console.log(req.body);
  const new_reja = req.body.reja
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    console.log(data.ops);
   res.json(data.ops[0])
  });
  
})

// button id larini olayapmiz.
app.post("/delete-item", (req, res) => {
  const id = req.body.id;
  db.collection("plans").deleteOne(
    { _id: new mongodb.ObjectId(id) },
    (err, data) => { res.json({ state: "success" }) })
 })

  

app.get("/", function (req,res) {
  console.log("user entered /");
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        res.end("something went wrong");
      } else {
        console.log(data);
        res.render("reja",{items:data})
    }
  })

});

// for O'zgartirish(in browser.js) button
app.post("/edit-item", (req, res) => {
  const data = req.body
  console.log(data);
  db.collection("plans").findOneAndUpdate({ _id: new mongodb.ObjectId(data.id) },
    { $set: { reja: data.new_input } },
    function (err, data) {
      res.json({ state: "success" })
    })
});

// Clean all btn uchun app
app.post("/delete-all", (req, res) => {
  if (req.body.delete_all) {
    db.collection("plans").deleteMany(() => {
      res.json({state:"Hamma rejalar o'chirildi"})
    })
  }
})




module.exports = app;
