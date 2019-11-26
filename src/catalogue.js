import { clone } from 'ramda';


const ul2 = document.createElement('ul2');


// création d'un livre
export const monLivre = (objLivre) => {
  const li = document.createElement('li');
  li.id = 'monLivre';
  const h3 = document.createElement('h3');
  const img = document.createElement('img');
  const res = document.createElement('p');
  const auteur = document.createElement('p');
  const btn = document.createElement('button');

  h3.innerText = `${objLivre.titre}`;
  img.src = `${objLivre.image}`;
  res.innerText = `Resume: ${objLivre.resume}`;
  auteur.innerText = `Auteur: ${objLivre.auteur}`;
  btn.innerText = 'réserver';
  btn.id = 'lebtn';

  if (objLivre.categorie === 'bd') {
    li.style.backgroundColor = 'brown';
  } else if (objLivre.categorie === 'roman') {
    li.style.backgroundColor = 'darkcyan';
  } else {
    li.style.backgroundColor = 'darkgrey';
  }


  // evenement sur le btn
  btn.addEventListener('click', () => {
    const cloneL = clone(objLivre);
    const maResa = document.getElementById('divResa');
    const divLivre = document.createElement('div');
    divLivre.id = 'divLivre';
    const nomLivre = document.createElement('p');
    nomLivre.className = 'livre';
    nomLivre.innerText = cloneL.titre;
    divLivre.appendChild(nomLivre);
    maResa.appendChild(divLivre);
    btn.setAttribute('disabled', 'true');

    // garde dans le local storage 1 seul livre selectionné :(
    localStorage.setItem('livre choisi', `${cloneL.titre}`);
  });
  li.append(h3, img, auteur, res, btn);
  return li;
};

// Affichage du catalogue par livre
export const catalogue = (liste) => {
  liste.forEach((livre) => {
    const liClone = clone(livre);
    ul2.append(monLivre(liClone));
  });
  return ul2;
};
