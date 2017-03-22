var square = (x) => {
  var result = x * x;
  return result;
};

var square2 = (x) => x*x;  //don't need to return result

var user = {
  name: 'Brendan',
  sayHi: () =>{
      console.log(`Hi I'm ${this.name}`); //undefined, can use user.name
  },
  sayHiAlt () {
    console.log(`Hi I'm ${this.name}`);
  }
};

console.log(square(9));
console.log(square2(10));
user.sayHi();
user.sayHiAlt();
