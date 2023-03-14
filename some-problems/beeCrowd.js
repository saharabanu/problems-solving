// 1002 Number Problem
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var firstNumber = parseFloat(lines.shift());

const pi = 3.14159;

firstNumber = pi * (firstNumber * firstNumber);

const area = firstNumber.toFixed(4);

console.log("A=" + area);

// _________________________________________

// 1008 Number Problem

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var data = input.split("\n");

var num = data.shift();
var hours = data.shift();
var rate = data.shift();

var salary = hours * rate;
console.log("NUMBER = " + num);
console.log("SALARY = U$ " + salary.toFixed(2));

// _____________________________________________

// 1234 Problem Solving

let input = require("fs").readFileSync("/dev/stdin").toString();
strings = input.split("\n");
let newString = [];
strings.every(function (string, idx, array) {
  let count = 1;
  string.split("").forEach((s) => {
    if (s == " ") {
      newString.push(s);
    } else if (count % 2) {
      s = s.toUpperCase();
      newString.push(s);
      count++;
    } else {
      s = s.toLowerCase();
      newString.push(s);
      count++;
    }
  });
  if (idx === array.length - 1) {
    return false;
  }
  newString.push("\n");
  return true;
});
newStrings = newString.join("");
process.stdout.write(newStrings);
