const multiplyBy = function (num1) {
  //   return function (num1) {
  //     return num1 * 2;
  //   };
  // same as
  return (num2) => num1 * num2;
};

// same as
// const multiplyBy = (num1) => (num2) => num1 * num2;

const multiplyByTwo = multiplyBy(2);
console.log(multiplyByTwo(3));
