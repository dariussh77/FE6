//            Cookies
// document.cookie = 'pavadinimas=reiksme';
// document.cookie = `Vardas=Rokas; expires=${new Date('2023 03 31')}`;
// document.cookie = `delete=after; expires=${new Date('Thu, 30 Mar 2023 11:15:00 GMT')}`;

//            Session Storage
// window.sessionStorage.setItem('raktinisZodis','reiksme');
// window.sessionStorage.setItem('Vardas','Rokas');
// window.sessionStorage.setItem('Pavarde','Banaitis');
// window.sessionStorage.removeItem('Pavarde');
// // window.sessionStorage.clear(); // išvalo visą sessionsStorage
// let sessionVardas = window.sessionStorage.getItem('Vardas');
// console.log(sessionVardas);
// let sessionRaktas = window.sessionStorage.key(1);
// console.log(sessionRaktas);
// console.log(window.sessionStorage.length);

//            Local Storage
window.localStorage.setItem('tema', 'runescape');
window.localStorage.setItem('iTema', 'false');
window.localStorage.removeItem('iTema');
// window.localStorage.clear();
console.log(window.localStorage.getItem('tema'));
console.log(window.localStorage.key(0));
console.log(window.localStorage.length);


const duomenys = {
  asmenys:[
    {
      vardas: "Rokas",
      pavarde: "Banaitis",
      amzius: 26,
      vedes: false
    },{
      vardas: "Petras",
      pavarde: "Petrauskas",
      amzius: 55
    },{
      vardas: "Jonas",
      pavarde: "Jonukauskas",
      amzius: 5
    }
  ],masinos:[
    {
      marke: "Audi",
      modelis: "TT",
      metai: 2000
    },{
      marke: "BMW",
      modelis: "6",
      metai: 2015
    }
  ],
  kazkaDaro(){
    console.log('magija');
  }
};

window.localStorage.setItem('duomenys', JSON.stringify(duomenys));
console.log(window.localStorage.getItem('duomenys'));
console.log(JSON.parse(window.localStorage.getItem('duomenys')).asmenys);

//            Node Elementai
const nodeSekcija = document.querySelector('#nodeElements');
let divas = document.createElement('div');
divas.classList.add('kortele', 'remeliai');
nodeSekcija.appendChild(divas);
let heading = document.createElement('h1');
divas.appendChild(heading);
let textPavadinimas = document.createTextNode('Pavadinimas');
heading.appendChild(textPavadinimas);
console.dir(divas);
heading.addEventListener('click', () => {
  // heading.classList.toggle('redBg');
  if(heading.classList.contains('redBg')){
    heading.classList.remove('redBg');
    console.log('atėmiau fono spalvą');
  } else if(!heading.classList.contains('redBg')){
    heading.classList.add('redBg');
    console.log('pridėjau fono spalvą');
  }
});
let trinimoMygtukas = document.createElement('button');
divas.appendChild(trinimoMygtukas);
let trinimoMygtukoTekstas = document.createTextNode('Trinti');
trinimoMygtukas.appendChild(trinimoMygtukoTekstas);
trinimoMygtukas.addEventListener('click', (e) => {
  // divas.remove();
  e.target.parentElement.remove();
  console.log('Sunaikinau div kortele MUHAHAHAHA!!!');
});