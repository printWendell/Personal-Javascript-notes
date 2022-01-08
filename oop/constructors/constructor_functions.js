// Constructor Functions - uses 'new' keyword

// All construtctor functions should start with a capital letter(industry practice)
function Elf(name, weapon) {
  // the only way to add properties is to use the 'this' keyword
  // var a = 5 will not work
  this.name = name;
  this.weapon = weapon;
}

// to add methods to the object
// -- dont use arrow functions becasue they are lexically scoped
// -- if your use it, it will point to the global object, not who calls it
Elf.prototype.attack = function () {
  return `attack with ${this.weapon}`;
};

// without the 'new' keyword you are not creating a new object
const peter = new Elf("Peter", "stones");
console.log(peter.name);
console.log(peter.attack());
const sam = new Elf("Sam", "fire");
console.log(sam.name);
console.log(sam.attack());
