const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a, b) {
	return (a) + (b);
};

const multiply = function(a, b) {
  return a * b;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(n, r = 1) {
	while (n > 0) r *= n--;
  return r;
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
