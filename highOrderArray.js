// for of loop 
// syntax 
// for (const iterator of object) {
    
// }

// using array
// const arr = [1,2,3,4,5];
// for (const num of arr) {
//     console.log(num);
// }


// using string

// const greeting = "Hello world";
// for (const greet of greeting) {
//     console.log(`Each char is ${greet}`);
// }


// for-of looop using object 

// const myObject = {
//     "game1":"nfs",
//     "game2":"spiderman",
// }

// for(const[key,value] of myObject){
//     console.log(key, value);
// }

// note: for-of cannot be used in object so we can use in for-in


// for-in-loop

// const myObject = {
//     js:"javascript",
//     cpp:"c++",
//     rb:"ruby",
//     swift:"swift by apple"
// }

// for(const key in myObject){
//     console.log(myObject[key]);
// }
// for(const key in myObject){
//     console.log(`${key} short is for ${myObject[key]}`);
// }


// using array in for-in loop 

// const programming = ["js","rb","py","java","cpp"];

// for (const key in programming) {
//    console.log(key);
// }
// for (const key in programming) {
//     console.log(programming[key]);
//  }


// for each loop
// const coding = ["js","rb","py","java","cpp"];

// coding.forEach(function(val){
//     console.log(val);
// })


// using arrow function

// coding.forEach((item)=>{
//     console.log(item);
// })

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })



// using array of object

const myCoding = [
    {
        languageName:"javascipt",
        languageFile:"JS"
    },
    {
        languageName:"java",
        languageFile:"Java"
    },
    {
        languageName:"python",
        languageFile:"py"
    },
]

myCoding.forEach((item)=>{
    console.log(item.languageFile);
})




