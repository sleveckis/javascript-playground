/*
  Dom Selectors
*/

const taskTitle = document.getElementById('task-title');

// Change styling
taskTitle.style.background = '#333';
taskTitle.style.color = '#fff';
taskTitle.style.padding = '5px';

// Change content
taskTitle.innerHTML = '<span style = "color:red"> Task List </span>';

// document.querySelector()

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('h5'));

document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(4)').textContent = 'Howdy Howdy';

// note, normally that css in the qs paramter would select every odd element,
// but we only get one because qs is a single-element selector
document.querySelector('li:nth-child(odd)').style.background = '#ccc';


