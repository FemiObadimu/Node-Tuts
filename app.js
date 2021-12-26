var express = require("express");

var app = express();

app.get("/", (req, res) => {
  res.send("This is the home-page");
});

app.get("/contact", (req, res) => {
  res.send("This is the contact-page");
});

app.get("/contact/:id", (req, res) => {
  res.send(`You Requested for id : ${req.params.id}`);
});



app.listen(3000);
