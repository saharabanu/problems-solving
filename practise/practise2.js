// 1. Write a javaScript program that takes 3 integers of a triangle and check whether the triangle is valid or not. using if else.
// Example_
// Input
// Input first side: 7
// Input second side: 10
// Input third side: 5
// Output
// Valid Triangle

var firstSide = 7;
var secondSide = 10;
var thirdSide = 5;

if((firstSide + secondSide >= thirdSide) && (secondSide + thirdSide >= firstSide) && (firstSide + thirdSide >= secondSide)){
    // console.log("Valid Triangle")
}
else{
    // console.log("Not Valid Triangle") 
}


// 2. Write a JavaScript program to find the largest value of five numbers. Using conditional statements.
// Sample numbers: -8, -3, 0, -9, 1
// Output: 1

var num1 = -8;
var num2 = -3;
var num3 = 0;
var num4 = -9;
var num5 = 1;


if((num1 > num2) && (num1 > num3) && (num1 > num4) && (num1 > num5) ){
    // console.log(num1)
}
else if((num2 > num1) && (num2 > num3) && (num2 > num4) && (num2 > num5) ){
    // console.log(num2)
}
else if((num3 > num1) && (num3 > num2) && (num3 > num4) && (num3 > num5) ){
    // console.log(num3)
}
else if((num4 > num1) && (num4 > num2) && (num4 > num3) && (num4 > num5) ){
    // console.log(num4)
}
else{
    // console.log(num5)
}


// 3. Write a JavaScript program to get the greatest common divisor (GCD) of two positive integers. // Two positive integers: 81 and 153
// GCD= 9

var num1OfGcd = 81;
var num2OfGcd = 153;
var gcd =0;

// system 1
while( num1OfGcd !== num2OfGcd){
    if(num1OfGcd > num2OfGcd){
        num1OfGcd = num1OfGcd - num2OfGcd;
        // console.log(num1OfGcd , '1');
    }
    else{
        num2OfGcd = num2OfGcd - num1OfGcd;
        // console.log(num2OfGcd, '2')
    }

}

gcd = num1OfGcd
// console.log(gcd)


// system 2
if(num2OfGcd === 0 ){
    // console.log(num1OfGcd)
}
else{
    gcd = num2OfGcd, num1OfGcd % num2OfGcd;
    gcd = num1OfGcd
    // console.log(gcd)
}

// system 3

for(let i = 0; i<= num1OfGcd && i<= num2OfGcd ; i++){
    if (num1OfGcd % i == 0 && num2OfGcd % i == 0) {
        gcd = i;
        break;
      }
      else{
        // console.log(gcd);
      }
      
    
}


// 4. Write a JavaScript program to construct the following pattern. using a nested for loop
// 	Example Output: 
// * * * * *
// * * * * *
// * * * * * 
// * * * * *
// * * * * *

var num = 5;

for (let i = 0; i < num; i++) {
    var result = "";
    for (let j = 0; j < num; j++) {
        result =  result + "*";
        
    }
    // console.log(result)
}



// 5. Write a javaScript program that takes two inputs A and B and prints all numbers that are multiples of  A but divisors of B. If there are no numbers, print “NO”.
// 	Example_

// Test Input: 5 and 20
// Expected Output: 5 10 20
// Test Input:6 and 20
// Expected Output:“NO”

var a = 5;
var b = 20;

for(let i= 5; i <= 20; i++){
    if(i % a === 0 && b % i === 0){
        console.log( i);
        
    }
    else{
        // console.log( "No");
    }
    
}
