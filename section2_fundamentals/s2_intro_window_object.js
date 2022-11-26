// intro to the window object, lecture 20
console.log('intro_window_objects');

/*
  prompt() and alert()
*/

/*
const input = prompt();
alert(input);
*/

/*
  confirm()
*/
/*
if(confirm('Are you sure')){
  alert('You did it');
} else {
  alert('You did not do it');
}
*/
// NOTE: the above are kind of 90's... instead use the DOM + bootstrap

// Window stats
let val;
val = window.outerHeight;
// etc, etc: outerWidth, innerHeight, innerWidth

/*
  Scroll Points
  where the scroller for the window is (not enabled in our index.html by default)
*/
val = window.scrollY
val = window.scrollX

val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;         // the query string, everything after the '?' in a url


/* 
  Redirect
*/
/*
window.location.href = 'http://google.com';
*/


/*
  Reload
*/
/*
window.location.reload()              //relaods the page (over, over if in global scope)
*/

/*
  History
  go back x amount of pages in the user's history

val = window.history.go(-x);
*/

/*
  Navigator
*/
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.platform;
val = window.navigator.language;


console.log(val);
