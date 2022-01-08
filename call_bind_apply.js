/*
    Call
    -- call method invokes(calls) a function 
    -- every time a function is called the 'call' method is used to invoke the function under the hood
    -- a.call() is the same as a.()

    Apply
    -- does the same thing as the 'call' method, but the parameters must be in an array

    Bind
    -- returns a new function with a certain conext and parameters


*/

function a() {
  console.log("hi");
}

// a.call();
// a();

const wizard = {
  name: "Merlin",
  health: 50,
  heal() {
    return (this.health = 100);
  },
};

const archer = {
  name: "Robin Hood",
  health: 30,
};

/*
    We can use the call and apply method to allow objects to borrow other object's methods
*/
console.log("1-1", archer);
wizard.heal.call(archer);
console.log("1-2", archer);

// archer 'borrows' heal method from wizard

const wizard2 = {
  name: "Gandalf",
  health: 50,
  heal(num1, num2) {
    return (this.health += num1 + num2);
  },
};

const archer2 = {
  name: "Legolas",
  health: 30,
};

// 'call' can even take parameters
console.log("2-1", archer2);
wizard2.heal.call(archer2, 50, 30);
console.log("2-2", archer2);

// you can do the same thing with apply

const wizard3 = {
  name: "Scarlett Witch",
  health: 50,
  heal(num1, num2) {
    return (this.health += num1 + num2);
  },
};

const archer3 = {
  name: "Hawkeye",
  health: 30,
};

// 'apply' takes in array of parameters unlike 'call
console.log("3-1", archer3);
wizard2.heal.apply(archer3, [100, 30]);
console.log("3-2", archer3);

// you can do the same thing with apply

const wizard4 = {
  name: "Dumbledore",
  health: 50,
  heal(num1, num2) {
    return (this.health += num1 + num2);
  },
};

const archer4 = {
  name: "Random guy with a bow",
  health: 30,
};

// bind doesnt run the function, it returns a new one. It stores the 'this' or the function borrowing for later use
console.log("4-1", archer4);
const healArhcer = wizard4.heal.bind(archer4, 100, 30);
healArhcer();
console.log("4-2", archer4);

// Exercise, using the methods above find the max number of array

const array = [1, 2, 3];

// in this case, the 'this' keyword doesn't matter!
function getMaxNumber(arr) {
  return Math.max.apply(null, arr);
}

getMaxNumber(array);

// =======================================================================================================================================
// =======================================================================================================================================

// Function currying- reusing functions by takng one argument and returning a function that takes the next argument

function multiply(a, b) {
  return a * b;
}

let multiplyByTwo = multiply.bind(this, 2);
let multiplyByTen = multiply.bind(this, 10);
console.log(multiplyByTwo(4));
console.log(multiplyByTen(4));
