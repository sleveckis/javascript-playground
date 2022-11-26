const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 30,
  email: 'steve@aol.com',
  hobbies: ['music,', 'sports'],
  address: {
    city: 'Miami',
    state: 'FL'
  },
  getBirthYear: function(){
    return 2022 - this.age;
  }

}

// some examples of accesssing attributes
console.log(person.getBirthYear());
console.log(person.hobbies[1]);




