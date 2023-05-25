// closure is a feature where an inner function has access to the outer function's scope(scope chain)
// the closure has three scope chains:
// -- its own
// -- access to the outer function's variables
// -- the global variables
/*
  If the inner function references a variable or method from the outer function does variables
  will not be garbage collected and instead remain on the memory heap for the inner function to access

  -- closures are also called lexical scoping
  -- closures can be memory efficient and allows encapsulation
*/

function a() {
  let grandpa = "grandpa";
  return function b() {
    let father = "father";
    return function c() {
      let son = "son";
      //   c still hass access to the grandpa and father variables,
      return `${grandpa} > ${father} > ${son}`;
    };
  };
}

const boo = (string) => {
  return (name) => {
    //   name2 function still has access to name variable due to closure
    return (name2) => console.log(`${string} ${name} and ${name2}`);
  };
};

boo("hi")("tim")("really");

// Exercise

function callMeMaybe() {
  const callMe = "Hi! I am now here";
  setTimeout(function () {
    console.log(callMe);
  }, 2000);
}

// callMeMaybe();

// ====================================================================================================================
// ====================================================================================================================
// memory efficient
function heavyDuty(index) {
  const bigArray = new Array(7000).fill("hi");
  console.log("created");
  return bigArray[index];
}

/*
  insead of using the function above which will recreate the bigarray everytime its called
  we can use closure like such
*/
function heavyDuty2() {
  const bigArray = new Array(7000).fill("hi");
  console.log("created again");
  return function (index) {
    return bigArray[index];
  };
}

// heavyDuty(688);
// heavyDuty(688);
// heavyDuty(688);
const getHeavyDuty = heavyDuty2();

// with getHeavyDuty we can now access the index without recreating bigArray everytime its called

// getHeavyDuty(688);
// getHeavyDuty(728);
// getHeavyDuty(98);

// ====================================================================================================================
// ====================================================================================================================
// Encapsulation

const makeNuclearButton = () => {
  let timeWithoutDestruction = 0;
  const passTime = () => timeWithoutDestruction++;
  const totalPeaceTime = () => timeWithoutDestruction;
  const launch = () => {
    timeWithoutDestruction = -1;
    return "boom";
  };
  setInterval(passTime, 1000);
  return {
    launch: launch,
    totalPeaceTime: totalPeaceTime,
  };
};

// const ohNo = makeNuclearButton();
// ohNo.totalPeaceTime();
// ohNo.launch();

let view;
function initialize() {
  view = "🗻";
  console.log("view has been set");
}

// with closures you can turn the function above into this

function initialize2() {
  let called = 0;
  return function () {
    if (called > 0) {
      return;
    } else {
      view = "🗻";
      called++;
      console.log("view has been set");
    }
  };
}

const startOnce = initialize2();
startOnce();
console.log(view);

// const array = [1, 2, 3, 4];
// for (var i = 0; i < array.length; i++) {
//   setTimeout(function () {
//     console.log("I am at index" + i);
//   }, 3000);
// }

/*
  function above returns 
  I am at index 4
  I am at index 4
  I am at index 4
  I am at index 4
*/

// to fix this simply replace var with let
// let allows us to use block scoping
const array = [1, 2, 3, 4];
for (let i = 0; i < array.length; i++) {
  setTimeout(function () {
    console.log("I am at index " + i);
  }, 3000);
}

// another way to fix it is using an iife
for (var i = 0; i < array.length; i++) {
  (function (closureI) {
    setTimeout(function () {
      console.log("#2. I am at index" + closureI);
    }, 3000);
  })(i);
}
