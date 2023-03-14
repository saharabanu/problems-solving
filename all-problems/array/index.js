// array summation 

const numbers = [5,7,23,56,89,80,46];



// sum
let sum = 0;

for (let i = 0; i< numbers.length; i++){
    sum += numbers[i]
    
}
// console.log(sum);

let evenSum = 0;
// even number and its summation  jor
for (let i = 1; i< numbers.length; i++){
    if( numbers[i] % 2 === 0){
        evenSum += numbers[i];
       
    }
   
}
// console.log(evenSum)
// odd number and its summation  jor
let oddSum = 0;
for (let i = 1; i< numbers.length; i++){
    if( numbers[i] % 2 !== 0){
        oddSum += numbers[i];
       
    }
   
}
// console.log(oddSum)

// insert and remove element from  array

// method 1 
numbers.push(100);
numbers.unshift(3);
// method 2 
numbers.splice(3, 0, 11)  // first index, then remove korbo kina, last koto add korbo
// remove 
numbers.pop();
numbers.shift();

numbers.splice(2, 1)

// console.log(numbers)



// search value from array  
let find = 56;
let isFound = false;
for (let i = 0; i < numbers.length; i++) {
    if( numbers[i] === find){
        //   console.log('index Number' + i);
          isFound = true;
          
    }


   
}
if(!isFound){
    // console.log("not found")
}


// multidimensional array


let arr = [
    [67,89,90,55],
    [33,78,98,96],
    [46,84,66,80],
    [44,77,99,69],
]

for(let i = 0; i < arr.length ; i++){
    for (let j = 0; j < arr[i].length; j++) {
        // console.log('element' + i + " :"+ arr[i][j])
        
    }
}


let arr2 = [
    [['Asma', "saleha"]],
    [["elias"]],
    
]

for(let i = 0; i < arr2.length ; i++){
    for (let j = 0; j < arr2[i].length; j++) {
        // console.log('element' + i + " :"+ arr2[i][j])

        for (let k = 0; k < arr2[i][j].length; k++) {
        //    console.log('element' + i + " :"+ arr2[i][j][k])
            
        }
       
        
    }
}

// reverse array 
let arr3 = [200,500,900,400,600]

// for (let i = 0; i < (arr3.length /2); i++) {
//     let temp = arr3[i];
//      arr3[i] =  arr3[arr3.length -i -1];
//      arr3[arr3.length -1 -i] = temp
    
// }


// short array 
// console.log(arr3.reverse())
// console.log(arr3)

// join // fill, concate,  isArray, from,

let nums = [2,3,4,5,6,7];
let nums2 = [9,8,7,6,5,4,3,21,1]

const arrayJoin = nums.join(" , ") // join any symbol
// console.log(arrayJoin)

const arrayFill = nums.fill(500) // fill any  number or symbol
//  console.log(arrayFill)


const arrayConcate = nums.concat(nums2) // concate two array
//  console.log(arrayConcate);

const arrayIsArray = Array.isArray(nums) // check , is it array or not
//  console.log(arrayIsArray)


const arrayFrom = Array.from([89]) // create new array
// console.log(arrayFrom)

