const secondGreatLow = (values) => {
  for (let i = 0; i < values.length; i++) {
    if (isNaN(values[i]) === true) {
      return "error";
    }
  }

  let uniqueValues = [];

  for (let i = 0; i < values.length; i++) {
    if (uniqueValues.indexOf(values[i]) === -1) {
      uniqueValues.push(values[i]);
    }
  }

  if (uniqueValues.length === 1) {
    return [values[0], values[0]];
  }
  uniqueValues.sort(function (a, b) {
    return b - a;
  });

  return [uniqueValues[uniqueValues.length - 2], uniqueValues[1]];
};

console.log(secondGreatLow([1, 42, 47, 238]));
console.log(secondGreatLow(["ERT", 2, 3, 138]));
