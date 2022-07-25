// problem 1
// write a program to print all even numbers from 1 to N

function evenFn(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      // console.log(i);
    }
  }
}
evenFn(20);

// Odd Number
function OddFn(n) {
  for (let i = 0; i <= n; i++) {
    if (i % 2 !== 0) {
      // console.log(i);
    }
  }
}
OddFn(10);

//  --------------------------->
//  problem 2
//  write a program to find the sum of numbers from N to M

const sumFn = (n, m) => {
  let sum = 0;
  for (let i = n; i <= m; i++) {
    sum += i;
  }
  return sum;
};
// console.log(sumFn(4, 10));
function sum(m, n) {
  let result = 0;
  for (let i = m; i <= n; i++) {
    result += i;
  }
  return result;
}

// console.log(sum(10, 20));

//  --------------------------->

// problem 3
// Write a function that takes the base and height of a triangle and return its area.
function areaOfTriangle(base, height) {
  const area = (base * height) / 2;
  return area;
}
// console.log(areaOfTriangle(7, 4));
// console.log(areaOfTriangle(10, 10));

// problem 4
// Write a function that takes a word and returns the new word without including the first two characters.

function newWord(char) {
  const output = char.substring(2);
  return output;
}

// console.log(newWord("array"));
// console.log(newWord("javascript"));
// console.log(newWord("google"));

// system2
function newWord1(char) {
  const arr = char.split("");
  arr.shift();
  arr.shift();
  const result = arr.join("");

  return result;
}

// console.log(newWord1("array"));
// console.log(newWord1("javascript"));
// console.log(newWord1("google"));

// problem 5
// Write a function that takes an array and return the first and last elements as a new array.
function removeElements(params) {
  const arr = [];
  arr.push(params[0], params[params.length - 1]);
  return arr;
}
// console.log(removeElements([3, 5, 78, 23, 21, 65]));
// console.log(removeElements([6, 7, 78, 23, 21, 4]));

// problem 6

//Write a function that takes an array and return a reverse array.
// Note: The function cannot change the main array. And you cannot use any array methods (Example: reverse() and push())

// problem 7
// Write a function that takes an array of strings and numbers, and filters out the array so that it returns an array of integers only.

// problem 8
// write a function that takes an array and a string as arguments and return the index number of the string.
// Note: Cannot use any built-in method.

// problem 9
// Write a function that takes two arguments X and Y as integers. And returns a value of X to the power of Y.

// Note: The function will work like Math.pow(). And You cannot use any built-in methods.

//  --------------------------->
// problem 10
// Write a function that takes a parameter as an integer and returns the number of digits in this parameter.

// Note: You cannot change the type of value. Like, you cannot convert an integer into a string.

//  --------------------------->

// problem 11

// Write a function that takes an integer and print a pattern for this number.
//  --------------------------->

// problem 12
// /Write a function that takes an array of a number and return the largest number in an array
// Note: Please avoid any kind of built-in feature for now.

//  --------------------------->
// problem 13
// write a function to count the number of zeros in 2D Array and it returns the total number of Zeros.

// Examples:
// countZero([[1,0,1],[5,1,6],[0,8,0]]) ---> 3
// countZero([[1,0,2,0],[1,1,1,0],[0,2,1,0]]) ---> 5
// countZero([[3,0,3],[8,8,8,0],[0,3,0],[1,0,1,0]]) ---> 6
//  --------------------------->

// problem 14
// Write a function that takes an array of a number and return the second lowest number in an array

// Note: Please avoid any kind of built-in feature for now.

// lowestNumber([1,5,6,8,2,11,7,10]) —>2
// lowestNumber([6,8,1,17,71,10]) —>6
// lowestNumber([9,6,3,8,5,2,9]) —>3

//  --------------------------->
// problem 15
// Write a function that takes a string like this "rtr3dg6dfju7". And find all numbers from this string and return the sum of those numbers.

function sumNumbers(str) {}
console.log(sumNumbers("ty5df1fdf4fd9"));
console.log(sumNumbers("abc1dgv2f3fdf4fd5"));
console.log(sumNumbers("zx5zx5zx5fdd0fd1"));
// sumNumbers("abc1dgv2f3fdf4fd5") --> 15
// sumNumbers("zx5zx5zx5fdd0fd1") --> 16

// problem 16
// Write a function that takes min and max value and return a random integer within min value and max value.
function randomNumber(min, max) {
  const result = Math.floor(Math.random() * (max - min + 1)) + min;

  return result;
}

// console.log(randomNumber(5, 20));
// console.log(randomNumber(5, 20));
// console.log(randomNumber(5, 20));
// console.log(randomNumber(5, 20));

// problem 17
// Write a function that takes two integers and return the greatest common divisor (GCD) of two integers.

function GCD(num1, num2) {
  let gcd = 0;
  for (let i = 1; i <= num1 && i <= num2; i++) {
    if (num1 % i == 0 && num2 % i == 0) {
      gcd = i;
    }
  }
  return gcd;
}
// console.log(GCD(3, 10));
// console.log(GCD(9, 15));
// console.log(GCD(16, 36));
// console.log(GCD(7, 49));

//  --------------------------->

// Problem: 18
// Write a function that takes a string. And return the string by capitalizing the first letter of each word.
// function capitalizeFirstLetter(string) {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }

// console.log(capitalizeFirstLetter('foo')); // Foo

// system1

function capitalizing(string) {
  return string
    .split(" ")
    .map((firstLetter) => firstLetter.charAt(0).toUpperCase() + firstLetter.substring(1))
    .join(" ");
}
// console.log(capitalizing("we love stack learner"));
// console.log(capitalizing("i love programming"));
// console.log(capitalizing("deep thinker"));

// system2

function capitalizingFn(string) {
  let splitStr = string.toLowerCase().split(" ");

  for (let i = 0; i < splitStr.length; i++) {
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substr(1);
  }

  return splitStr.join(" ");
}

// console.log(capitalizingFn("we love stack learner"));
// console.log(capitalizingFn("i love programming"));
// console.log(capitalizingFn("deep thinking"));

// Problem: 19
// Write a function that takes a string and return true if the string starts with 'js' and false otherwise.

function checkString(str) {
  if (str.length < 2) {
    return false;
  }
  word = str.substring(0, 2);
  if (word == "js") {
    return true;
  } else {
    return false;
  }
}
// console.log(checkString("javascript"));
// console.log(checkString("json"));
// console.log(checkString("deep thinker"));
// console.log(checkString("js js amazing"));
// console.log(checkString("json express "));

const checkString1 = (str) => str.startsWith("js");
// console.log(checkString("javaScript"));
// console.log(checkString("deep thinker"));
// console.log(checkString("js is amazing"));
// console.log(checkString("json"));

// Problem: 20
// Write a function that converts a binary number to a decimal number.

function binaryToDecimal(binary) {
  let decimalNumber = parseInt(binary, 2);
  return decimalNumber;
}

// console.log(binaryToDecimal("10011"));
// console.log(binaryToDecimal("10"));
// console.log(binaryToDecimal("110101"));

// Problem: 21
// Write a function that takes a string and returns the string in alphabetical order.

function alphabeticOrder(str) {
  const order = str.split("").sort().join("");
  return order;
}

// console.log(alphabeticOrder("cbad"));
// console.log(alphabeticOrder("programming"));
// console.log(alphabeticOrder("happy"));

// Problem: 22
// Let's say you work in a Lamborghini car workshop, and your work is to build cars from a collection of parts. Each car needs 4 wheels, 1 car body, and 2 figures of people to be placed inside. Given the total number of wheels, car bodies, and figures available, how many complete cars can you make?

function makeCars(wheels, carBodies, figures) {
  const wheelsValue = wheels / 4;
  const bodiesValue = carBodies / 1;
  const figuresValue = figures / 2;
  if (wheelsValue < 1 || bodiesValue < 1 || figuresValue < 1) {
    return "Not enough parts available for making car!";
  }
  const min = Math.min(wheelsValue, bodiesValue, figuresValue);
  return Math.floor(min);
}

// console.log(makeCars(20, 20, 20));
// console.log(makeCars(58, 50, 40));
// console.log(makeCars(111, 255, 55));

// / * the First Pattern * with Bug
function strPattern(num) {
  for (var i = 0; i < num; i++) {
    let str = "";
    for (var j = 0; j <= i; j++) {
      str = str + "* ";
    }
    // console.log(str);
  }

  for (var i = num - 1; i > 0; i--) {
    let str = "";
    for (var j = 0; j < i; j++) {
      str = str + "* ";
    }
    // console.log(str);
  }
}

strPattern(4);

//find
const test_arr = [4, 3, 2, 1];

const test_result = test_arr.find((x, index) => {
  //console.log(index);
  return x == 3, index;
});

// console.log(test_result);

const test_result1 = test_arr.filter((x, index) => {
  //console.log(index);
  return x > 1;
});

// console.log(test_result1);
