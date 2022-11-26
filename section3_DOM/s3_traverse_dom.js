let val;

const list = document.querySelector('ul.collection');

const listItem = document.querySelector('li.colllection-item:first-child');

// returns the text nodes (line breaks) + the List Item li nodes
val = list.childNodes;

// returns just the li List Item notes
val = list.children;

//
val = list.childNodes[1].nodeName;

console.log(val);

