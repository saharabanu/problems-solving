// check type of variable
var juthi; // undefined


// console.log(Number(10));
// console.log(Number("Heloo"));
// console.log(Number("10"));
// console.log(Number(NaN));
// console.log(Number('NaN'));
// console.log(Number(null));
// console.log(Number(undefined));
// console.log(Number({}));
// console.log(Number("123ABc"));
// console.log(Number(""));


// uppercase, lowercase, length, string, modulus, avarege, 

// You can change variable value 


var penPrice = 10;
penPrice = 15;

// add something to previous value 
 var pen1 = 20;
 pen1 += 5; // or pen1 = pen1 + 5


 // how to concate string . it is not adding;
 var firstName= 'hafsa'
 var lastName= 'jahan'
 var fullName= firstName + " " + lastName;


 // how to convert or solve string to number

 // method1  parseInt, or Number,, parseFloat



 // how to fix this bug; tofixed()

 var n= 0.1;
 var n1 = 0.2




 // comparison
  // console.log(4>6, 6==6, 5 !== 5 .etc);


  // if else 

  // for loop, while loop, reverse way of while and for loop





// problem 1 
// Write a JavaScript program to display the current day and time .

var date = new Date();

var today = date.getDay();

// switch(today){
//     case 0: 
//     console.log("Today is Sunday")
//     break;
//     case 1: 
//     console.log("Today is Monday")
//     break;
//     case 2: 
//     console.log("Today is Tuesday")
//     break;
//     case 3: 
//     console.log("Today is Wednesday")
//     break;
//     case 4: 
//     console.log("Today is Thursday")
//     break;
//     case 5: 
//     console.log("Today is Friday")
//     break;
//     case 6: 
//     console.log("Today is Sutarday")
//     break;

// }


// problem 2 

// Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.

var side1 = 5; 
var side2 = 6; 
var side3 = 7; 
var s = (side1 + side2 + side3)/2;
var area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
// console.log(area);


// triangle formula 

// s= (a + b + c) /2
// area = root(s * ((s-slide1)))


// problem 3 

// Write a JavaScript program to determine whether a given year is a leap year in a calender.

// var year = 2024;

// if(year % 100 === 0){
//   console.log('it is leap year1');
// }
// else if(year % 400 === 0){
//   console.log('it is leap year2');
// }
// else if(year % 4 === 0){
//   console.log('it is leap year3');
// }
// else{
//   console.log('nothing');
// }

// function leapyear(year)
// {
// return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// }
// console.log(leapyear(2016));
// console.log(leapyear(2000));
// console.log(leapyear(1700));
// console.log(leapyear(1800));
// console.log(leapyear(100));


// The complete list of leap years in the first half of the 21st century is therefore 2000, 2004, 2008, 2012, 2016, 2020, 2024, 2028, 2032, 2036, 2040, 2044, and 2048.

// var year = 2024;

// if(year % 100 === 0){
//     console.log("it is a leap year");
// }
// else if(year % 400 === 0){
//     console.log("it is a leap year");
// }
//  if(year % 4 === 0){
//     console.log("it is a leap year");
// }
// else{
//     console.log("not leap year");
// }


// problem 4 

// Write a JavaScript program to find which 1st January is being a Sunday between 2014 and 2050.



for (var year = 2014; year <= 2050; year++)
    {
    var d = new Date(year, 0, 1);
    if ( d.getDay() === 0 )
        //  console.log("1st January is being a Sunday  "+year)
         ;
    }


// problem 5
// Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched"

// const num = Math.ceil(Math.random() * 10);
// console.log(num);
//  const gnum = prompt('Guess the number between 1 and 10 inclusive');
//  if (gnum == num)
//    console.log('Matched');
//   else
//    console.log('Not matched, the number was '+gnum);


// today=new Date();
// var cmas=new Date(today.getFullYear(), 11, 25);
// if (today.getMonth()==11 && today.getDate()>25) 
// {
// cmas.setFullYear(cmas.getFullYear()+1); 
// }  
// var one_day=1000*60*60*24;
// console.log(Math.ceil((cmas.getTime()-today.getTime())/(one_day))+
// " days left until Christmas!");

// problem 6
// Write a JavaScript program to calculate multiplication and division of two numbers

var num1 = 67;
var num2 = 34;

var mulitple = num1 * num2;
var divided = num1 / num2
// console.log(mulitple, divided);


// problem 7 

// Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference.


  var n = 3
 
    if (n <= 13)
    // console.log( 13 - n);
   
    // console.log ((n - 13) * 2);
 
// console.log(difference(32))
// console.log(difference(11))


// problem 8 
// Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.

var numberr = 90;



function testhundred(x) {
    return ((Math.abs(100 - x) <= 20) ||
       (Math.abs(400 - x) <= 20));
  }
  
  // console.log(testhundred(460));
  // console.log(testhundred(90.899));
  // console.log(testhundred(99));
  // console.log(testhundred(199));
  // console.log(testhundred(200));


//   problem 9

// Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7.

function test37(x) 
{
  if (x % 3 == 0 || x % 7 == 0) 
  {
    return true;
  } 
  else {
    return false;
  }
}

// console.log(test37(12));
// console.log(test37(14));
// console.log(test37(10));
// console.log(test37(11));

// problem 10

// Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.


var x = 90;
var y= 56;




    // if (x != y)
    // {
    // x1 = Math.abs(x - 100);
    // y1 = Math.abs(y - 100);
  
    // if (x1 < y1)
    // {
    //     console.log(x) ;
    // }
    // if (y1 < x1)
    // {
    //     console.log(y) ;
    // }
    
    // }
    // else {
    //     console.log("not") 
    // }
      
  
  
    // function near_100(x, y) {
    //     if (x != y)
    //     {
    //     x1 = Math.abs(x - 100);
    //     y1 = Math.abs(y - 100);
      
    //     if (x1 < y1)
    //     {
    //       return x;
    //     }
    //     if (y1 < x1)
    //     {
    //       return y;
    //     }
    //     return 0;
    //     }
    //     else
    //       return false;
    //   }
      
    //   console.log(near_100(90, 89));
    //   console.log(near_100(-90, -89));
    //   console.log(near_100(90, 90));


    //   problem 11 

    // Write a JavaScript program to check the total marks of a student in various examinations. The student will get A+ grade if the total marks are in the range 89..100 inclusive, if the examination is "Final-exam." the student will get A+ grade where total marks must be greater than or equal to 90. Return true if the student get A+ grade or false otherwise.

    var bangla = 100;
    var fahim = 68;

    var totall = bangla + fahim;
    var avarege = totall /2;
    // console.log(avarege);


    // if(avarege <= 90){
    //   console.log("you hav got A+");
    // }
    // else{
    //   console.log('fail');
    // }

    function exam_status(totmarks,is_exam)
  {
  if (is_exam) {
    return totmarks >= 90;
  }
 return (totmarks >= 89 && totmarks <= 100);
 }

// console.log(exam_status("78", " ", "A-"));
// console.log(exam_status("89", "true ", "A-"));
// console.log(exam_status("99", "true ", "A+"));

// problem 12  
// Write a JavaScript program to compute the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

function sortaSum(x, y) 
 {
  const sum_nums = x + y;
  if (sum_nums >= 50 && sum_nums <= 80) {
    return 65;
  }
  return 80;
}

// console.log(sortaSum(30,20));
// console.log(sortaSum(90,80));



// let num = 1;
// while (num <= 5) {
//     console.log(num);
//   num++;
// }
// // odd;
// let num1 = 1;
// // even
// // let num1 = 1;

// while (num1 <= 20) {
//   // console.log(num1);
//   num1 = num1 + 2;
// }


// probelm 13 
// Write a JavaScript program to create three new strings with some  characters are in lower case from a given string. If the string length is less than 3 convert all the characters in upper case.

function upper_lower(str) {
    if (str.length < 3) {
      return str.toUpperCase();
    }
    front_part = (str.substring(0, 3)).toLowerCase();
    back_part = str.substring(3, str.length);  
    return front_part + back_part;
  }
  // console.log(upper_lower("Python"));
  // console.log(upper_lower("Py"));
  // console.log(upper_lower("JAVAScript"));



//  console.log(true + true -true)


// Write a JavaScript function to test whether two strings are nearly equal or not. Two strings str1 and str2 are nearly equal when str1 can be generated by a single mutation(reduced) on str2

function myFunc(str1, str2) {
  let count = 0;
  for (let i =  0   ; i < str1.length && i < str2.length ; i++) {
      if (str1[i]  !== str2[i] ) {
          count++;
         
      }
     
      
  }
  return count >= 1;
}
var test1 = myFunc('javaScript', 'java'); // false
var test2 = myFunc('javahhgh', 'jasvanmjgh'); // false
var test3 = myFunc('amir', 'amilr'); // true
var test4 = myFunc('sahara', 'sahabra'); // true
var test5 = myFunc('reactjs', 'react'); // false
var test6 = myFunc('nodejs', 'noddddejs'); // false
console.log(test1, test2, test3, test4, test5, test6);


// function func(str1, str2) {
//   var count = 0;
//   var i=j=0;

//   while (i < str1.length && j < str2.length) {
//     if (str1[i] !== str2[j]) {
//       count++;

//       if(str1.length > str2.length){
//         i++;
//       }
//       else if(str1.length === str2.length){
//         console.log('same');

//       }
//       else{
//         i--
//       }
      
//     }

//     if(count > 1){
//       i++;
//       j++
//       console.log(false);

//     }

//     if(count < 2){
//       console.log(true);
//     }

    
//   }
  
// }


// console.log(func('sahara', 'anu'));


//             if(len(str1)>len(str2)):
//                 i=i+1
//             elif(len(str1)==len(str2)):
//                 pass
//             else:
//                 i=i-1
//         if(count>1):
//             return False
//         i=i+1
//         j=j+1
//     if(count<2):
//             return True
  
// str1=input("Enter first string::\n")
// str2=input("Enter second string::\n")
// boolean=nearly_equal(str1,str2)
// if(boolean):
//     print("Strings are nearly equal.")
// else:
//     print("Strings are not equal.")









