const convertToCelsius = function(fahrenheit) {
  return Math.round((fahrenheit - 32) * (5 / 9) * 10) / 10;
};

const convertToFahrenheit = function(celsius) {
  return Math.round(((celsius * 9) / 5 + 32) * 10) / 10;
};

console.log(convertToCelsius(32));
console.log(convertToFahrenheit(0));
console.log(convertToCelsius(-100));
console.log(convertToFahrenheit(-10));
console.log(convertToCelsius(100));
console.log(convertToFahrenheit(37.8));
console.log(convertToCelsius(-73.3));
console.log(convertToFahrenheit(14));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
