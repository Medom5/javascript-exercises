const sumAll = function (a, b) {
  if (isNaN(a) || typeof(b) !== "number" || a < 0 || b < 0 || a % 1 !== 0 || b % 1 !== 0)
    return "ERROR";

    if (a == b) return a;
    
  if (a > b) {
    let temp = a;
    a = b;
    b = temp;
  }

  return a + sumAll(a + 1, b);
};

// Do not edit below this line
module.exports = sumAll;
