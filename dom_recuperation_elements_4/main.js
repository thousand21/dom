let idContent=document.getElementsByTagName("div")[0];
let firstchildContent=idContent.firstElementChild;
console.log(firstchildContent);

let h3=document.getElementsByTagName("h3");
let nv3h3=document.getElementsByTagName("h3")[1];
console.log(nv3h3);

let allP=document.getElementsByTagName("p");
console.log(allP[3]);

console.log(allP[1].nextElementSibling);

let allLi=document.getElementsByTagName("li");
console.log(allLi[0].parentElement);

let ul=document.getElementsByTagName("ul");
console.log(ul[0].firstElementChild);

console.log(allLi[3].nextElementSibling);

console.log(allP[3].nextElementSibling);

let allSpan=document.getElementsByTagName("span");
console.log(allSpan[1].parentElement.nextElementSibling);

let allB=document.getElementsByTagName("b");
console.log(allB[2].parentElement.parentElement.previousElementSibling.lastElementChild.firstElementChild.textContent);

let grandParagraphe=document.querySelector("p");
console.log(grandParagraphe.nextElementSibling.nextElementSibling);

let hbn=Array.from(document.querySelectorAll('li'));

hbn.forEach(element=>{
    console.log(element)
})





