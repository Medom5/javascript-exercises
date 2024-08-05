const removeFromArray = function (arr) {
  const args = [...arguments];
  return arr.filter((e) => args.indexOf(e) === -1);
};

// Do not edit below this line
module.exports = removeFromArray;
