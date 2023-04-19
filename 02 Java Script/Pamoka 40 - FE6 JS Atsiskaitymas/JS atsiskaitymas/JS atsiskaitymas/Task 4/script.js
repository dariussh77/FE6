/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

let autoMasyvas
let qOutput=document.querySelector('#output');

fetch('cars.json')
    .then(response=>{
       return response.json();
    })
    .then(data=>{
        console.log(data);
        data.forEach(e => {
            let card=document.createElement('div');
            let ul=document.createElement('ul');
            let ulText= document.createTextNode(e.brand);
            ul.append(ulText);
            card.append(ul);

            e.models.forEach(el=>{
                let li=document.createElement('li');
                let liText=document.createTextNode(el);
                li.appendChild(liText);
                ul.append(li);
                card.append(ul);
            }); 
            qOutput.append(card);
            console.log(qOutput);
        });
        
        
    })