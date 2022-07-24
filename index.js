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
//  --------------------------->

// problem 4
// Write a function that takes a word and returns the new word without including the first two characters.
// অনুবাদ: একটি ফাংশন লিখুন যা একটি শব্দ(স্ট্রিং ) নেয় এবং প্রথম দুটি অক্ষর অন্তর্ভুক্ত না করে নতুন শব্দটি(স্ট্রিং) রিটার্ন করে।
//  --------------------------->

// problem 5
// Write a function that takes an array and return the first and last elements as a new array.
// অনুবাদ: একটি ফাংশন লিখুন যা একটি অ্যারে নেয় এবং একটি নতুন অ্যারে হিসাবে প্রথম এবং শেষ উপাদানগুলি রিটার্ন করে।

// ------------------------------
// ------------------------------
// problem 6
// Write a function that takes an array and return a reverse array.
//Write a function that takes an array and return a reverse array.
// অনুবাদ: একটি ফাংশন লিখুন যা একটি অ্যারে নেয় এবং একটি বিপরীত অ্যারে রিটার্ন করে।
// Note: The function cannot change the main array. And you cannot use any array methods (Example: reverse() and push())
// অনুবাদ: ফাংশন প্রধান অ্যারে পরিবর্তন করতে পারবে না। এবং আপনি কোন অ্যারে মেথড ব্যবহার করতে পারবেন না (উদাহরণ: reverse() এবং push())

// ------------------------------
// ------------------------------

// problem 7
// Write a function that takes an array of strings and numbers, and filters out the array so that it returns an array of integers only.
// অনুবাদ: একটি ফাংশন লিখুন যা স্ট্রিং এবং সংখ্যার একটি অ্যারে নেয় এবং অ্যারেটি ফিল্টার করে যাতে এটি শুধুমাত্র পূর্ণসংখ্যার একটি অ্যারে রিটার্ন করে।
//  --------------------------->

// problem 8
// write a function that takes an array and a string as arguments and return the index number of the string.
// অনুবাদ: একটি ফাংশন লিখুন যা আর্গুমেন্ট হিসাবে একটি অ্যারে এবং একটি স্ট্রিং নেয় এবং স্ট্রিংয়ের সূচক (ইনডেক্স ) নম্বর রিটার্ন করে।
// Note: Cannot use any built-in method.
// অনুবাদ: কোনো বিল্ট-ইন পদ্ধতি ব্যবহার করা যাবে না।

//  --------------------------->

// problem 9
// Write a function that takes two arguments X and Y as integers. And returns a value of X to the power of Y.
// অনুবাদ: একটি ফাংশন লিখুন যা দুটি আর্গুমেন্ট X এবং Y পূর্ণসংখ্যা হিসাবে নেয়। এবং Y এর শক্তিতে X এর একটি মান প্রদান করে।
// Note: The function will work like Math.pow(). And You cannot use any built-in methods.
// অনুবাদ: ফাংশনটি Math.pow() এর মতো কাজ করবে। এবং আপনি কোনো বিল্ট-ইন পদ্ধতি ব্যবহার করতে পারবেন না।

//  --------------------------->
// problem 10
// Write a function that takes a parameter as an integer and returns the number of digits in this parameter.
// একটি ফাংশন লিখুন যা একটি পূর্ণসংখ্যা হিসাবে একটি প্যারামিটার নেয় এবং এই প্যারামিটারে মোট কতটি সংখ্যা রয়েছে তা প্রদান করে।
// Note: You cannot change the type of value. Like, you cannot convert an integer into a string.
// দ্রষ্টব্য: আপনি মানের প্রকার পরিবর্তন করতে পারবেন না। যেমন, আপনি একটি পূর্ণসংখ্যাকে একটি স্ট্রিংয়ে রূপান্তর করতে পারবেন না।

//  --------------------------->

// problem 11

// Write a function that takes an integer and print a pattern for this number.
//  --------------------------->

// problem 12
// /Write a function that takes an array of a number and return the largest number in an array
// অনুবাদ: একটি ফাংশন লিখুন যা একটি সংখ্যার অ্যারে নেয় এবং একটি অ্যারের মধ্যে সবচেয়ে বড় সংখ্যা রিটার্ন করে।
// Note: Please avoid any kind of built-in feature for now.
//  --------------------------->

// problem 13
// write a function to count the number of zeros in 2D Array and it returns the total number of Zeros.
// অনুবাদ: 2D অ্যারেতে শূন্যের সংখ্যা গণনা করার জন্য একটি ফাংশন লিখুন এবং এটি মোট কতটি শূন্যে তা রিটার্ন করে।
// Examples:
// countZero([[1,0,1],[5,1,6],[0,8,0]]) ---> 3
// countZero([[1,0,2,0],[1,1,1,0],[0,2,1,0]]) ---> 5
// countZero([[3,0,3],[8,8,8,0],[0,3,0],[1,0,1,0]]) ---> 6
//  --------------------------->

// problem 14
// Write a function that takes an array of a number and return the second lowest number in an array
// অনুবাদ: একটি ফাংশন লিখুন যা একটি সংখ্যার একটি অ্যারে নেয় এবং একটি অ্যারের মধ্যে দ্বিতীয় সর্বনিম্ন সংখ্যা রিটার্ন করে।

// Note: Please avoid any kind of built-in feature for now.

// lowestNumber([1,5,6,8,2,11,7,10]) —>2
// lowestNumber([6,8,1,17,71,10]) —>6
// lowestNumber([9,6,3,8,5,2,9]) —>3

//  --------------------------->
// problem 15
// Write a function that takes a string like this "rtr3dg6dfju7". And find all numbers from this string and return the sum of those numbers.
// sumNumbers("ty5df1fdf4fd9") --> 19
// sumNumbers("abc1dgv2f3fdf4fd5") --> 15
// sumNumbers("zx5zx5zx5fdd0fd1") --> 16
// problem 16
// problem 17
//  --------------------------->

// Problem: 18
// Write a function that takes a string. And return the string by capitalizing the first letter of each word.
// অনুবাদ: একটি ফাংশন লিখুন যা একটি স্ট্রিং নেয়। এবং প্রতিটি শব্দের প্রথম অক্ষর বড় হাতের(ক্যাপিটাল লেটার) করে স্ট্রিংটি রিটার্ন করে।
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
// অনুবাদ: একটি ফাংশন লিখুন যা একটি স্ট্রিং নেয় এবং স্ট্রিংটি "js" দিয়ে শুরু হলে true রিটার্ন করে অন্যথায় false রিটার্ন করে।

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
// অনুবাদ: একটি ফাংশন লিখুন যা একটি বাইনারি সংখ্যাকে দশমিক সংখ্যায় রূপান্তর করে।

function binaryToDecimal(binary) {
  let decimalnumber = parseInt(binary, 2);
  return decimalnumber;
}

// console.log(binaryToDecimal("10011"));
// console.log(binaryToDecimal("10"));
// console.log(binaryToDecimal("110101"));

// Problem: 21
// Write a function that takes a string and returns the string in alphabetical order.
// অনুবাদ: একটি ফাংশন লিখুন যা একটি স্ট্রিং নেয় এবং বর্ণানুক্রমিক ক্রমে স্ট্রিংটি রিটার্ন করে।

function alphabeticOrder(str) {
  const order = str.split("").sort().join("");
  return order;
}

console.log(alphabeticOrder("cbad"));
console.log(alphabeticOrder("programming"));
console.log(alphabeticOrder("happy"));

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
