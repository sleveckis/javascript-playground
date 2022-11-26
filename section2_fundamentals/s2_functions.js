
function greet(firstName = 'John', lastName = 'Doe'){
  return 'Name is ' + firstName + ' ' + lastName;
};

console.log(greet());

// why assign it to a const...?
const square = function(x=3){
  return x*x;

};

// they can be named too, if u assign a funciton to a constant
// not sure what this is actually called...
const square1 = function thisOneIsNamed(){

};

console.log(square());
console.log(typeof square());

// immideatly invokable function expressions - IIFEs
(function(){
  console.log('IIFE Ran...');
})();

// with parameters
(function(playerName){
  console.log(`${playerName} is my IIFE name`);
})('Johnathan Waters');


/*
  Property Methods
*/

const todo = {
  add: function(){
    console.log('Add todo...');
  },
  edit: function(id){
    console.log(`Edit todo ${id}`);
  }
}

// can also add methods to objects like so
todo.delete = function(){
  console.log('Delete todo...')
}


todo.add();
todo.edit(33);
todo.delete();