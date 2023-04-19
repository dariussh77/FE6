/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

let qButton=document.querySelector('#btn');
qButton.addEventListener('click',e=>{
    const masyvas=[];
    let qOutput=document.querySelector('#output');
    qOutput.innerHTML='';
    fetch('https://api.github.com/users')
        .then(reponse=>{return reponse.json()})
        .then(data=>{
            //console.log(data);
            data.forEach(el => {
                let card=document.createElement('div');
                let cardText=document.createTextNode(`Login: ${el.login}, Avatar_URL:  ${el.avatar_url}`);
                card.appendChild(cardText);
                qOutput.append(card);
            });
        });
    
});