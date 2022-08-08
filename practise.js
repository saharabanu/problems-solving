// array concept start
// ________________________________________________________________

const vowels = ["a", "e", "i", "o", "u"];

// how many vowels are there to know
// console.log(vowels.length);
// to know u index, jodi thake tahole dibe otherwise position -1 dekhabe
// console.log(vowels.indexOf("k"));
// console.log(vowels.indexOf("i"));
const array = [90, 59, 00, 34, 24, 56, 70];
const thirdIndex1 = array[907];
const thirdIndex = array[4];
array[4] = 555;
// console.log(thirdIndex, thirdIndex1, array);
// array concept end
//

const friends = [
  "kajol",
  "suborna",
  "reshma",
  "rohima",
  "goljar",
  "karima",
  "rohmoti",
  "kailam",
  "rubaiyya",
  "jesmin",
  "sharmin",
  "acia",
];
// console.log(friends);
// console.log(friends.push("Ramjan"));
// // console.log(friends.pop());
// const lastItem = friends.pop();
// console.log(friends.unshift("Ayesha"));
// console.log(friends.shift());
// console.log(friends.shift());
// console.log(friends, lastItem);

// problem 12

var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var removed = arr1.splice(2, 2);
// console.log(removed);

const arr = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 90];
// remove 7 index from this array

// for (let i = 5; i < arr.length; i++) {
//   if (arr[i] === 40) {
//     arr.splice(i, 1);
//     // console.log(arr);
//   }
// }

const resultArr = arr.splice(7, 1);

// console.log(arr);
// console.log(resultArr);

// ________________________________________________________________;

// comaprison operator

const number = 89;
const number1 = 89;
const number2 = 12;

// console.log(number > number1);
// console.log(number <= number1);
// console.log(number1 === number2);
// console.log(number1 == number2);
// console.log(number1 && number2 > number);
// console.log(number || number2 > number1);

if (number == number1) {
  //   console.log("I buy something");
} else {
  //   console.log("sorry ! your amount is very low");
}
// while loop  example
let myItems = 0;

while (myItems < 10) {
  //   console.log(myItems);
  //   console.log("everything is going well");
  myItems++;
  //   console.log(myItems);
}

let num = 1;
while (num <= 5) {
  //   console.log(num);
  num++;
}
// odd;
let num1 = 1;
// even
// let num1 = 1;

while (num1 <= 20) {
  // console.log(num1);
  num1 = num1 + 2;
}
// const string = "Hello World!";
// console.log(string);

function substrCount(n, s) {
  let result = 0;
  let i = 0;

  // 1st case, all letters are the same
  while (i < n) {
    let charCount = 1;
    while (i + 1 < s.length && s[i] == s[i + 1]) {
      i++;
      charCount++;
    }

    result += parseInt((charCount * (charCount + 1)) / 2);
    i++;
  }

  // 2nd case, palindrome
  for (i = 1; i < n; i++) {
    let charCount = 1;
    while (
      i + charCount < s.length &&
      i - charCount >= 0 &&
      s[i - 1] != s[i] &&
      s[i - 1] == s[i - charCount] &&
      s[i - 1] == s[i + charCount]
    ) {
      charCount++;
    }

    result += charCount - 1;
  }

  return result;
}
// console.log(substrCount());

swapcase = function swapcase(str) {
  return str.replace(/([a-z]+)|([A-Z]+)/g, function (match, chr) {
    return chr ? match.toUpperCase() : match.toLowerCase();
  });
};
// console.log(swapcase("tutjgfwxzav"));

const s = "banana";

function findALargerNumber(a, b) {
  if (a > b) {
    return 1;
  } else {
    return 0;
  }
}

// console.log(findALargerNumber(1, 19));
// console.log(findALargerNumber(4, 4));
// console.log(findALargerNumber(23, 14));
for (var i = 0; i < 10; i++) {
  // setTimeout(() => console.log(i), 0);
}

// const url = "https://jsonplaceholder.typicode.com/todos/1";

// const getData = async () => {
//   const result = await fetch(url);
//   const data = await result.json();
//   console.log(data);
// };

// getData();

const persons = [
  {
    name: "Sumit",
    age: 37,
  },
  {
    name: "Saad",
    age: 23,
  },
  {
    name: "Akash",
    age: 22,
  },
];

// console.log(persons.reduce((total, person) => total + person.age, 0));

const response = {
  id: 1,
  name: "Learn with Sumit",
  details: {
    founded: "2021",
    founded: "Sumit Saha",
    subscribers: "73K",
    views: "5,00,0000",
  },
};
// console.log(response?.details?.views);
// console.log(response && response.details && response.details.views ? response.details.views : 0);

const a = 5;
const b = {
  b: 1,
  // c: {
  //   d: {
  //     a: 5,
  //   },
  // },
};

// const {
//   c: {
//     d: { a: result },
//   },
// } = b;

// const {c:{d:{a} ={}}} = b;
// console.log(a)
// const { c: { d: { a: result } } = {} } = b;
const { c: { d: { a: result } = {} } = {} } = b;
// console.log(b);
// console.log(result);
let txt = "I can eat bananas all day";
let x = txt.slice(10, 17);
// console.log(x);
