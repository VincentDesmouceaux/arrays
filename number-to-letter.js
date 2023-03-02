const zero2sixteen = [
  "zéro",
  "un",
  "deux",
  "trois",
  "quatre",
  "cinq",
  "six",
  "sept",
  "huit",
  "neuf",
  "dix",
  "onze",
  "douze",
  "treize",
  "quatorze",
  "quinze",
  "seize",
];

const twenty2sixty = ["vingt", "trente", "quarante", "cinquante", "soixante"];
const hundred2thousand = ["cent", "mille"];

const handleJoiner = (num, currentNum, value) => {
  if (
    num !== 11 &&
    currentNum > 10 &&
    (value === zero2sixteen[1] || value === zero2sixteen[11])
  ) {
    if (currentNum === 11 && num > 100) {
      return value;
    }

    return "et" + value;
  }
  return value;
};

const handleTens = (num) => {
  let res = "";

  if (num % 100 > 0) {
    res += " ";
  }

  currentNum = num % 100;

  let tens = Math.floor(currentNum / 10);

  if (tens < 2) {
    if (currentNum > 16) {
      res += zero2sixteen[10] + "-" + zero2sixteen[currentNum - 10];
    } else {
      if (currentNum) {
        res += handleJoiner(num, currentNum, zero2sixteen[currentNum]);
      }
    }
  } else if (tens >= 2 && tens < 6) {
    res += twenty2sixty[tens - 2];

    if (currentNum % 10) {
      if (currentNum % 10 === 1) {
        res += " ";
      } else {
        res += "-";
      }
      res += handleJoiner(num, currentNum, zero2sixteen[currentNum % 10]);
    }
  }
};
