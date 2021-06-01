/* > Créez une div avec dédans un h1, un h2, un input et un button
> Affichez cette div dans l'HTML
> Le h1 doit contenir "Je suis un titre"
> Le h2 doit contenir "Je suis un sous-titre"
> Le button doit contenu "Acceptez"
> Changer le contenu du h1 en "Je suis un grand titre"
> NE PAS TOUCHER A L'HTML */

let creerDiv= document.createElement("div");
let creerH1= document.createElement("h1");
let creerH2= document.createElement("h2");
let creerInput= document.createElement("input");
let creerButton= document.createElement("button");
let myBody= document.querySelector("body");
creerDiv.appendChild(creerH1);
creerDiv.appendChild(creerH2);
creerDiv.appendChild(creerInput);
creerDiv.appendChild(creerButton);
myBody.appendChild(creerDiv);
let texteH1=document.createTextNode("Je suis un titre");
creerH1.appendChild(texteH1);
let texteH2=document.createTextNode("Je suis un sous-titre");
creerH2.appendChild(texteH2);
let texteButton=document.createTextNode("Acceptez");
creerButton.appendChild(texteButton);
creerH1.innerHTML="Je suis un grand titre";

