// Readable Stream and Writeable Stream

var http = require("http");

var fs = require("fs");

var readStream = fs.createReadStream(__dirname + "/Readme.txt", "utf-8");
var writeStream = fs.createWriteStream(__dirname + "/Writeme.txt");

readStream.on("data", (chunk) => {
  console.log("New Chunk Received");
  writeStream.write(chunk);
});


