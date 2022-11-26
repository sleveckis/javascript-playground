/*
  Arrow Functions
*/

// old way
const sayHello = function(){
  console.log('Hello, the old way')
}

// new way
const sayHelloNew = () =>{
  console.log('Hello, the new way')
}

// new way, shorter (one-line functions need no braces)
const sayHelloNewShort = () => console.log('Hello, the new way that\'s shorter');

// warning: need to wrap object literals in parenthesis with the one-line syntax
const sayHelloObject = () => ({msg : 'Hello'});

sayHello();
sayHelloNew();
sayHelloNewShort();
console.log(sayHelloObject());
console.log("------------------------------");

// arrow function w parameter
const sayName = msgName => console.log(`Hello there, ${msgName}`);

// with two parameters
const sayNames = (firstName, lastName) => console.log(`Hey, ${firstName} ${lastName}, nice work!`);

sayName("Stephen");
sayNames("John", "Jorman");
console.log("------------------------------");

const users = [
  'Nathan', 'John', 'William'
];
// old way of map function
const nameLengths = users.map(function(name){
  return name.length;
})

// new way
const nameLengthsNew = users.map((name) => {return name.length});

// even shorter
const nameLengthShortest = users.map(name => name.length);

console.log(nameLengths);
console.log(nameLengthsNew);
console.log(nameLengthShortest);
console.log("------------------------------");

