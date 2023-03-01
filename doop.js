const doop = (tab) => {
  const a = tab[0];
  const op = tab[1];
  const b = tab[2];

  if (Number.isInteger(a) === false || Number.isInteger(b) === false) {
    return "ERROR";
  } else {
    if (op === "+") {
      return a + b;
    } else if (op === "-") {
      return a - b;
    } else if (op === "*") {
      return a * b;
    } else if (op === "/") {
      return a / b;
    } else if (op === "%") {
      return a % b;
    } else {
      return " ERROR";
    }
  }
};

console.log(doop([12, "+", 50]));
console.log(doop([10, "/", 2]));
