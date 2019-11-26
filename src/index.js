// import $ from 'jquery';
// import { clone } from 'ramda';
import { books } from './data/books';
import { livreRand } from './randomBook';
import { catalogue } from './catalogue';


// titre de la SPA
const h1 = document.createElement('h1');
h1.innerHTML = 'Book en Stock';

document.body.appendChild(h1);

const lesLivres = books;

// header avec livre aléatoire
const header = document.createElement('header');
const misEnAvant = document.createElement('div');
const h2 = document.createElement('h2');
h2.innerHTML = 'Livre du moment :';

document.body.appendChild(header);
header.appendChild(misEnAvant.appendChild(h2));

header.append(livreRand(lesLivres));

// main avec le catalogue de livres
const main = document.createElement('main');
const h2cata = document.createElement('h2');
h2cata.innerText = 'Catalogue';

document.body.appendChild(main);
main.appendChild(h2cata);

main.appendChild(catalogue(lesLivres));


// footer avec la réservation
const footer = document.createElement('footer');
const divResa = document.createElement('div');
const h2resa = document.createElement('h2');
h2resa.innerText = 'Vos Réservations en cours: ';
divResa.id = 'divResa'; // servira pr vider tout le panier de resa
const btnEmprunt = document.createElement('button');
btnEmprunt.id = 'btnEmprunt';
btnEmprunt.innerText = 'emprunter';


// evenement sur le btn emprunter
btnEmprunt.addEventListener('click', () => {
  // je vide la page
  h1.setAttribute('hidden', 'true');
  header.setAttribute('hidden', 'true');
  main.setAttribute('hidden', 'true');
  footer.setAttribute('hidden', 'true');

  const boiteMess = document.createElement('div');
  const message = document.createElement('p');
  const annulerBtn = document.createElement('button');

  annulerBtn.innerText = 'annuler';
  message.id = 'message';
  message.innerText = 'Vous avez emprunté des livres';
  boiteMess.setAttribute('visible', 'true');
  boiteMess.append(message, annulerBtn);
  document.body.appendChild(boiteMess);
});


// annuler une réservation
const btnAnnulerResa = document.createElement('button');
btnAnnulerResa.innerText = 'Annuler';

btnAnnulerResa.addEventListener('click', () => {
  btnEmprunt.removeEventListener();
});

// evenement sur btn annuler


divResa.appendChild(h2resa);
footer.appendChild(divResa);
footer.append(btnEmprunt, btnAnnulerResa);

document.body.appendChild(footer);
