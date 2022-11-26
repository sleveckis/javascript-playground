const color = 'maroon';

const name = 'George'

const age =  15;

if(age > 0 && age < 18){
  console.log(`${name} is a minor`);
}

// easier, with ternary operator

console.log(age > 0 && age < 18  ? 'minor' : 'not minor');