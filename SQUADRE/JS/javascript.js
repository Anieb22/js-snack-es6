const squadre = [
    { nome: 'Juventus'},
    { nome: 'Inter'},
    { nome: 'Milan'},
    { nome: 'Roma'},
    { nome: 'Napoli'}
  ];

  for(let i=0; i<squadre.length; i++){
    const puntiEFalli = {...squadre[i],
    punti: Math.floor(Math.random()*100),
    falli: Math.floor(Math.random()*50),
  }
    console.log(puntiEFalli)
  }