/*** Currying
--the technique of converting a function that takes
--multiple arguments into a sequence of functions that each takes a single argument
*/

const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const curriedMultiplyBy5 = curriedMultiply(5);

console.log(multiply(5, 3));
console.log(curriedMultiply(5)(3));
console.log(curriedMultiplyBy5(4))

/*** Partial Applcation
--The process of applying a function to some of its arguments. 
--The partially applied function gets returned for later use. In 
--other words, a function that takes a function with multiple parameters 
--and returns a function with fewer parameters.
*/

const multiplyV2 = (a, b, c) => a*b*c;
const partialMultiplyBy5 = multiplyV2.bind(null, 5)
console.log(partialMultiplyBy5(4, 10))