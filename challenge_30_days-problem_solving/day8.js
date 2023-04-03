/* 
Write a function findIndex that takes an array of strings and a string as arguments. and return the index number of this string.
If cannot find the string return -1.

Example 1:
Input: [ “hello”, “blue”, ”green” ] , “blue”
Output: 1
Example 2:
Input: [ “hello”, “blue”, ”green” ] , “red”
Output: -1
Constraints:
Array length cannot be zero or negative.

*/


function findIndex(arr, arg) {
    
//  system1 
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
       if(element === arg){
        return i

       }
       
        
    }
  return -1
}

let arr = [ 'hello', 'blue', 'green' ];
// console.log(findIndex(arr,'greenooo'));

// system 2  findindex method

const findIndex1 = (arr, arg) => {
    return arr.indexOf(arg)
}
console.log(findIndex1(arr, 'bluett'))