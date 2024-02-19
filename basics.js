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

const obj = {
  name: "vasi",
  age: 10,
};

// const nums = [1, 2, 3, 4];
// nums.__proto__ = obj;

// nums.push(5);
// console.log(nums.name, nums.age, nums.length);
// console.log(Array.isArray(obj));

// console.log(typeof nums);

const nums = [10, 20, 30, 40];
nums[100] = 100;
nums["name"] = "vasanth";
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
