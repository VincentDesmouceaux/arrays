const lowerUpper = (str) => {
  let result = "";

  const tab = str.split(" ");

  for (let i = 0; i < tab.length; i++) {
    for (let j = 0; j < tab[i].length; j++) {
      if (j % 2 === 0) {
        result = result + tab[i].charAt(j).toLowerCase();
      } else {
        result = result + tab[i].charAt(j).toUpperCase();
      }
    }

    result = result + " ";
  }
  return result;
};

console.log(lowerUpper("La ville de Paris"));
