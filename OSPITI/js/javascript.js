const nomeTavolo = 'Tavolo Vip';
const listaInvitati = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];

const listaSegnaposto = listaInvitati.map((ospite, posto) => {
  return {
    tavolo: nomeTavolo,
    nome: ospite,
    posto: posto + 1
  };
});

console.log(listaSegnaposto);
