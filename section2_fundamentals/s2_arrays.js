// can use normal syntax or array constructor
const arr = [43, 56, 33, 23, 44, 36, 5];
const arr2 = new Array(22, 34, 81, 23, 94, 12);

// arrays can be mixed types... jeez...
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:2}, new Date()];

let val;

val = arr.length;
val = Array.isArray(arr);
console.log(val);

// indexOf    returns index of paramter
val = arr.indexOf(44);

// add on to end
arr.push(250);
//add on to front
arr.unshift(250);

// remove from end (pop)
arr.pop()
// remove from front
arr.shift();

// splice(x,y)
// remove section from array at position x to position y
arr.splice(1,3);          // removes elements from 1st to 3rd position (zero-indexed)

// reverse
arr.reverse();

// concat
val = arr.concat(arr2);
console.log(val);

// sort
val2 = val.sort()       // will only sort by the FIRST DIGIT of each element... not idea
console.log(val2);

// sort w compare function
val3 = val.sort(function(x, y){
  return x - y;                     // idk what the fuck this is but it works
})
console.log(val3);

// Find
function under50(num){
  return num < 50;
}

val4 = val.find(under50);

console.log(val4);
