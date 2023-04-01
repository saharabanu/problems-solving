/* 
Write a function that takes an array and returns a new array containing all the odd indexed elements from this array.
If the new  array length is less than 3. Then add a new element “DEVZEROONE” at the last position of this new array.
If the new  array length is greater than 3. Then add a new element “DEVZEROONE” at the first position of this new array.
In this problem. We will consider 0 indexed  as an odd number.

Example 1:
Input: [ 3, 6, 5, 4, 8, 10 ]
Output: [ “DEVZEROONE”, 3, 6, 4, 10 ]
Example 2:
Input: [ 0, 2, 4, 7, 9 ]
Output: [ 0, 2, 7 ]

Constraints:
Array length cannot be negative or zero.


*/


function findOddNumber (arr) {
    if(arr.length <= 0){
        return 'Array length cannot be negative or zero.'
    }


    let newArr = [];
    

     for (let i = 1; i < arr.length ; i ++) {
        const element = arr[i];  
          if(i % 2 === 1){
            if( i === 1 && arr[i -1]){
                newArr.push(arr[i -1])
               }
             
               newArr.push(element)
          }
          
           
// console.log(element)
        
        
     }

     if(newArr.length > 3){
        newArr.unshift("DEVZEROONE")
     }
     else if(newArr.length < 3){
        newArr.push("DEVZEROONE")
     }

   return newArr
}

let arr =[3, 6, 5, 4, 8, 10,11, 34, 78];
let arr1 = [0, 2, 4, 7, 9]; /// here is problem 0 not found
let arr3 = [ 1,2, 3];
let arr4 = []
console.log(findOddNumber(arr))
console.log(findOddNumber(arr1))
console.log(findOddNumber(arr3))
console.log(findOddNumber(arr4))
