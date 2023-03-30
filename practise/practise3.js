// Write a JavaScript function that takes a string and returns the number of vowels in this string.  

// system 1
function getVowels(string) {
    var Vowels = 'aAeEiIoOuU';
    var vowelsCount = 0;
    for(var i = 0; i < string.length ; i++) {
       if (Vowels.indexOf(string[i]) !== -1) {
          vowelsCount += 1;
      }
    }
 return vowelsCount;
 }
//  console.log( getVowels("knowledge is power"));





function stringFunc(str){
    return str.replace(/[^aeiou]/g, "").length

}
// var test1 = 'saharabanu';
// var test2 = 'amirul';

// console.log(stringFunc('saharabanu'));
// console.log(stringFunc('amirul'));



       
// Write a JavaScript function that takes a string and returns the longest word within the string. 

function longestWordFunc (str) {
      var splitString = str.split(' ');
    //   console.log(splitString);
      var maxLength = 0; // for counting length
      var longestWord = ''; // initaial varaible for storing longest word

   for(var i = 0; i < splitString.length; i++){
    // console.log(splitString[i]);
    if(splitString[i].length > maxLength ){

        maxLength = splitString[i].length; // here we will get maxlength in number

        longestWord = splitString[i] ;  // here we will get longestword  in word

    }

   }
   return longestWord
}
// console.log(longestWordFunc('We live at  Dhaka in Bangladesh'));

function findLongestWord(str) {
    const splStrArray = str.split(' ');
  
    //initialize a variable to store the longest word
    let longestWord = "";
    for(let i = 0; i < splStrArray.length; i++){
      if(splStrArray[i].length > longestWord.length){
           longestWord = splStrArray[i];
       }
    }
   return longestWord
  }

  /// we can use reduce function, sort method etc

//   console.log(findLongestWord('he is i very goood boy and very intelligent'))

// Write a JavaScript program that takes an array and removes all duplicate values of a number and return all the unique values in an array of numbers.                                                                             
// Test: 
// Input array: [8,7,8,1,2,5,1]
// Output array: [8,7,1,2,5]



var numArray = [8,7,8,1,2,5,1];

function uniqueValueFunc(numArray){
    var unique = [];
    for(var i =0;  i < numArray.length; i++){
        var duplicate = numArray[i];
        if(unique.indexOf(duplicate) < 0){
            unique.push(duplicate);
        }
    }

    return unique

}
// console.log(uniqueValueFunc(numArray))

// Write a JavaScript program to calculate the area of a rectangle. Create a method to calculate the area. The length and width of the rectangle will be provided by the user. 


// Write a JavaScript program to find the greatest common divisor (GCD) of two positive numbers using recursion.   


