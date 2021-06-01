let competences = {
    HTML: '71%',
    CSS: '95%',
    JS: '50%',
    React: '18%',
    Laravel: '100%'
}
/* ### 1. Stock tous les h2 dans une variable du nom de 'elements', attention voici les contraintes :
- Tu dois utiliser un querySelectorAll
- Tu dois ciblé la div et plus précicément son id "liste-competences" */
let elements=document.querySelectorAll("h2");

let liste_compet=elements[0].parentElement.getAttribute('id');
console.log(liste_compet);

let tabH2=Array.from(elements);
let tabCompet=Array.from(competences);

/* tabH2.forEach(element=>{
    if(element.innerText=="HTML"){
        element.innerText=competences.HTML;
    }
    else if(element.innerText=="CSS"){
        element.innerText=competences.CSS;
    }
    else if(element.innerText=="JS"){
        element.innerText=competences.JS;
    }
    else if(element.innerText=="React"){
        element.innerText=competences.React;
    }
    else if(element.innerText=="Laravel"){
        element.innerText=competences.Laravel;
    }
       
    
}) */
let i=0;
for( element in competences){
    tabH2[i].innerText=competences[element];
    i++;
}
i=0;
for(element in tabH2){
     if(parseInt(tabH2[element].innerText)==100){
        tabH2[element].style.backgroundColor='gold';
        tabH2[element].style.color="black";
    }
    else if(parseInt(tabH2[element].innerText)>50){
        tabH2[element].style.backgroundColor='green';
        tabH2[element].style.color='white';
    }
    else if(parseInt(tabH2[element].innerText)==50){
        tabH2[element].style.backgroundColor='none';
    }
    else if(parseInt(tabH2[element].innerText)<50){
        tabH2[element].style.backgroundColor='red';
    }
    
}


/* tabH2.forEach(element=>{
    if(parseInt(element.innerText)>50){
        element.style.backgroundColor='green';
        element.style.color='white';
    }
    else if(parseInt(element.innerText)==50){
        element.style.backgroundColor='none';
    }
    else if(parseInt(element.innerText)==100){
        element.style.backgroundColor='gold';
        element.style.color="black";
    }
}) */