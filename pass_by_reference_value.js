// =======================================================================================================================================
// =======================================================================================================================================

/*
    Pass by value(Strings or numbers - primitives)
    -- primitives are passed or copied by value anre are immutable
    -- The existing value cannot be altered from a copied version of it, 
        it is a true copy of the original with no baring to the original
*/

let a = 5;
let b = a;

b++;
console.log(a);
console.log(b);

// =======================================================================================================================================
// =======================================================================================================================================

/*
    Pass by reference(Objects - functions and arrays)

    -- point to a location in memory for the value
    -- if a copy was made that copy would point to the memory location, 
        and altering the copy would also alter the original


*/
let obj1 = {
  nmae: "Yao",
  password: "123",
};
let obj2 = obj1;

obj2.password = "easypeasy";
console.log(obj1);
console.log(obj2);

let c = [1, 2, 3, 4, 5];
let d = c;
// to actually copy an array
let e = [].concat(c);
d.push(549738459384);

console.log(c);
console.log(d);
console.log(e);

let obj3 = {
  a: "a",
  b: "b",
  c: "c",
};

// to copy obj us Object.assign
let objClone = Object.assign({}, obj3);

// or spread operator(ES6+)
let objClone2 = { ...obj3 };

obj3.c = 5;

console.log(obj3);
console.log(objClone);
console.log(objClone2);

/*
-- For nested objects the method above only creates a shallow clone  
-- though the initail or first level object is copied there are still more objects in the inital object that holds a 
    space in memory 
-- examples of this are below
*/
let nestedObj = {
  e: "e",
  f: "f",
  g: "g",
  h: {
    deep: "try to copy me",
  },
};

let nestedClone = Object.assign({}, nestedObj);
let nestedClone2 = { ...nestedObj };

// to copy all objects nested inside the initial object(deep clone) use JSON
// however there may be performance issues if the original obj is deep
// you can use lodash clone or Angular or jquery
let superClone = JSON.parse(JSON.stringify(nestedObj));

nestedObj.h.deep = "hahaha";
console.log(nestedObj);
console.log(nestedClone);
console.log(nestedClone2);
console.log(superClone);

// Exercise
const number = 100;
const string = "Jay";
let ob1 = {
  value: "a",
};
let ob2 = {
  value: "b",
};
let ob3 = ob2;

function change(number, string, ob1, ob2) {
  number = number * 10;
  string = "Pete";
  ob1 = ob2;
  ob2.value = "c";
}

change(number, string, ob1, ob2);

//Guess the outputs here before you run the code:
console.log(number); // 100
console.log(string); // "Jay"
console.log(ob1.value); // "a"
