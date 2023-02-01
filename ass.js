/* [ ফাংশন নেম দিতে হবে seerToMon]: একটা ফাংশন এ প্যারামিটার হিসেবে নিবে সের। তারপর সেটাকে মন এ কনভার্ট করে কত মন হয় সেই সংখ্যা রিটার্ন করবে। শুধু সংখ্যাটা রিটার্ন করবে।
40 seer = 1 mon
*/
function seerToMon(seer){
    // error for string
    if(typeof seer !='number' ){
    return 'please,give a number.then check';
    }
    // error for less than 0 and equal
    else if(seer<=0){
    return 'please,give a positive integer'
    }
    // error end
    const mon = seer / 40 ;
    return mon;
    }
    const mySeer = 800 ;
    const mon = seerToMon(mySeer);
    console.log(mon);
    /* [ ফাংশন নেম দিতে হবে totalSales]: তিনটা প্যারামিটার লাগবে।
    ১ টি শার্টের দাম – ১০০ টাকা,১ টি প্যান্টের দাম – ২০০ টাকা ,১ টি জুতার দাম – ৫০০ টাকা ।
    এখন সে যদি বিভিন্ন সংখ্যার শার্ট, প্যান্ট বা জুতা বিক্রি করে তাহলে টোটাল কত বিক্রি হলো সেই সংখ্যা রিটার্ন করতে হবে। */
    /* shirtQuantity =5,pantQuantity=2,shoeQuantity =1*/
    function totalSales(shirtQuantity,pantQuantity,shoeQuantity){
    // error for string
    if(typeof shirtQuantity != 'number'){
    return false;
    }
    else if(shirtQuantity,pantQuantity,pantQuantity < 0){
    return 'please, give valid number';
    }
    // error end
    const priceOf1Shirt = 100;
    const priceOf1Pant = 200;
    const priceOf1Shoe =500;
    const totalPriceOfShirt = shirtQuantity * priceOf1Shirt;
    const totalPriceOfPant = pantQuantity * priceOf1Pant;
    const totalPriceOfShoe = shoeQuantity * priceOf1Shoe;
    const totalSales = totalPriceOfShirt + totalPriceOfPant + totalPriceOfShoe;
    return totalSales;
    }
    const hisTotalSales = totalSales(5,2,1);
    console.log(hisTotalSales);
    /* [ ফাংশন নেম দিতে হবে deliveryCost]: প্যারামিটার হিসাবে নিবে কয়টা টি-শার্ট ডেলিভারি করবে।
    যদি ১০০ বা তার কম টি-শার্ট পাঠাও তাহলে প্রত্যেকটা টিশার্ট এর জন্য খরচ ১০০ টাকা করে।
    যদি ১০০ এর বেশি কিন্তু ২০০ এর কম টি শার্ট পাঠাও। তাহলে প্রথম ১০০ টা টি-শার্ট এর প্রত্যেকটা টিশার্ট এর জন্য খরচ ১০০ টাকা করে দিতে হবে। আর ১০০ এর বেশি যেগুলা আছে সেগুলা প্রতিটার জন্য ৮০ টাকা করে দিতে হবে।
    যদি ২০০ এর বেশি টি-শার্ট পাঠাও। তাহলে প্রথম ১০০ টা টি-শার্ট এর প্রত্যেকটা টিশার্ট এর জন্য খরচ ১০০ টাকা করে দিতে হবে। আর ১০১ থেকে ২০০ পর্যন্ত যেগুলা আছে সেগুলা প্রতিটার জন্য ৮০ টাকা করে দিতে হবে। ২০০ এর বেশি যতগুলা আছে সেগুলার সবগুলা প্রতিটা ৫০ টাকা করে দিতে হবে।
    এখন আমি একটা প্যারামিটার দিবো। সেটা যেকোন সংখ্যা হতে পারে। সেই সংখ্যা অনুসারে তুমি ফাংশন থেকে রিটার্ন দিবে কতটাকা ডেলিভার খরচ হবে।
    আমার ইনপুট প্যারামিটার সংখ্যাটা ১০০ এর কম হতে পারে। ১০০ থেকে ২০০ এর মধ্যে হতে পারে। আবার ২০০ এর বেশিও হতে পারে। তাই সব কেইস ভালো করে টেস্ট করে নিবে। */
    function deliveryCost (tShirts){
    // error for string
    if(typeof tShirts != 'number'){
    return 'please,give correct number';
    }
    else if(tShirts < 0){
    return false;
    }
    // error end
    // miles = 230
    per1st100TShirts = 100;
    per2nd100TShirts = 80;
    perRestTShirts = 50;
    if(tShirts <= 100){
    const totalDeliveryCost = tShirts * per1st100TShirts;
    return totalDeliveryCost;
    }
    else if (tShirts <= 200){
    const first100TShirts = 100 * per1st100TShirts;
    const restTShirts = tShirts - 100;
    const second100TShirts = restTShirts * per2nd100TShirts;
    const totalDeliveryCost = first100TShirts + second100TShirts;
    return totalDeliveryCost;
    }
    else{
    const first100TShirts = 100 * per1st100TShirts;
    const second100TShirts = 100 * per2nd100TShirts;
    const restTShirts = tShirts - 200;
    const restDeliveryTShirts = restTShirts * perRestTShirts;
    const totalDeliveryCost = first100TShirts + second100TShirts + restDeliveryTShirts;
    return totalDeliveryCost;
    }
    }
    const totalCost = deliveryCost(230);
    console.log(totalCost);
    /*
    function of perfect friend in array and return string first 5 character names
    const myFriends = ['jui','Juthi','anika','ruji','mehenaj','afroja','monika','sharmin','raj','Rakhi', 'Shantona']; */
    function perfectFriend(names){
    // error for object
    if(typeof names != 'object'){
    return'please,input string not object and try';
    }
    // error for string
    else if(typeof names == 'string'){
    return 'please,input a string value';
    }
    // error end
    friendName =names[0];
    for(let i = 0; i<names.length; i ++){
    if(5 == names[i].length){
    friendName = names[i];
    break;
    }
    }
    return friendName;
    }
    const myFriends = ['jui','Juthi','anika','ruji','mehenaj','afroja','monika','sharmin','raj','Rakhi', 'Shantona'];
    const friend = perfectFriend(myFriends);
    console.log(friend);