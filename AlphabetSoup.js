const alphabetSoup = (str) => {
  const result = str.split("").sort().join("");

  return result;
};

console.log(alphabetSoup("bonjour"));
console.log(alphabetSoup("aurevoir"));
console.log(alphabetSoup("vincent"));
