// এই প্রব্লেম গুলো অবশ্যই GitHub এ রেখে গিটহাব লিংক সাবমিট করতে হবে। একটা ফোল্ডার এর মধ্যে সব প্রব্লেম আলাদা আলাদা ফাইল এ করবেন । 


// 1. x = 10, y  =11, z = 12. এই মান গুলোর জন্য নিচের কোন অপশন গুলো true আর কোনগুলো false। done

// A. x< 10 false
// B. y>11 false
// C. x+y == 21 true
// D. (x*z)%7 == 1 true
// E. y<=z true
// F. !(x>y) true
// G. (x<y) && (y<z) true
// H. (x+y+z)%3==1 false
// I. (x>=y) || (y<z) true
// J. (x>y) && (y<z) false
// K. !(x%5==0 && y%5==0) true
// L. (x<y && z%11==0) || (x%10==0)   true

var x = 10;
var y = 11;
var z = 12;


//  for true output
if( (x+y == 21) && ((x*z)%7 == 1) && (y<=z) && (!(x>y)) && ((x<y) && (y<z)) && ((x>=y) || (y<z)) && (!(x%5==0 && y%5==0)) && ((x<y && z%11==0) || (x%10==0))){
     console.log( true  )
    ;
}
else{
    // console.log(false)
    
}

//  for false output

if(( (x< 10) && (y>11) && ((x+y+z)%3==1) && ((x>y) && (y<z))) !== 'true'){
 console.log(false);
}
else{
 console.log(true);
}


// 2. একটি জাভাস্ক্রিপ্ট প্রোগ্রাম লিখ যা যেকোনো ধনাত্মক সংখ্যা ইনপুট দিলে ১প্রিন্ট করবে,এবং শূন্য ইনপুট দিলে ০ প্রিন্ট করবে, অন্যতায় -১ প্রিন্ট করে। done

var positiveNumber = 1;
var negativeNumber = -3;
var zeroNumber = 0;
var prompt = prompt('type any number and show result');



if(prompt >= positiveNumber){
    console.log('its result will be 1');
}
else if(prompt >= zeroNumber){
    console.log('its result will be 0');
}
else{
    console.log('its result will be -1');
}

// 3. আমরা for লুপ ব্যাবহার করে ১ থেকে ১০ এর যোগফল বের করেছি। নিচের ৫টি  ধারা গুলোর যোগফল বের করার জন্য প্রোগ্রাম লিখ। done
// 1+2+3+.....50
// 1+3+5+...+29 ( প্রথম ২০টি পদ)
// 50 + 49 + 48 + 47 + …… ( প্রথম ১০টি পদ)
// 2 + 5 + 8 + 11 + 14 + …..   (প্রথম ১০টি পদ)
// 100 + 97 + 94 + 91 + ….  (0 এর চেয়ে বড় পর্যন্ত)

// for 1 (1+2+3+.....50)
var sum = 0;
for (let i = 1; i <= 50; i += 2) {
    sum = sum + i
    console.log(sum);
    
}
// for 2 (1+3+5+...+29 ( প্রথম ২০টি পদ))

var sum1 = 0;
for (let i = 1; i <= 20; i += 2) {
    sum1 = sum1 + i
    // console.log(i, sum1);
    
}
// for 2

var sum1 = 0;
for (let i = 1; i <= 20; i += 2) {
    sum1 = sum1 + i
    // console.log(i, sum1);
    
}
// for 3 (50 + 49 + 48 + 47 + …… ( প্রথম ১০টি পদ))

var sum2 = 0;
for (let i = 10; i >= 1; i-- ) {
    sum2 = sum2 + i
    console.log(i, sum2);
    
}
// for 4 (100 + 97 + 94 + 91 + ….  (0 এর চেয়ে বড় পর্যন্ত))

var sum3 = 0;
for (let i = 100; i >= 0; i -= 3) {
    sum3 = sum3 + i
    console.log(i, sum3);
    
}

// 4. একটি জাভাস্ক্রিপ্ট প্রোগ্রাম লিখুন যা ৩টি  পূর্ণসংখ্যা নেয়। এবং তাদের মধ্যে থেকে সবচেয়ে বড় পূর্ণসংখ্যা প্রিন্ট করুন।


var num1 = 1300;
var num2 = 320;
var num3 = 63;
if((num1 > num2) ){
     if(num2 > num3){
        console.log(num1);
    }
    else{
        console.log(num3);
    }
}
else{
    if(num2 > num3){
        console.log(num2);

    }
    else{
        console.log(num3);
    }
}



// 5. Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz" (এটির বাংলা নিজে নিজে ভালো করে বুঝে তারপর কোড লিখবে, প্রব্লেমটি খুবই সহজ তবে একটু বুঝে সল্ভ করবে ।)


for(let i = 1; i<= 100; i++){
    if(i % 3 === 0){
        console.log( i + "  "+ ' is divided by only 3'  + " "+ 'Fizz');

    }
    else if(i % 5 === 0) {
        console.log(i + "  "+ ' is divided by only 5' +" "+ 'Buzz');
    }
     if((i % 3 === 0) && (i % 5 === 0)){
        console.log( i + "  "+ ' is divided by both 3 and 5' +  " "+'FizzBuzz');
    }
    else{
        console.log('Nothing');
    }

}



