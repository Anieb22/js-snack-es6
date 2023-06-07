const squadre = [
    { nome: 'Juventus'},
    { nome: 'Inter'},
    { nome: 'Milan'},
    { nome: 'Roma'},
    { nome: 'Napoli'}
  ];

  const squadreFalli = []

  for(let i=0; i<squadre.length; i++){
    const puntiEFalli = {...squadre[i],
    punti: Math.floor(Math.random()*100),
    falli: Math.floor(Math.random()*50),
  }

  squadreFalli.push({
    nome: squadre[i].nome,
    falli: puntiEFalli.falli
  });

  console.log(puntiEFalli);
}

console.log(squadreFalli);