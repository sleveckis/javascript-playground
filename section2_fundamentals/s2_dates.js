let val;

const today = new Date();


const birthday = new Date('December 12, 1999');
const birthday2 = new Date('1999-12-12')
val = birthday2;

val = today.getMonth();
// months are zero-indexed for some godawful  reason

val = today.getDate();
// etc, etc, getDay(), getFullYear(), getHours(), getMinutes(), getSeconds(), getMilliseconds()

birthday.setMonth(10);
// etc, etc, setters for each getter above

console.log(birthday);
