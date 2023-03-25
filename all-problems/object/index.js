const obj = {};
// console.log(typeof obj)

const obj1 = {
    x : 10,
    y: 46,
}
obj1.z = 200;

// console.log(obj1) object literal

var obj2 = Object()  // both object constructor
var obj2 = new Object()  // both object constructor

// how to access object properties 

const access1 = obj1.x; //dot notation
// console.log(point['x']) // array notation
// console.log(access1)

// update properits value 
obj1.x = 40;
obj1["x"] = 50


// remove properties  two ways
// delete operator 
delete obj1.x


// compare object 
const obj3 = {
    name: "sahara",
    age: 25
}
const ob = {
    name: "sahara",
    age: 25
}
const obj4 = {
    name: "amirul",
    age: 28
}

//  console.log(obj3 === obj4) return false


// short way
//   console.log(  JSON.stringify(obj3) === JSON.stringify(ob))  //return true

// right way 

if(obj3.name === obj4.name && obj3.age === obj4.age){
    // console.log(true)
}
else{

    // console.log(false)
}

// how to iterate object property 

console.log("name" in obj4) // return true idf this property in available in object otherwise false

// for in  

for (const key in obj3) {
    //  console.log( 'property name:' + "  "+   key +  " and to get value:" + "  "+ obj3[key])
}

// if we need to get properties in array from object using Capital Object keys 
const allKeys = Object.keys(ob);

// if we need to get values in array from object using Capital Object values 
const allValues = Object.values(ob);

// if we need to get both values and properties in array from object using Capital Object entries
const all = Object.entries(ob);

// how to copy or create  new object from previous object using assign 
const newObj= Object.assign({},ob);
console.log(newObj)

