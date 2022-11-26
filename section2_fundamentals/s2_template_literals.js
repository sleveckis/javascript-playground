/*
  Lecture 12: Template Literals
*/
const name2 = 'John';
const age2 = 30;
const job2 = 'Programmer';
const city2 = 'Miami';
let html;

// Without template strings
html = '<ul><li>Name: '+ name2 + '</li><li>Age: ' + age2 + '</li><li>Job ' + job2 + '</li><li>City: ' + city2 + '</li></ul>';

// With template strings (es6)      (marked by the backticks )
// Notice the ternary operator on line 22!
html = `
  <ul>
    <li> Name: ${name2}</li>
    <li> Age: ${age2}</li>
    <li> Job: ${job2}</li>
    <li> City: ${city2}</li>
    <li> ${2 + 2} </li>
    <li> ${age2 > 35? 'Yep, over 30' : 'Nope, under 30'} 
  </ul>
`










// ??? wtf is this
document.body.innerHTML = html;



console.log('-------------');