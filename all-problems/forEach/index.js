let arr = [ 1, 2, 3, 45, 6]
let sum = 0;
arr.forEach((value, index, arr) => {
   sum += value;
})
// console.log(sum)

// map

let sqrArr = arr.map((value) => {
   return value * value
})

// console.log(sqrArr)


// filter 


let arr1 = [ 3,4,5,6,700,8,9,2,3,1,10, 100];

let filteredArr = arr1.filter((value) => {
    return value % 2 === 1
})
// console.log(filteredArr)

// reduce 

let sum1 = arr1.reduce((prev, curr)=> {
    return Math.max(prev, curr)
}, 0);

// console.log(sum1)

// find 

let findArr = arr1.find((value) => {
   return value === 1
})
let findIndexArr = arr1.findIndex((value) => {
   return value === 1
})
// console.log(findArr)