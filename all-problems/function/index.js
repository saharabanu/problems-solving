// to know arguments  of function

function sumOfArray (a, b, c) {
    // to know details 

    for (let i = 0; i <arguments.length; i++) {
        const element = arguments[i];
        // console.log(element)
        
    }
//    console.log(arguments)
}
sumOfArray(20,30,50)

// with no parametres 
function sumOfArray () {
    // to know details 

    for (let i = 0; i <arguments.length; i++) {
        const element = arguments[i];
        // console.log(element)
        
    }
//    console.log(arguments)
}
sumOfArray(20,30,50)

// return  must  

function person (name, email){
    return{
        name: name,
        email: email
    }
}

const a = person("sahra", 'sa@gnail.com')
// console.log(a)

// function expression using annonymous


const summation = function(a,b){
return a-b
}
// console.log(summation(5,7))

// inner function 

function father (greet, name){
    function son() {
        if(name){
            return name.split(" ")[0]
        }
        
        
        
    }
    var message = greet + " " + son();
    // console.log(message)
}
father("my father is", "Solaiman Ali")

// scope 
let b = 15; 

function test(n){
    function c (){
        return n %3 === 0
    }
    function d (){
        return n %5 === 0
    }
    if(c() && d()){
        // console.log( n + ' is divided by 3 and 5')
    }
    else{
        // console.log("not possible")
    }
}

test(15)


// higher order function 

function add (a, b) {
   return a + b
}

function manipulate(a, b, func){
   let c = a+ b;
   let d = a*b;

   function multiply (){
     let m = func(a,b)

     return c*d*m;
   }

   return multiply

}
const multiply = manipulate(3, 4, add)
// console.log(multiply())



// closure


