
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require('./routes')


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(routes);

mongoose.connect("mongodb+srv://admin:zhumHdXdKyI702AC@cluster0.ammny.mongodb.net/blogDB", {useNewUrlParser: true})
.then(() => {
  console.log('connected to db')
}).catch((e) => {
  console.log("couldn't connect to db because", e)
});


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
