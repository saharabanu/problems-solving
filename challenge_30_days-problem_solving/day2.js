/* 
Write a JavaScript function countWords  that takes a string and returns the number of words contained in this string. 
Example:
Input: ”Lorem ipsum dolor sit amet consectetur”
Output: 6

Constraints:
using built-in functions is prohibited



*/



function countWords (str) {
  let count = 1 ;

  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    if(element === " "){
        count++
    }
    
  }
  return count
}
console.log(countWords("Lorem ipsum dolor sit amet consectetur"))










// this function is used to get all characters count 
function countEachCharacter(str){
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        
        if(str[i] !== "" ){
            count += 1
        }
    }
  return count;
}

let result = countEachCharacter('Lorem ipsum dolor sit amet consectetur');
// console.log (result);