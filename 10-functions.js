// function
// function variableName(){

// }

// example 

// function sayMyName(){  // parmenters
//     console.log('A');
//     console.log('J');
//     console.log('A');
//     console.log('y');
// }
// sayMyName()  // argument

// function addTwoNUmbers(num1 , num2){

// console.log(num1 + num2);
// }

// addTwoNUmbers();// NaN

// function addTwoNUmbers(num1 , num2){

//     console.log(num1 + num2);
//     }
    
//     addTwoNUmbers(3,5);// (3,"4");-->34  (3,"a");--> 3a (3,null); -->3


// function addTwoNUmbers(num1 , num2){
//     let result = num1 + num2;
//     return result
// }
// const result = addTwoNUmbers(3,5);


// function addTwoNUmbers(num1 , num2){
//     let result = num1 + num2;
//     return result
// }
// const result = addTwoNUmbers(3,5);
// console.log(result);


// function addTwoNUmbers(num1 , num2){
//     let result = num1 + num2;
//     return result
// }

// console.log(addTwoNUmbers(3,5));


// function addTwoNUmbers(num1 , num2){
//     return num1 + num2;
// }

// console.log(addTwoNUmbers(3,5));


// function loginUserMessage(username){
//     return (`${username} just logged in` )
// }

// console.log(loginUserMessage("Ajay"));


// function loginUserMessage(username){
//     return (`${username} just logged in` )
// }

// console.log(loginUserMessage());  // undefined


// function calculateCartPrice(num1){
//     return num1
// }
// console.log(calculateCartPrice(200,300,400));


// using rest operator
// function calculateCartPrice(...num1){
//     return num1
// }
// console.log(calculateCartPrice(200,300,400));

// function calculateCartPrice(val1,val2,...num1){
//     return num1
// }
// console.log(calculateCartPrice(200,300,400,500,700,900));


// using object 

// const user ={
//     username: "Ajay",
//     price:49
// }

// function handleObject(anyObject){
//     console.log(`username is ${anyObject.username} and price is ${anyObject.price}}`);
// }

// handleObject(user);

// or 
// function handleObject(anyObject){
//     console.log(`username is ${anyObject.username} and price is ${anyObject.price}}`);
// }

// handleObject({
//     username:"sam",
//     price:899
// });


// using Array
// let newArray = [200,400,600] ;

// function returnSecondValue(getArray){
//     return getArray[1]
// }
// console.log(returnSecondValue(newArray));

// or 
// function returnSecondValue(getArray){
//     return getArray[1]
// }
// console.log(returnSecondValue([200,400,600]));