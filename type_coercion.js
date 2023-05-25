/*
    == compares the two values, it the tow values have different types coerc the
    === compares the values and its type
*/

console.log(`1 == "1": `, 1 == "1");
console.log(`false == "": `, false == "");
console.log(`false == []: `, false == []);
console.log(`false == {}: `, false == {});
console.log(`"" == 0: `, "" == 0);
console.log(`"" == []:`, "" == []);
console.log(`"" == {}:`, "" == {});
console.log(`0 == []:`, 0 == []);
console.log(`0 == {}:`, 0 == {});
console.log(`0 == null:`, 0 == null);

// Implicit conversion - Coercion
// JS auto converts one data type to another
console.log(1 + 2); // 3

console.log("1" + 2); // 12 -> js converted 2 into "2" then concatenated both strings
console.log("1" * 2); // 2 -> converted 1 to an int because mult/div can only be done with ints

// Explicit conversion - Type Casting
// Programmer manually converts one data type to another

console.log(Number("2")); // 2 -> returns a number 2
console.log(String(2)); // 2 -> returns a string 2
