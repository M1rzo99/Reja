const http = require('http');

const mongodb = require("mongodb")

// for MongoDB
let db;
const connectionString = "mongodb://atlas-sql-6515584055fa2b0a683e929b-oip7v.a.query.mongodb.net/Reja?ssl=true&authSource=admin"
mongodb.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, (err, client) => {
  if (err) console.log("Error connection MongoDB");
  else {
    console.log("DataBase MongoDB Connection succed");
    module.exports = client;
    const app = require("./app");
    const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`the server is running succesfully on port ${PORT},http://localhost:${PORT}`);
});
  }
})



