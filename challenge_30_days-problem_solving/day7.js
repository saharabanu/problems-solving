/* 
Write a JavaScript function that takes an array that contains string and integer elements, and returns a new array with only integer elements.
Example 1:
Input: [ 3, 6, “hello”, 4, “3”,  8]
Output: [ 3, 6,  4,  8]
Constraints:
Array length cannot be zero or negative.



*/

function findIntegerNumber (arr){
    if(arr.length <= 0){
        return 'Array length cannot be zero or negative.'
      }
  let result = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
    
        if(typeof(element) === "number"){
           result.push(element)
        }
        
    }
    
 return result

 
}
let arr = [ 3, 6, 'hello', 4, '3',  8];
let arr1 = [];
console.log(findIntegerNumber(arr))
console.log(findIntegerNumber(arr1))