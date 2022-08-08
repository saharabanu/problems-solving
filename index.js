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

//  ________________________________________________

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

//  --------_________________________________________

// problem 3
// Write a function that takes the base and height of a triangle and return its area.
function areaOfTriangle(base, height) {
  const area = (base * height) / 2;
  return area;
}
// console.log(areaOfTriangle(7, 4));
// console.log(areaOfTriangle(10, 10));

// _____________________________________________________________

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
// _____________________________________________________________

// problem 5
// Write a function that takes an array and return the first and last elements as a new array.
function removeElements(params) {
  const arr = [];
  arr.push(params[0], params[params.length - 1]);
  return arr;
}
// console.log(removeElements([3, 5, 78, 23, 21, 65]));
// console.log(removeElements([6, 7, 78, 23, 21, 4]));

// _____________________________________________________________

// problem 6

//Write a function that takes an array and return a reverse array.
// Note: The function cannot change the main array. And you cannot use any array methods (Example: reverse() and push())

// const reverseArray = (arr) => arr.reduce((acc, val) => [val, ...acc], []);

let num = [1, 2, 3, 4, 5];
function reverse(arr) {
  let newArray = [];
  let n = 0;
  for (let i = num.length - 1; i >= 0; i--) {
    newArray[n] = num[i];
    n++;
  }
  return newArray;
}
// console.log(reverse([num]));
// console.log(num);
//

function arrReverse(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr[i] = arr[arr.length - i - 1];
  }
  return newArr;
}
// console.log(arrReverse(["A", "B", "C", "D", "E"]));
// ______________________________________________________________

// problem 7
// Write a function that takes an array of strings and numbers, and filters out the array so that it returns an array of integers only.
const filteredArray = (arr) => {
  let arr_1 = [];
  arr.forEach((element) => {
    if (typeof element === typeof 1) {
      arr_1.push(element);
    }
  });
  return arr_1;
};
// console.log(filteredArray([2, 5, 1, "h", "1", 4]));

function filterArray(array) {
  const arr = [];
  let index = 0;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      arr[index] = array[i];
      index++;
    }
  }
  return arr;
}
// _________________________________________________________
// problem 8
// write a function that takes an array and a string as arguments and return the index number of the string.
// Note: Cannot use any built-in method.

function findIndex(array, string) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === string) {
      return i;
    }
  }
}
// console.log(findIndex(["black", "red", "blue", "green"], "green"));
// console.log(findIndex(["b", "r", "c", "green"], "b"));
// console.log(findIndex([11, 12, 13, 39], 12));
// _______________________________________________________________

// problem 9
// Write a function that takes two arguments X and Y as integers. And returns a value of X to the power of Y.

// Note: The function will work like Math.pow(). And You cannot use any built-in methods.

function power(x, y) {
  let newNum = 1;
  for (let i = 1; i <= y; i++) {
    newNum = newNum * x;
  }
  return newNum;
}
// console.log(power(2, 4));

const numPow = (num1, num2) => num1 ** num2;
// console.log(numPow(3, 4));

//  ---------------------------______________________________>
// problem 10
// Write a function that takes a parameter as an integer and returns the number of digits in this parameter.

function countDigits2(digit) {
  let count = 0;
  while (digit >= 1) {
    digit = parseInt(digit) / 10;
    count = count + 1;
  }
  return count;
}
// console.log(countDigits2(4521));
function countDigits(digit) {
  let count = 0;
  for (let i = digit; i >= 1; i = i / 10) {
    count++;
    // console.log(count);
  }
  // console.log(count);
  return count;
}
// console.log(countDigits(4521)); something is wrong
// console.log(countDigits(0));
// console.log(countDigits(3543678));

function countDigit1(number) {
  let count = 0;
  if (number === 0) {
    return 1;
  }
  while (number != 0) {
    number = Math.floor(number / 10);
    count++;
  }
  return count;
}
// console.log(countDigit1(0));
// console.log(countDigit1(5767));
// console.log(countDigit1(234234));

// Note: You cannot change the type of value. Like, you cannot convert an integer into a string.

//  ---------------------------_________________________________>

// problem 11

// Write a function that takes an integer and print a pattern for this number.
function makePattern(num) {
  const strNum = num.toString();
  let i = 1;
  while (i != num) {
    // console.log(strNum.repeat(i));
    i++;
  }
  i += 1;
  while (i != 0) {
    i--;
    // console.log(strNum.repeat(i));
  }
  return;
}
makePattern(5);
//  ---------------------------________________________________________________>

// problem 12
// /Write a function that takes an array of a number and return the largest number in an array
// Note: Please avoid any kind of built-in feature for now.
function largestNumber(arr) {
  let i = 0;
  let max = arr[i];
  while (i < arr.length - 1) {
    if (max < arr[i + 1]) {
      max = arr[i + 1];
    }
    i++;
  }
  return max;
}
console.log(largestNumber([1, 5, 6, 8, 11, 7, 10]));
//  ---------------------------_____________________________________________>
// problem 13
// write a function to count the number of zeros in 2D Array and it returns the total number of Zeros.
const countZero = (arr) => arr.flat().filter((x) => x === 0).length;
// console.log(
//   countZero([
//     [1, 0, 1],
//     [5, 1, 6],
//     [0, 8, 0],
//   ])
// );
// console.log(
//   countZero([
//     [1, 0, 2, 0],
//     [1, 1, 1, 0],
//     [0, 2, 1, 0],
//     [6, 2, 1, 0],
//     [9, 2, 1, 0],
//   ])
// );

// Examples:
// countZero([[1,0,1],[5,1,6],[0,8,0]]) ---> 3
// countZero([[1,0,2,0],[1,1,1,0],[0,2,1,0]]) ---> 5
// countZero([[3,0,3],[8,8,8,0],[0,3,0],[1,0,1,0]]) ---> 6
//  ---------------------------_________________________________________________>

// problem 14
// Write a function that takes an array of a number and return the second lowest number in an array

// Note: Please avoid any kind of built-in feature for now.
const lowestNumber = (array) => {
  let min = Infinity;
  let secondMin = Infinity;
  for (let small = 0; small < array.length; small++) {
    if (array[small] < min) {
      secondMin = min;
      min = array[small];
    } else if (array[small] < secondMin) {
      secondMin = array[small];
    }
  }
  return secondMin;
};
// console.log(lowestNumber([1, 5, 6, 8, 2, 11, 7, 10]));
// console.log(lowestNumber([6, 8, 1, 17, 71, 10]));
// console.log(lowestNumber([9, 6, 3, 8, 5, 2, 9]));

//  ---------------------------______________________________________________>
// problem 15
// Write a function that takes a string like this "rtr3dg6dfju7". And find all numbers from this string and return the sum of those numbers.

const sumNumbers = (str) =>
  str
    .split("")
    .filter((x) => Infinity - x > 0)
    .reduce((preValue, currentValue) => preValue + Number(currentValue), 0);
// console.log(sumNumbers("ty5df1fdf4fd9"));
// console.log(sumNumbers("abc1dgv2f3fdf4fd5"));
// console.log(sumNumbers("zx5zx5zx5fdd0fd1"));
// _____________________________________________________________

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
// _______________________________________________________________

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

//  ---------------------------___________________________________________________>

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
// ___________________________________________________________________________

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
// __________________________________________________________________________

// Problem: 20
// Write a function that converts a binary number to a decimal number.

function binaryToDecimal(binary) {
  let decimalNumber = parseInt(binary, 2);
  return decimalNumber;
}

// console.log(binaryToDecimal("10011"));
// console.log(binaryToDecimal("10"));
// console.log(binaryToDecimal("110101"));
// __________________________________________________________________________

// Problem: 21
// Write a function that takes a string and returns the string in alphabetical order.

function alphabeticOrder(str) {
  const order = str.split("").sort().join("");
  return order;
}

// console.log(alphabeticOrder("cbad"));
// console.log(alphabeticOrder("programming"));
// console.log(alphabeticOrder("happy"));
// ______________________________________________________________________________

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
// ______________________________________________________________________________

// Problem: 23
// A palindrome is a word, phrase, number, or other sequences of characters that reads the same backward or forward, such as madam or rotator.
// Write a function that takes a string and determines whether it's a palindrome or not. The function should return a boolean value.

function isPalindrome(str) {
  // const arr = str.split("");
  const arr = str;
  if (arr[0] === arr[arr.length - 1]) {
    return true;
  } else {
    return false;
  }
}
// console.log(isPalindrome("repaper"));
// console.log(isPalindrome("letter"));
// console.log(isPalindrome("deed"));
// console.log(isPalindrome("sahara"));
// _________________________________________________________________________

// Problem: 24
// "Dushtu Polapain" stays away from "dushtu activities" while solving the problem.
// Let's say, you are trying to watch some lectures to study for your next exam but you keep getting distracted by meme compilations, vine compilations, anime, and more on your favourite video platform.

// Now, your job is to create a function that takes a string and checks some words If it does, return "NO!". Otherwise, return "Good luck, Safe watching!"
// "anime"
// "meme"
// "vines"
// "roasts"
// "Hot pics"
// If it does, return "NO!". Otherwise, return "Good luck, Safe watching!".

const badWords = ["anime", "meme", "vines", "roasts", "Hot pics"];
function preventDistraction(str) {
  badWords.every((word) => {
    if (str.includes(word)) {
      console.log("No!");
      return false;
    } else if (badWords[badWords.length - 1] == word) {
      console.log("Good luck, Safe watching!");
    }
    return true;
  });
}
// preventDistraction("meme that butter my eggroll");
// preventDistraction("Hot pics of your favorite one!");
// preventDistraction("How to learn programming in an easy way!");
// preventDistraction(" it is  anime!");
// preventDistraction(" everything is good!");
// ______________________________________________________________________

// Problem: 25
// Let's start a battle with problem-solving.
// Starting from the left side of an integer, adjacent digits pair up in "battle" and the larger digit wins. If two digits are the same, they both lose. An alone digit automatically wins.
// Create a function that returns the victorious digits.
// Examples:
// battleWins(468921335) --> 6925
// // [46]: 6 wins; [89] 9 wins; [21] 2 wins;
// // [33] neither wins that's mean lose; 5 (automatically) wins
// battleWins(42539) --> 459
// battleWins(22222) --> 2
// battleWins(6892) --> 89
// Notes:
// There are no winners in a battle with equal digits (neither should be printed).
// If the length of the number is odd, the alone digit should be printed at the end of the number.

function battleWins(number) {
  let max = "";
  numStr = number.toString();
  numStrArr = numStr.split("");
  for (i = 0; i < numStrArr.length; i = i + 2) {
    if (numStrArr[i] == numStrArr[i + 1]) {
      continue;
    } else if (numStrArr[i] == numStrArr[numStrArr.length - 1]) {
      max += numStrArr[i];
    } else if (numStrArr[i] > numStrArr[i + 1]) {
      max += numStrArr[i];
    } else {
      max += numStrArr[i + 1];
    }
  }
  return max;
}
// console.log(battleWins(468921335));
// console.log(battleWins(42539));
// console.log(battleWins(22222));
// console.log(battleWins(6892));
// _____________________________________________________________________________

// Problem: 26
// Guys, prepare yourself for the upcoming new battleground. Which will be more challenging and interesting for you.
// wait..! Hand washing is very important. So, please wash your hand today.
// Let's say, It takes 21 seconds to wash your hands and help prevent the spread of COVID-19.
// Write a function that takes the number of times a person washes their hands per day and the number of months they follow this routine after that calculates the duration in minutes and seconds that person spends washing their hands.

function washHand(washTime, totalMonth) {
  totalMonth = totalMonth * 30;
  washTime = (washTime * 21 * totalMonth) / 60;
  washMinutes = parseInt(washTime);
  washSeconds = parseInt((washTime % 1).toFixed(1).substring(2) * 6);
  // console.log(washMinutes + " minutes and " + washSeconds + " seconds");
}
washHand(5, 12);
washHand(9, 7);
washHand(11, 3);

// extra __________________________________________________

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

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      // compare two adjacent element
      if (arr[j] > arr[j + 1]) {
        // swap them
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swap = true;
      }
    }
  }
  return arr;
}
console.log(bubbleSort([1, 10, 2, 3, 5, 30, 40, 28]));

// problem 12

var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var removed = arr1.splice(2, 2);
// console.log(removed);

// system 1
const arr = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 90];
// remove 7 index from this array

for (let i = 5; i < arr.length; i++) {
  if (arr[i] === 40) {
    arr.splice(i, 1);
    // console.log(arr);
  }
}

// system2
const arr2 = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 90];

const resultArr = arr2.splice(7, 1);

// console.log(arr2);
// console.log(resultArr);
