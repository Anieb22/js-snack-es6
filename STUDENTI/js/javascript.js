const studenti = [
    { id: 213, name: 'Marco della Rovere', voto: 78 },
    { id: 110, name: 'Paola Cortellessa', voto: 96 },
    { id: 250, name: 'Andrea Mantegna', voto: 48 },
    { id: 145, name: 'Gaia Borromini', voto: 74 },
    { id: 196, name: 'Luigi Grimaldello', voto: 68 },
    { id: 102, name: 'Piero della Francesca', voto: 50 },
    { id: 120, name: 'Francesca da Polenta', voto: 84 }
  ];
  
  const listaNomiMaiuscolo = studenti.map(studente => {
    return { name: studente.name.toUpperCase() };
  });
  
  console.log("Lista dei nomi in maiuscolo:");
  console.log(listaNomiMaiuscolo);
  
  const studentiVotiAlti = studenti.filter(studente => studente.voto > 70);
  
  console.log("Lista degli studenti con voti superiori a 70:");
  console.log(studentiVotiAlti);
  
  const studentiVotiAltIdSuperiore = studenti.filter(studente => studente.voto > 70 && studente.id > 120);
  
  console.log("Lista degli studenti con voti superiori a 70 e id superiore a 120:");
  console.log(studentiVotiAltIdSuperiore);  
  