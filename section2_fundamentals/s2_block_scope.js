// block scope with let and const, lecture 21

var a = 1;
let b = 2;
const c = 3;

console.log('Global Scope', a, b, c)

function test(){
  var a = 4;
  var b = 5;
  var c = 6;
  console.log('Function Scope', a, b, c)
}

if(true){
  var a = 7;
  let b = 8;
  const c = 9;
}

test();
console.log('Global Scope', a, b, c)

// TLDR; 'var' is a global variable. whack!