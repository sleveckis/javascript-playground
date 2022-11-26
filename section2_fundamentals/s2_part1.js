/*
  Notes and things to remember from the first session doing Modern JavaScript From The Beginning
*/

//Lesson 6
console.time('TimerName');
  console.log('Hey')
  console.log('Hey')
  console.log('Hey')
  console.log('Hey')
  console.log('Hey')
console.timeEnd('TimerName');

// Lecture 7
// var, let, const

var name = 'John Doe';
console.log(name);

// let
let nameOne;
nameOne = 'Stephen Falcon';
console.log(nameOne);

// const
const nameTwo = 'Timmy Permanent';
const person = {
  name: 'Sara',
  age: 30
}
console.log(person);

// Can mutate attributes of constant objects
person.name = "Gunther"
person.age = 54;
console.log(person);

// Can mutate arrays just not "directly"
const arr = [1, 2, 3, 4, 5];
console.log(arr);
arr.push(5400);
console.log(arr);

/*
 Lecture 8

 2 data types: primitive and reference
 Primitive: stored on the stack, stored in the location the var accesses
 Reference: Accessed by reference, stored on the heap, is a pointer to a location in memory
*/

// primitive types: strings, numbers (number type is both float and int in JS), null, undefined, and symbol
// string
const nameThree = 'Johnny Dingus';
//number
const age = 45;
// Boolean
const hasKids = false;
//Null
const car = null;
// Undefined
let test1;
//Symbol
const sym = Symbol();

console.log("-------------");
console.log(typeof nameThree);
console.log(typeof age);
console.log(typeof hasKids);
console.log(typeof car);
//NOTE: null comes back as type 'object' because of some old javascript lore/bugs
console.log(typeof test1);
console.log(typeof sym);
console.log("-------------");

//reference type: arrays, object literals, functions, dates, anything else...

// array
const hobbies = ['music', 'running'];

// Object literal
const address = {
  city: 'Boston',
  state: 'MA', 
}

//date 
const today = new Date();

console.log(typeof address);
console.log(typeof hobbies);
console.log(typeof today);
// NOTE: anything that's a reference data type will be of type 'object'
console.log("-------------");

/*
Lecture 9: Type Conversion
Turning a variable from one data type to another
For example, if you're getting input from a form, you're going to want to be able to 
turn that into a number so you can actually process it in meaningful ways
*/

let value;
// String()
value = String(5333);
console.log(typeof value);
//
value = String(true);
console.log(typeof value);
// date to string
value = String(new Date());
console.log(typeof value);
// array to string
value = String([1,  2, 3 ]);

console.log(value);
console.log(typeof value);
console.log(value.length);
console.log("-------------");

// toString()
value = (5).toString();
value = true.toString();
console.log(value);
console.log(typeof value);
console.log("-------------");

// Number()
value = Number('5');
value = Number(true);
value = Number(null);
console.log(value);
console.log(typeof value);
console.log("-------------");

// ParseInt/Float 
value = parseInt('100');
console.log(value);
value = parseFloat('100.31');
console.log(value);
console.log("-------------");

// Type Coersion (implicit type changing)
const val1 = '5';
const val2 = 6;
// string concatonation
console.log(val1 + val2);
// vs actually adding 5 plus 6
console.log(Number(val1) + val2);

/*
  Lecture 10: Math Object 
*/

val = Math.PI;
val = Math.E;
val = Math.ceil(2.4);
// etc, etc, as follows
// .ceil, .floor, .sqrt, .abs, .pw, .min, .max, .random

// random float between 0 and 1
val = Math.random();
console.log(val);
let maxNum = 20; // the largest random number we want 
// random INTEGER between 1  and maxNum
val = Math.floor((Math.random() * maxNum) + 1);
console.log(val);
console.log('-------------');

/* 
  Lecture 11: String Method and Concatonation
*/

const firstName = 'William';
const lastName = 'Johnson';
const age1 = 21;

// Concatenation 
val = firstName + ' ' + lastName;
val = 'Hey my name is ' + firstName + ' and I am ' + age1;
val = firstName.concat(' ', lastName);

// Append
val = firstName;
val += ' ';
val += lastName;

// Escaping
val = 'That\'s awesome, I can\'t wait';

// Length
val = firstName.length; // Note that length is a property, not a function (no '()' needed)


// Case Change
val = firstName.toUpperCase();
val = firstName.toLowerCase();

// Indexing
val = firstName.indexOf('i');
console.log('The first i in ', firstName, 'is at position ', val);
val = firstName.lastIndexOf('l');
console.log('The last l is at position ', val);

// substring()
val = firstName.substring(0, 4);
console.log(val);

// slice()
val = firstName.slice(0, 4);
console.log(val);
val = firstName.slice(-3);
console.log(val);

// split()
const str1 = 'Hey there my name is Bradley Milton';
// Just enter the delimiter in, and the funciton returns an array 
val = str1.split(' ');
console.log(val);

// replace()
val = str1.replace('Hey there', 'Howdy partner')
console.log(val);

// includes
val = str1.includes('Hey there');
console.log(val);
val = str1.includes('fool');
console.log(val);
console.log('-------------');