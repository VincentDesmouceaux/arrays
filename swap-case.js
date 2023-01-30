const swapCase = (str) => {
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      newStr += str[i].toLowerCase();
    } else {
      newStr += str[i].toUpperCase();
    }
  }
  return newStr;
};

console.log(swapCase("Hello"));

const isLowerCase = (letter) => {
  if (letter === letter.toLowerCase()) {
    return true;
  }
  return false;
};

const swapCasev2 = (tab) => {
  let result = [];

  for (let i = 0; i < tab.length; i++) {
    let str = "";

    for (let j = 0; j < tab[i].length; j++) {
      if (isLowerCase(tab[i][j])) {
        str += tab[i][j].toUpperCase();
      } else {
        str += tab[i][j].toLowerCase();
      }
    }
    result.push(str);
  }
  return result;
};
console.log(swapCasev2(["Prénom", "Vincent"]));
