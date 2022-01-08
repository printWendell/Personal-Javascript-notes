// factory functions - using functions to create objects

function createELf(name, weapon) {
  return {
    name,
    weapon,
    attack() {
      return `attacking with ${weapon}`;
    },
  };
}

const peter = createELf("Peter", "stones");
const sam = createELf("Sam", "fire");
console.log(peter.attack());
console.log(sam.attack());
