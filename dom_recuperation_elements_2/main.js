let h1=document.getElementsByTagName("h1")[1];
console.log(h1.textContent);
    let ulPapa=document.getElementsByTagName("ul")[0];
let lastLi=ulPapa.lastElementChild;
console.log(lastLi.textContent);
let firstp=document.getElementsByTagName("p")[0];
console.log(firstp.textContent.toUpperCase());
let allLi =document.getElementsByTagName("li");
let tabLi=Array.from(allLi);
tabLi.forEach(element=>{
    element.textContent=element.textContent.toUpperCase();
    console.log(element.textContent)
})



