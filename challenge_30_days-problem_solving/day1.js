/* 
 Write a JavaScript Function   printNumber that takes an integer N and prints all the numbers between 0 to N.
Example:
Input: 5
Output: 0 1 2 3 4 5
Constration:
0 < N 
using recursive function 
*/

  
 // system 1 using recursive
function printNumber (N) {
    if( 0 <= N){
       printNumber(N -1) 
    //  console.log(N + "")
    }
    return
    

}
printNumber(6)

// system 2 using  for loop
function printFunc (N){
  for (let i = 0; i <=N; i++) {
    const element = i;
    console.log(element) 
  }
  
}
printFunc(5)