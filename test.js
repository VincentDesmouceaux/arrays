const temperatures = [
  ["Lundi", 25],
  ["Mardi", 21],
  ["Mercredi", 23],
  ["Jeudi", 20],
  ["Vendredi", 22],
  ["Samedi", 21],
  ["Dimanche", 23],
];

for (let i = 0; i < temperatures.length; i++) {
  /*
  Pour la deuxième boucle qui parcourra les sous-tableaux,
  nous devons créer un index différent `j` pour éviter des conflits avec `i`.
  */
  for (let j = 0; j < temperatures[i].length; j++) {
    console.log(temperatures[i][j]); // `[j]` permet d'accéder aux éléments compris dans les sous-tableaux `[i]` de la variable `temperatures`.
  }
  console.log("--");
}

("test");
