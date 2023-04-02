// Cookies

document.cookie=`Pastatas=Namas; expires=${new Date()}`;
console.log(new Date());

//Session storage

window.sessionStorage.setItem('1 savaitės diena', 'pirmadienis');
window.sessionStorage.setItem('2 savaitės diena', 'antradienis');
window.sessionStorage.removeItem ('1 savaitės diena');
//window.sessionStorage.clear() //išvalo visas reikšmes;
console.log(sessionStorage.getItem('2 savaitės diena'));
console.log(sessionStorage.key(1));

//Local Storage
window.localStorage.setItem('1 savaitės diena', 'pirmadienis');
window.localStorage.setItem('2 savaitės diena', 'antradienis');
window.localStorage.removeItem ('1 savaitės diena');
//window.sessionStorage.clear() //išvalo visas reikšmes;
console.log(localStorage.getItem('2 savaitės diena'));
console.log(localStorage.key(0));

const duomenys={
    asmenys:[
        {vardas: 'Rokas', pavarde:'Banaitis' },
        {vardas: 'Darius', pavarde:'Šilinskas' }
    ],      
    auto:[
        {pavadinimas:'Audi',modelis:'A4'},
        {pavadinimas:'Skoda',modelis:'K5'}
    ]
};
window.localStorage.setItem('duomenys', JSON.stringify(duomenys)); //Konvertuojama į JSON
console.log(window.localStorage.getItem('duomenys'));
console.log(JSON.parse(window.localStorage.getItem('duomenys'))); //Gražinama iš iš JSON

// NodeElementai
const nodeSekcija=document.querySelector('#nodeElements')
let divas=document.createElement('div');
divas.classList.add('kortele','remeliai');
nodeSekcija.append(divas);
let heading=document.createElement('h1');
divas.append(heading);
let textH1=document.createTextNode('H1 tekstas');
heading.appendChild(textH1);
heading.addEventListener('click',(()=>divas.classList.toggle('redBg')));
heading.addEventListener('mouseleave',(()=>divas.classList.remove('redBg')));
let trynimoMygtukas=document.createElement('button');
divas.appendChild(trynimoMygtukas);
let trinimoTekstas=document.createTextNode('Trinti');
trynimoMygtukas.appendChild(trinimoTekstas);
trynimoMygtukas.addEventListener('click', e=>e.target.parentElement.remove());
