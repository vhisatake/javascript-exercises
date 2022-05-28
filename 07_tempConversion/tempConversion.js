const ftoc = function(tempInF) {
  let celsius = (tempInF - 32) * (5/9); 
  //rounding to 1 decimal
  return Math.round(celsius * 10) / 10;
};

const ctof = function(tempInC) {
  let fahrenheit = tempInC * (9/5) + 32;
  //rounding to 1 decimal
  return Math.round(fahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
