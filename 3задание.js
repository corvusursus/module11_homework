function sum(x) {
  return function (y) {
return x+y
  };
}

const number = sum(5);
console.log(number(10));