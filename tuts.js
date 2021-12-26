// Node Js Tutorials

console.log("Hello Ficazzo");

setTimeOut
setTimeout(() => {
    console.log("3sec Just Passed");
}, 3000);

setInterval
 var time = 0
setInterval(() => {
    time += 5;
    console.log(`${time} sec just passed`);
}, 5000);

clearInterval
var time = 0;
var timer = setInterval(() => {
  time += 5;
  console.log(`${time} sec just passed`);
  if (time > 30) {
    clearInterval(timer);
  }
}, 5000);

__dirname
console.log(__dirname);

__filename
console.log(__filename);

// Normal Function Statement
// function sayHello() {
//   var name = "femi";
//   console.log(` Hello ${name}`);
// }

// sayHello();

// Normal Function Expression
// var sayYay = () => {
//   var name = "femi";
//   console.log(` Hello ${name}`);
// };
// sayYay();

// Passing Function Expression into one another
// function called(anotherfunction) {
//   anotherfunction();
// }

var sayYay = () => {
  var name = "femi";
  console.log(` Hello ${name}`);
};

called(sayYay);

// // -------------------------------- Modules and Require ----------------------------////

var counter = require("./count");
console.log(counter(["Zubs", "Ghost", "Busta"]));

// // -------------------------------- Modules Patterns ----------------------------////
var count = require("./count");
console.log(count.counter(["Zubs", "Ghost", "Busta"]));
console.log(count.add(3, 5));
console.log(count.add(count.pi, 11));

// // -------------------------------- Node Event Emitter ----------------------------////

var emmiter = new event.EventEmitter();

emmiter.on("someEvent", (msg) => {
  console.log(msg);
});

emmiter.emit("someEvent", "The Message just ran");

// // --------------------------------Synchronous Writing File & File Reading ----------------------------////
var fs = require("fs");

var readMe = fs.readFileSync("ReadMe.txt", "utf8");
console.log(readMe);
fs.writeFileSync('write.txt', readMe)

// // --------------------------------Asynchronous Writing File & File Reading ----------------------------////




