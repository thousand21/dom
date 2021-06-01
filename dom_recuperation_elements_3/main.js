let firstP=document.getElementsByClassName("tartine");

console.log(firstP[0].textContent);

let idToast=document.getElementById('toast').innerText;

console.log(idToast);

let lastP=document.getElementsByClassName('tartine')[firstP.length-1];
console.log(lastP.textContent);
