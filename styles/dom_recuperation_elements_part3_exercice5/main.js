let softSkills = {
    Trello: '49%',
    Git: '87%',
    GitHub: '50%',
    Discord: '15%',
}
let allH2=document.querySelectorAll("h2");
let liste_softId=allH2[1].parentElement.getAttribute("id");
let liste_soft=allH2[1].parentElement;
console.log(liste_soft);
let tabH2=Array.from(allH2);

for(loli in tabH2){
    for( element in softSkills){
        console.log(element);
        if(tabH2[loli].innerText==element){
            
            tabH2[loli].innerText= softSkills[element] ;
            
        }
        
        
    }
    console.log(tabH2[loli]);
}


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


