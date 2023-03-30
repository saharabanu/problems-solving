/* 
Write a JS function AreaOfTringle that takes the base and height of a triangle and returns its area.
Example 1:
Input: 7, 8
Output: 28
Explanation: Base 7 and height 8. After calculation,its area is 14.
Example 2:
Input: 10, 10
Output: 50  

Constraints:
Base cannot be negative 
Height cannot be negative



*/

function AreaOfTringle (base, height) {
    let area = 0
  if(base > 0 && height > 0){
     area = (base * height) / 2;
    
  }
  else{
    return 'please give positive number'
  }
 return area
}

console.log(AreaOfTringle(10, 10))