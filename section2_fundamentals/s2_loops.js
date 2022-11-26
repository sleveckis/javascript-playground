// loops, lecture  19

/* 
  using continue in a for loop
*/
for (let i = 0; i < 10;i++){
  if (i === 2){
    console.log('Yep, it\'s two.');
    continue;
  }

  // because of the `continue`, this will not be printed when i is 2!
  console.log(`iterator is: ${i}`);
}

/*
  do while
*/
let i = 0;
do{
  console.log(`dowhile iterator is ${i}`);
  i++;
}

while(i < 5);

/*
  forEach
*/
const cars = ['Ford', 'Chevy', 'Toyota', 'Honda'];

// prints each car
cars.forEach(function(i){
  console.log(i);
});

// can also add up to 2 more parameters to print out index and keep a copy of the array in the loop
cars.forEach(function(i, index, carsCopy){
  console.log(`${index} : ${i}`);
  console.log(carsCopy)
});

/*
  map
*/
const users = [
  {id:1, name:'John'},
  {id:2, name:'Sarah'},
  {id:3, name:'Karen'}
];

// ids becomes an arry of the indexed id's
const ids = users.map(function(i){
  return i.id;
});

console.log(ids);


/*
  forIn 
*/
const user = {
  firstName: 'Jerry',
  lastName: 'Johnson',
  age: 40
}

// x is the key to each attribute to user
for(let x in user){
  console.log(`${x} : ${user[x]}`);
}
