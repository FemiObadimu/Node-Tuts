// Servers Setting up in Node Js

// var http = require("http");
// var fs = require("fs");

// var server = http.createServer((req, res) => {
//   console.log("request was made" + req.url);
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   var readStream = fs.createReadStream(__dirname + "/Readme.txt", "utf-8");
//   readStream.pipe(res);
// });

// server.listen(3000, "127.0.0.1");
// console.log("Now Listening to port 3000");

// Sending HTML to Client

// var http = require("http");
// var fs = require("fs");

// var server = http.createServer((req, res) => {
//   console.log("request was made" + req.url);
//   res.writeHead(200, { "Content-Type": "text/html" });
//   var readStream = fs.createReadStream(__dirname + "/index.html", "utf-8");
//   readStream.pipe(res);
// });

// server.listen(3000, "127.0.0.1");
// console.log("Now Listening to port 3000");

// Sending JSON  to Client

// var http = require("http");
// var fs = require("fs");

// var server = http.createServer((req, res) => {
//   console.log("request was made" + req.url);
//   res.writeHead(200, { "Content-Type": "application/json" });

//   var obj = {
//     name: "Ficazzo",
//     job: "React-Dev",
//     age: "22",
//   };

//   res.end(JSON.stringify(obj));
// });

// server.listen(3000, "127.0.0.1");
// console.log("Now Listening to port 3000");

// Sending ROUTES to Client

var http = require("http");
var fs = require("fs");

var server = http.createServer((req, res) => {
  console.log("request was made" + req.url);
  if (req.url === "/home" || req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/index.html").pipe(res);
  } else if (req.url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/contact.html").pipe(res);
  } else if (req.url === "/api/ficazzos") {
    var ficazzos = [
      {
        name: "Femi Obadimu",
        age: "20",
      },
      {
        name: "Michael  Obadimu",
        age: "18",
      },
    ];

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(ficazzos));
  } else {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/404.html").pipe(res);
  }
});

server.listen(3000, "127.0.0.1");
console.log("Now Listening to port 3000");
