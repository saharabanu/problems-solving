function sum(n) {
    if(n === 1){
     return 1
    }
    return n + sum(n -1)
}
// console.log(sum(3));


let arr = [1, 2, 3, 4, 5];

function multiple (arr, lastIndex) {
     if(lastIndex === 0){
        return 1
     }
     return arr[lastIndex] * multiple(arr, lastIndex -1)
}
// console.log(multiple(arr, arr.length -1))