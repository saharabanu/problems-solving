// callback function


function sample (a, b, cb) {
    let c = a+ b;
    let d = a-b;

    let result = cb( c , d);
    return result
    
}

function sum (a, b){
    return a + b

}

let result = sample(3,4, sum)
// console.log(result)