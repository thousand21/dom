let h1=document.querySelector("h1");
h1.textContent="Les attributs Class et Id";

let allH2=document.querySelectorAll("h2");
allH2[0].textContent="Exercice 2 Partie A";

allH2[1].textContent="Exercice 2 Partie B";

let allP=document.querySelectorAll("p");
allP[0].textContent="L'ajout de class et d'ID est assez simple, il suffit de connaitre les methodes <b>par coeur</b> ";

allP[1].textContent="La manipulation de l'attribut Style peut-être une <i>solution</i> rapide";

h1.setAttribute("id","bigTitle");
console.log(h1);

let div=document.querySelectorAll("div");
div[0].setAttribute("class","container");

let tabH2=Array.from(allH2);
tabH2.forEach(element=>{
    element.setAttribute("class","title");

})

let tabP=Array.from(allP);
tabP.forEach(element=>{
    element.setAttribute("class","text");

})


let allSection=document.querySelectorAll("section");

allSection[0].setAttribute("class","margin-bottom border-black padding");

allSection[1].setAttribute("class","margin-top border-black padding");

div[1].style.backgroundColor='blue';
div[1].style.border='red 10px';
div[1].style.width='50px';
div[1].style.height='50px';










