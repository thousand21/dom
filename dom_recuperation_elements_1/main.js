

let div=document.getElementsByTagName("div")[2];
console.log(div);
/* /* ### 1. Récupère et affiche le premier enfant de la dernière div */
let firstChild=div.firstElementChild;
console.log(firstChild);

/* ### 2. Récupère et affiche le dernier enfant de la dernière div */
let lastChild=div.lastElementChild;
console.log(lastChild);

/* ### 3. Récupère l'élément i contenu dans le premier p de la dernière div et affiche le */
let i=firstChild.nextElementSibling;
console.log(i);

/* ### 4. Récupère l'élément b contenu dans le dernier p de la dernière div et affiche le */
let b=lastChild.lastElementChild;
console.log(b);


/* ### 5. Affiche l'élément parent de l'élément i */
let iParent=i.parentElement;
console.log(iParent);

/* ### 6. affiche l'élément parent de l'élément b */
let bparent=b.parentElement;
console.log(bparent);

/* ### 7. affiche l'élément suivant le premier enfant de la dernière div */ 

let baba=firstChild.nextElementSibling.lastChild;
console.log(baba);