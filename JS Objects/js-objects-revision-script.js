// console.log("Javascript Objects Revision");

// Object Declaration DONE
// Accessing properties of objects DONE
// Object methods and their use case DONE
// Objects properties and methods DONE
// Constructor functions and Iterables DONE
// this keyword DONE
// call() apply() functions DONE
// Questions

// CRUD

// const obj1 = {
//   key1: val1,
//   key2: val2,
// };

// const obj2 = {};
// const obj3 = new Object();

// const person = {
//   age: 26,
//   name: "jay",
//   gender: "male",
// };

// const divyansh = {
//   lastName: "singh",
//   gender: "male",
//   role: "SDE",
//   age: 23,
// };

// const lastNameKey = "lastName";

// console.log(divyansh.lastName); // DOT Notation
// console.log(divyansh["lastName"]); // Bracket Notation
// console.log(divyansh[lastNameKey]); // Bracket Notation
// console.log(divyansh.someRandomFn());

// divyansh.lastName = "Singh"; // Shubham - DOT Notation
// divyansh["lastName"] = "Singh"; //   Bracket Notation - 01
// divyansh[lastNameKey] = "Singh"; //   Bracket Notation - 02

// divyansh.orgName = "Razorpay";

// person.divyansh = divyansh;

// delete divyansh.role; // DOT Notation
// delete divyansh["role"]; //Bracket Notation
// delete divyansh.someRandomFn; // DOT Notation

// Destructuring an object
// const { role, gender, orgName: organization } = divyansh;
// console.log(role, gender, organization);

// console.log(divyansh);

// Object Methods
//  01 : Object.assign()
// const divyansh = {
//   lastName: "singh",
//   gender: "male",
//   role: "SDE",
//   age: 23,
//   favSnacks: {
//     momos: "fried",
//     paniPuri: "spicy",
//   },
// };

// Shallow Copy
// const copiedDivyansh = divyansh;
// const copiedDivyansh = Object.assign(divyansh);

// Aliases

// copiedDivyansh.lastName = "Singhania";

// console.log(divyansh);
// console.log(copiedDivyansh);

// const copiedDivyansh = Object.assign({}, divyansh);
// copiedDivyansh.lastName = "Singhania";
// copiedDivyansh.favSnacks.momos = "steamed";

// console.log(divyansh);
// console.log(copiedDivyansh);

// Is copiedDivyansh deep copy of original object named divyansh ? Yes/No - NO

// const target = {
//   nobita: "doraemon",
//   tom: "oggy",
// };

// const source = {
//   tom: "jerry",
//   bruno: "mars",
// };

// const newObject = Object.assign(target, source);
// console.log(newObject);
// console.log(target);
// console.log(source);

// Object.entries(parameter/argument) : Returns an array of given objects string keyed property key value pairs.
// const divyansh = {
//   lastName: "singh",
//   gender: "male",
//   role: "SDE",
//   age: 23,
//   favSnacks: {
//     momos: "fried",
//     paniPuri: "spicy",
//   },
// };

// const someObject = { key1: "val1", key2: 23 };

// console.log(Object.entries(someObject)); //WAIT

// Object.freeze()
// const stateCodes = {
//   karnataka: "KA",
//   rajasthan: "RJ",
// };

// Object.freeze(stateCodes);

// stateCodes.karnataka = "xyz";

// console.log(stateCodes);

// Object.keys()
// const stateCodes = {
//   karnataka: "KA",
//   rajasthan: "RJ",
// };

// const divyansh = {
//   lastName: "singh",
//   gender: "male",
//   role: "SDE",
//   age: 23,
//   favSnacks: {
//     momos: "fried",
//     paniPuri: "spicy",
//   },
// };

// console.log(Object.keys(divyansh));

// Object.values()
// const divyansh = {
//   lastName: "singh",
//   gender: "male",
//   role: "SDE",
//   age: 23,
//   favSnacks: {
//     momos: "fried",
//     paniPuri: "spicy",
//   },
// };

// console.log(Object.values(divyansh));

// Copying the objects : Shallow Copy & Deep Copy
// using spread operator - Shallow Copy
// using Object.assign() - Shallow Copy
// using JSON.stringify() and JSON.parse() - Deep copy

// const movie = {
//   name: "Suryavansham",
//   channel: "Set Max",
//   rating: {
//     imdb: 1,
//     rottenTomatoes: 2,
//   },
// };

// const arr = [1, 2, 3, 4];

// const copy1 = movie;
// const copy2 = Object.assign(movie);
// const copy3 = Object.assign({}, movie);
// const spreadMovieCopy = { ...movie };
// const copyArr = [ ...arr ];

// console.log(JSON.stringify(movie));

// const deepCopy = JSON.parse(JSON.stringify(movie));

// deepCopy.channel = "setmax";
// deepCopy.rating.imdb = 5;

// console.log(movie);
// console.log(deepCopy);

// HOMEWORK
// const a = { b: 1, c: 2 };
// const e = a;
// e.a = a;
// console.log(e);

// const blueprintObject = {
//   name: "Suryavansham",
//   channel: "Set Max",
//   rating: {
//     imdb: 6.3,
//     mouthShut: 4.1,
//     timesOfIndia: 4,
//   },
// };

// PascalCase: ConstructorFunction;
// SnakeCase: constructor_function;
// CamelCase: constructorFunction;

// function ConstructorFunction(
//   name,
//   channel,
//   imdbRating,
//   mouthShutRating,
//   timesOfIndiaRating
// ) {
//   return {
//     name,
//     channel,
//     rating: {
//       imdb: imdbRating,
//       mouthShut: mouthShutRating,
//       timesOfIndia: timesOfIndiaRating,
//     },
//   };
// }

// function fnname(
//   name,
//   channel,
//   imdbRating,
//   mouthShutRating,
//   timesOfIndiaRating
// ) {
//   return {
//     name,
//     channel,
//     rating: {
//       imdb: imdbRating,
//       mouthShut: mouthShutRating,
//       timesOfIndia: timesOfIndiaRating,
//     },
//   };
// }

// const movieObject1 = fnname("Suryavansham1", "Set Max", 6.3, 4.1, 4);

// const movieObject2 = fnname("Suryavansham", "Set Max", 6.3, 4.1, 4);

// const movieObject1 = new ConstructorFunction(
//   "Suryavansham1",
//   "Set Max",
//   6.3,
//   4.1,
//   4
// );

// const movieObject2 = new ConstructorFunction(
//   "Suryavansham",
//   "Set Max",
//   6.3,
//   4.1,
//   4
// );

// console.log(movieObject1);
// console.log(movieObject2);

// Iterables
// for...of DONE
// for...in DONE

// const blueprintObject = {
//   name: "Suryavansham",
//   channel: "Set Max",
// };

// const arr = [1, 2, 3];
// const [a, b, c] = arr;
// console.log(a);

// console.log(Object.entries(blueprintObject));

// for (let [key, value] of Object.entries(blueprintObject)) {
//   console.log("KEY -> ", key, " : VALUE -> ", value);
// }

// console.log(Object.keys(blueprintObject));
// for (let key of Object.keys(blueprintObject)) {
//   console.log("KEY -> ", key, " : VALUE -> ", blueprintObject[key]);
// }

// for (const key of Object.getOwnPropertyNames(blueprintObject)) {
//   console.log("KEY -> ", key, " : VALUE -> ", blueprintObject[key]);
// }

// for...in iterable
// const blueprintObject = {
//   name: "Suryavansham",
//   channel: "Set Max",
// };

// for (let key in blueprintObject) {
//   console.log("KEY -> ", key, " : VALUE -> ", blueprintObject[key]);
// }

// this keyword
// const blueprintObject = {
//   name: "Suryavansham",
//   channel: "Set Max",
//   fn: function getterFn() {
//     console.log(
//       this.name,
//       "used to come on the TV channel named ",
//       this.channel
//     );
//   },
// };

// blueprintObject.fn();

// call() and apply() functions
// apply()
// const movieObject = {
//   name: "Suryavansham",
//   channel: "Set Max",
//   fn: function randomFunction(param1, param2) {
//     return (
//       this.name +
//       " used to come on the TV channel named " +
//       this.channel +
//       param1 +
//       param2
//     );
//   },
// };

// const movieObject2 = {
//   name: "Tarzan",
//   channel: "Zee Cinema",
// };

// console.log(movieObject.fn.apply(movieObject2, [" Hehe ", " Haha "]));
// console.log(movieObject.fn.call(movieObject2, " Hehe ", " Haha "));

// console.log(movieObject.fn(" Hehe ", " Haha "));

// Given an array of size n, find the majority element. The majority element is the element that appears more than floor(n/2) times.
// You may assume that the array is non-empty and the majority element always exist in the array. Example :
// Input : [2, 1, 2]
// Return : 2
// which occurs 2 times which is greater than 1 i.e floor(3/2).

// const n = 6;
// const randomArray = Array.from({ length: n }, () =>
//   Math.floor(Math.random() * n)
// );
// const randomArray = [1, 2, -1, -1, -1, -1];
// console.log("randomArray : ", randomArray);
// const floorVal = Math.floor(n / 2);
// let ans;

// const map = Array(n).fill(0);

// for (let ele of randomArray) {
//   map[ele] += 1;
//   console.log(map);
//   if (map[ele] > floorVal) {
//     ans = ele;
//     break;
//   }
// }

// console.log(ans);

// const map = {};
// for (let ele of randomArray) {
//   if (map[ele]) map[ele] += 1;
//   else map[ele] = 1;
// }

// console.log(map);
// console.log(Object.entries(map));

// for (let [key, value] of Object.entries(map)) {
//   if (value > floorVal) {
//     ans = key;
//     break;
//   }
// }

// console.log(ans);

// const randomArray = [1, 2, -1, -1, -1, -1];
// map = {
//   1: 1,
//   2: 1,
//   "-1": 4,
// };
