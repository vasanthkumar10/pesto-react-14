// JavaScript -> scripting lang, runs on browser, synchronous & single threaded
// JIT compilation

// basics
// let vs var
// let -> block scope
// var -> function scope -> redefined -> hoisted
// function declaration vs function expression

// ways to create object

// 1. object literal
// 2. factory pattern -> takes params and returns obj

// function createPerson(name, age) {
//   return {
//     name,
//     age,
//     display: function () {
//       console.log(this.name, this.age);
//     },
//   };
// }

// const person = createPerson("virat", 36);
// const person2 = createPerson("dhoni", 46);
// const person3 = createPerson("sachin", 56);

// console.log(person);
// console.log(person2);
// console.log(person3);

// class -> constructor

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   display() {
//     console.log(this.name, this.age);
//   }
// }

// const person = new Person("virat", 36);
// const person2 = new Person("dhoni", 46);
// const person3 = new Person("sachin", 56);

// console.log(person);
// console.log("=".repeat(50));
// console.log(person2);
// console.log("=".repeat(50));
// console.log(person3);

// person.display();

// (function () {
//   function demo() {
//     console.log(this);
//   }

//   demo();
// })();

// Immediately Invoked Fn Expression -> IIFE

// If my parent is a fn -> this -> global object
// function demo() {
//   console.log(this);
// }

// demo();

// const obj = {
//   name: "vasi",
//   age: 10,
//   display: function () {
//     function inner() {
//       console.log(this.age);
//     }

//     inner();
//   },
// };

// const obj = {
//   name: "vasi",
//   age: 10,
//   display: function () {
//     const inner = () => {
//       console.log(this); // arrow fn -> this -> parent/ancestor obj(except global obj)
//     };

//     inner();
//   },
// };

// const inner = () => {
//   console.log(this);
// };

// inner();

// CLOSURE

// const nums = [1, 2, 3, 4];

// console.log(typeof nums);

// prototype -> parent

// const obj = {
//   name: "vasi",
//   age: 10,
// };

// const nums = [1, 2, 3, 4];
// nums.__proto__ = obj;

// nums.push(5);
// console.log(nums.name, nums.age, nums.length);
// console.log(Array.isArray(obj));

// console.log(typeof nums);

// const nums = [10, 20, 30, 40];
// nums[100] = 100;
// nums["name"] = "vasanth";
// console.log(nums, nums.length);

// for (let i = 0; i < nums.length; i++) {
//   console.log(nums[i]);
// }

// for (let data of nums) {
//   console.log(data);
// }

// for (let key in nums) {
//   console.log(`${key} -> ${nums[key]}`);
// }

// React -> view layer (library), faster,
// SPA -> Single Page applications
// npx create-react-app .

// const vasanth = {
//   name: "vasanth",
//   age: 10,
// };

// const suresh = {
//   name: "suresh",
//   age: 20,
// };

// function display(city, country) {
//   console.log(
//     `My name is ${this.name} and my age is ${this.age}. I'm from ${city}, ${country}`
//   );
// }

// function borrowing methods
// display.call(vasanth, "chennai", "India");
// display.call(suresh, "new york", "USA");

// display.apply(vasanth, ["chennai", "India"]);

// const vasanthData = display.bind(vasanth, "chennai", "India");
// vasanthData();

// function parentFn() {
//   let count = 0;
//   return function () {
//     count += 1;
//     if (count % 3 == 0) console.log("display");
//   };
// }

// const display = parentFn();

// display();
// display();
// display();

// function parentFn() {
//   let fname = "vasi";
//   let age = 10;

//   return function () {
//     console.log("child fn", fname);
//   };
// }

// const child = parentFn();

// child();

// function useState(initialValue) {
//   const state = initialValue;

//   function setFn(newState) {
//     state = newState;
//     // trigger re-rendering process
//   }

//   return [state, setFn];
// }

// demoPromise();

// console.log("vasi");

// setTimeout(() => {
//   console.log(1);
// }, 2000);

// console.log("kumar");

// setTimeout(() => {
//   console.log(2);
// }, 1000);

// function demo() {
//   console.log("demo");
// }

// setTimeout(() => {
//   console.log(3);
// }, 500);

// console.log(4);

// demo();

// function demoPromise() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log("promise");
//       res();
//     }, 1000);
//   });
// }

// console.log(console.log("vasanth"));

// if (10 > 5 && console.log("vasanth")) {
//   console.log("if");
// } else {
//   console.log("else");
// }

// const isValid = 10 > 5 || "vasanth";
// console.log(isValid);

// const sum = ["1", "2", "3"].reduce((acc, curr) => {
//   console.log(acc, curr);
//   return acc + curr;
// });
// console.log(sum);

Array.prototype.myReduce = function (callback, initialValue) {
  if (initialValue) {
    for (let i = 0; i < this.length; i++) {
      initialValue = callback(initialValue, this[i]);
    }
  } else {
    initialValue = this[0];
    for (let i = 1; i < this.length; i++) {
      initialValue = callback(initialValue, this[i]);
    }
  }

  return initialValue;
};

const sum = [1, 2, 3].myReduce((acc, curr) => {
  console.log(acc, curr);
  return acc + curr;
}, 10);
console.log(sum);
