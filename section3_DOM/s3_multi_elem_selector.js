// Multi-Element Selectors

// store every 'List Item' in an HTML collection (sort of like an array)
const items = document.getElementsByClassName('collection-item');

// change some attributes
items[0].style.color='red';
items[3].textContent = 'fourth entry'

// get every collection items that's unside of the 'ul' selected by querySelector
const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

// can also get via tag name instead of class name
let items2 = document.getElementsByTagName('li');
// change from HTML Collection to an array
items2 = Array.from(items2);
// now we can reverse it (and other array manipulations)
items2.reverse;


// change text of each 'List Item' to be index + 'Hello'
const items3 = document.querySelectorAll('ul.collection li.collection-item');
items3.forEach(function(item, index){
  item.textContent = `${index}: Hello`;
});

// change bg of every odd 'List Item' element to grey
liOdd = document.querySelectorAll('li:nth-child(odd)');
liOdd.forEach(function(li, index){
  li.style.background = '#ccc';
});

// change bg of every even to light blue... with conventional for loop
liEven = document.querySelectorAll('li:nth-child(even)');
for(let i = 0; i < liEven.length; i++){
  liEven[i].style.background = 'lightblue';
}
