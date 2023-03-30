/* 

Write a JavaScript Function that takes a word and returns the new word without including the first two characters.
If string length less than 2 return -1,
If the string length is 2 returns 1
If the string length is equal to 2 then follow the below examples.
Example 1:
Input: array
Output: ray 
Example 2:
Input: object
Output: ject
Constraints:
Word length cannot be negative or zero. i can't understand


*/


function newFunc(word){
    

    for (let i = 0; i < word.length; i++) {
      
       if(word.length < 2){
        return -1
       }
       else if(word.length <= 2){
         return 1
       }
       
       else{
        return word.slice(2)
       }
        
    }


}
let word = 'array'
console.log(newFunc(word))