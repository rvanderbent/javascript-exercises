const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numArray) {
	return numArray.reduce((total, n) => total + n, 0);
};

const multiply = function(numArray) {
  return numArray.reduce((total, n) => total*n, 1);
};

const power = function(x, y) {
  let total = x;
  for (let i = 1; i < y; i++){
    total = total * x;
  }
  return total;
};

const factorial = function(n) {
  let total = 1;
	for (let i = 1; i <= n; i++){
    total = total * i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
