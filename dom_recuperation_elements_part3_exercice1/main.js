let exercice=document.querySelector('h2');
console.log(exercice.textContent);

exercice.textContent="Exercice 1";

let pexercice=exercice.nextElementSibling;
pexercice.textContent="salut";
console.log(pexercice);

let section1=document.querySelector("section");
let idSection1=section1.getAttribute("id");
console.log(idSection1);

let h1First=document.querySelector("h1");
let classh1First=h1First.getAttribute("class");
console.log(classh1First);
let classh1First2=document.querySelector("class");
console.log(classh1First2);

let allH1=document.querySelectorAll("h1");
let tabAllH1=Array.from(allH1);
tabAllH1.forEach(element=>{
    console.log(element)
})

let jiji=document.querySelector("input").attributes;
console.log(jiji);

let attribut=document.querySelector("input").getAttribute("type");
console.log(attribut);

let inputPassword=document.querySelectorAll("input")[1];
inputPassword.setAttribute("type","password");
inputPassword.setAttribute("type","color")
console.log(inputPassword);








