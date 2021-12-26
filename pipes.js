var http = require("http");

var fs = require("fs");

var readStream = fs.createReadStream(__dirname + "/Readme.txt", "utf-8");
var writeStream = fs.createWriteStream(__dirname + "/Writeme.txt");

readStream.pipe(writeStream)