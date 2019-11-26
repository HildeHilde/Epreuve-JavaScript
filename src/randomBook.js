import { clone } from 'ramda';
import { books } from './data/books';

const ulRand = document.createElement('ul');

// function pr livre random
const mRand = () => Math.floor(Math.random() * books.length);


// création d'un livre
export const unLivre = (objLivre) => {
  const li = document.createElement('li');
  const h3 = document.createElement('h3');
  h3.innerText = `${objLivre.titre}`;
  const img = document.createElement('img');
  img.src = `${objLivre.image}`;
  const res = document.createElement('p');
  res.innerText = `${objLivre.resume}`;
  li.append(h3, img, res);
  return li;
};


// fonction pour afficher un livre aléatoirement
export const livreRand = (listeLivre) => {
  const idLivre = mRand();
  const LivreAleatoire = listeLivre.filter((livre) => livre.id === idLivre);
  const cloneLivre = clone(LivreAleatoire);
  ulRand.append(unLivre(cloneLivre[0]));
  return ulRand;
};
