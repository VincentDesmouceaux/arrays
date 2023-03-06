const arrayAddition = (tab) => {
  const sortedTab = tab.sort((a, b) => {
    return a - b;
  });

  // console.log(sortedTab);

  const max = sortedTab.pop();
  let result = 0;

  for (let i = 0; i < sortedTab.length; i++) {
    result = result + sortedTab[i];
  }
  // console.log(sortedTab);
  // console.log(max);

  if (result === max) {
    return true;
  } else {
    return false;
  }
};
console.log(arrayAddition([1, 2, 3, 12, 6]));
console.log(arrayAddition([1, 2, 3, 4]));
