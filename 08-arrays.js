// arrays
// shallow and deep copy 
const myArr = [0,1,2,3,4,5];
// const heroes = ["shaktiman","spiderman"];

// another way of defining array 
// const myArr1 = new Array(1,2,3,4,5);
// console.log(myArr1);

// indexces of 

// console.log(myArr[2]);

// arrays method

// push method : add the value at the end 
//pop method : delete the last value
// myArr.push(7)
// myArr.push(8)
// myArr.pop()
// console.log(myArr);

// unshift method : add the value from start
// shift method : delete the value from start

// myArr.unshift(3)
// myArr.unshift(4)
// myArr.shift()
// console.log(myArr);

// includes method --> gives o/p in boolean operation

// console.log(myArr.includes(9));

// indexOf --> check the indices

// console.log(myArr.indexOf(3)); // or -1 if not present

// join method 

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// slice and splice method 

// concat method 
// const marvel_heros = ["thor","ironman","spiderman"];
// const dc_heores = ["superman","flash","batman"];

// const allHeroes = marvel_heros.concat(dc_heores);
// console.log(allHeroes);

// spread operator --> ...
// const marvel_heros = ["thor","ironman","spiderman"];
//  const dc_heores = ["superman","flash","batman"];

//  const allHeore = [...marvel_heros,...dc_heores]
//  console.log(allHeore);

// flat method

// const newArr3 = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
// const real_arr = newArr3.flat(Infinity);
// console.log(real_arr);


// isArray --> to check whether it is array or not
// console.log(Array.isArray("Ajay"));

// from --> converting to an array
// console.log(Array.from("Ajay"));

// let score1 = 100;
// let score2 = 200;
// let score3 = 300;
// console.log(Array.of(score1,score2,score3));
