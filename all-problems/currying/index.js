function currying (a){
   return function(b) {
    return function (c) {
         return a+ b+ c
    }
   }
}
let result = currying(5)(6)(10);
// console.log(result);