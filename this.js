// --'this' is the object that the function is a propery of

// =======================================================================================================================================
// =======================================================================================================================================

function a() {
  console.log(this);
}

// --logs the global object -- global.a()
// a();

function b() {
  "use strict";
  console.log(this);
}

// --logs undefined, 'use strict' tag avoids the mistakes of the original desings of javascript
// b();

// =======================================================================================================================================
// =======================================================================================================================================

let obj = {
  name: "Billy",
  sing() {
    return "lalala " + this.name;
  },
  singAgain() {
    return this.sing() + "!!!";
  },
};

// --'this' is the property of the obj object, meaning it can give methods access to their object
// --you can execute the same code for multiple objects
// console.log(obj.sing());
// console.log(obj.singAgain());

// =======================================================================================================================================
// =======================================================================================================================================

function importantPerson() {
  console.log(this.name);
}
let name = "Sunny";
let importantObj = {
  name: "Cassy",
  importantPerson: importantPerson,
};
let importantObj2 = {
  name: "Jacob",
  importantPerson: importantPerson,
};

// --logs undefined, 'this' refers to the window.
// importantPerson();

// --logs the names of their repsective objects. The importantPerson function now refers of the two objects
// importantObj.importantPerson();
// importantObj2.importantPerson();

// =======================================================================================================================================
// =======================================================================================================================================

let a2 = function () {
  console.log("a2", this);
  let b2 = function () {
    console.log("b2", this);
    let c2 = {
      hi: function () {
        console.log("c2", this);
      },
    };
    c2.hi();
  };
  b2();
};

// --both the 'this' in a2() and b2() refer to the global(window) object
// --its when we go to c2, which is an object itself where we the 'this' keyword becomes propery of a different object
// --'this' keyword is not lexically scoped. It doesnt matter wheres its called it depends on who calls it
// a2();

// =======================================================================================================================================
// =======================================================================================================================================

const obj2 = {
  name: "Billy",
  sing() {
    console.log("a", this);
    let anotherFunc = function () {
      console.log("b", this);
    };
    anotherFunc();
  },
};

// obj2.sing();
/*
    logs: 
        a { name: 'Billy', sing: f }
        b global(window){}
    
    -- the obj2 object called the sing() method therefore allowing the 'this' keyword inside sing to owned by the obj2 object, 
        but obj2 did not call the anotherFunc() method. sing() did, therefore the 'this' keyword in anotherFunc() references the
        default global(window) object   
    
    -- again in javascript our lexical scope(available data + variables where the function was defined) determins our available variables.
        Not where the function is called(dynamic scope) 

    -- 'this' keyword is dynamically scoped, it doesnt matter where it was written
*/

// =======================================================================================================================================
// =======================================================================================================================================

// to avoid errors involving the 'this' keyword and what it's referrinng two you can do one of these options

/*
    1. Arrow Functions

    -- arrow functions are lexically bound
*/

const objArrowFunc = {
  name: "Billy",
  sing() {
    console.log("a", this);
    let anotherFunc = () => {
      console.log("b", this);
    };
    anotherFunc();
  },
};

// objArrowFunc.sing();

/*
    logs
        --a {name: 'Billy', sing: func}
        --b {name: 'Billy', sing: func}
*/

/*
    2. Function Binding

*/
const objBind = {
  name: "Billy",
  sing() {
    console.log("a", this);
    let anotherFunc = function () {
      console.log("b", this);
    };
    return anotherFunc.bind(this);
  },
};

// objBind.sing();
// objBind.sing()();
/*
    first one logs just a
    second one logs
        --a {name: 'Billy', sing: func}
        --b {name: 'Billy', sing: func}
*/

/*
    3. Creating a self variable outside the function that references the outside's objects scope
*/
const objSelfReference = {
  name: "Billy",
  sing() {
    console.log("a", this);
    let self = this;
    let anotherFunc = function () {
      console.log("b", self);
    };
    return anotherFunc;
  },
};

// objSelfReference.sing();
// objSelfReference.sing()();
/*
    first one logs just a
    second one logs
        --a {name: 'Billy', sing: func}
        --b {name: 'Billy', sing: func}
*/

// =======================================================================================================================================
// =======================================================================================================================================

// Exercises

let x = {
  name: "Jay",
  say() {
    console.log(this);
  },
};

let y = {
  name: "Jay",
  say() {
    return function () {
      console.log(this);
    };
  },
};

let z = {
  name: "Jay",
  say() {
    return () => {
      console.log(this);
    };
  },
};

// x.say();
// logs - {name: 'Jay', say: [Function: say]}

// y.say()();
// logs - Object[global]{}

// x.say();
// logs - {name: 'Jay', say: [Function: say]}

const character = {
  name: "Simon",
  getCharacter() {
    return this.name;
  },
};
const giveMeTheCharacterNOW = character.getCharacter.bind(character);

//How Would you fix this?
console.log("?", giveMeTheCharacterNOW()); //this should return 'Simon'
