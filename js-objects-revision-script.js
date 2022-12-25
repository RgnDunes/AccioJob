// console.log("Javascript Objects Revision");

// Object Declaration DONE
// Accessing properties of objects DONE
// Object methods and their use case
// Objects properties and methods DONE
// Constructor functions and Iterables
// this keyword
// call() apply() functions

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

Object.keys() returns an array with the string version of the keys
present in the top layer in the object that is passed as parameter or argument in the keys method.
