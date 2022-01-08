let dragon = {
  name: "Tanya",
  fire: true,
  fight() {
    return 5;
  },
  sing() {
    if (this.fire) {
      return `I am ${this.name}, the breather of fire`;
    }
  },
};

// console.log(dragon.sing());

let lizard = {
  name: "kiki",
  fight() {
    return 1;
  },
};

// to make inherit all of dragons properties and methods you can create a proto chain
// DO NOT use __proto__ to manually assign is bad for performance and there are different safer ways to inherit
// properties from objects
lizard.__proto__ = dragon;
for (let prop in lizard) {
  // only log what lizard has as its own property
  if (lizard.hasOwnProperty(prop)) {
    console.log(prop);
  }
}

let human = {
  mortal: true,
};

let socrates = Object.create(human);
socrates.age = 70;
console.log(socrates);
// we ceaated a prototype chain up to human. so socrates has all the properties of the human object
console.log(socrates.mortal);
console.log(human.isPrototypeOf(socrates));

// Exercise - extend the functionality of a built in object
// NEVER ACTUALLY DO THESE IN REAL PROJECTS
// #1
// Date object => to have new method .lastYear() which shows you the last year 'YYYY' format
// new Date("1900-10-10").lastYear();

Date.prototype.lastYear = function () {
  return this.getFullYear() - 1;
};

console.log(new Date("1900-10-10").lastYear());
console.log(new Date().lastYear());

// Bonus
// Motify .map() to print '🗺' at the end of each item.
// console.log([1, 2, 3].map())
// ---1🗺, 2🗺, 3🗺

Array.prototype.map = function () {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(this[i] + "🗺");
  }
  return arr;
};

console.log([1, 2, 3].map());
