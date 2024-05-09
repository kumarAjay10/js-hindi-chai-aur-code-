// concatination

const name = "Ajay";
const repoCount = 50;


console.log(name + " "+ repoCount + "value");// this is old way

// String interpolation using backtik

// console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);
// console.log(`Hello my name is ${name.toUpperCase()} and my repocount is ${repoCount}`);

// console.log(typeof name);

const gameName = new String('Ajay kumar'); // open in browser and console

// index
// console.log(gameName[0]);


//prototype is object
// console.log(gameName.__proto__);

// length of string
// console.log(gameName.length);


// toUpperCase()
// console.log(gameName.toUpperCase());


// charAt
// console.log(gameName.charAt(2));

// indexOf
// console.log(gameName.indexOf('a'));

// Substring --> here we cannot use negative values. if we use start it will start from 0

// const newString = gameName.substring(0,4);
// console.log(newString);

// slice --> here we can negative values  

// const sliceString = gameName.slice(6,4);
// console.log(sliceString);


// trim --> trim the start and end whitespace

// const trimStringOne = "       Ajay      ";
// console.log(trimStringOne);
// console.log(trimStringOne.trim());


// replace -->
// const url = "https:Ajay.com/Ajay%20kumar";
// console.log(url.replace('%20','-'));

// includes --> to check values is there or not
// console.log(url.includes('Ajay'));