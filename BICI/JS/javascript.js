const biciclette = [
  { nome: 'Bici 1', peso: 7 },
  { nome: 'Bici 2', peso: 6 },
  { nome: 'Bici 3', peso: 8 },
  { nome: 'Bici 4', peso: 5 },
  { nome: 'Bici 5', peso: 7.5 }
];

// Trovare la bici con il peso minore utilizzando la destructuring
let biciMinore = biciclette[0]; // Assume la prima bici come iniziale

for (let i = 1; i < biciclette.length; i++) {
  if (biciclette[i].peso < biciMinore.peso) {
    biciMinore = biciclette[i];
  }
}

// Stampare la bici con il peso minore utilizzando il template literal
console.log(`${biciMinore.nome}, Peso:${biciMinore.peso}Kg`);
