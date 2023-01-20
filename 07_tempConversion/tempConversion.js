const convertToCelsius = function(degreesF) {
  let degreesC = Math.round((degreesF - 32) * 5/9 * 10) / 10;
  //x °C ≘ (x × 9/5 + 32) °F 
  //x °F ≘ (x − 32) × 5/9 °C 
  return degreesC;
};

const convertToFahrenheit = function(degreesC) {
  let degreesF = Math.round((degreesC * 9/5 + 32) * 10) / 10;
  return degreesF;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
