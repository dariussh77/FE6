//            FUNKCIJOS
/*
  Funkcija yra užvadintas kodas, kuris nevyksta tol, kol į jį nėra kreipiamasi.
  Funkcijos gali priimti duomenis.
  Funkcijos gali grąžinti duomenis.

  Sintaksė:
    function pavadinimas(){ veiksmai... }
    function pavadinimas(params){ veiksmai... }

  Kreipimasis:
    pavadinimas();
    pavadinimas(params);
*/

// function pasisveikinimas(){
//   console.log(`Hello world!`);
// }
// pasisveikinimas();

// function pasisveikinimas(vardas){
//   console.log(`Hello ${vardas}!`);
// }
// pasisveikinimas('Rokas');
// pasisveikinimas('Onutė');
// pasisveikinimas('Adomas');

// function dauginti(sk1, sk2){
//   console.log(sk1*sk2);
//   console.log(sk1,sk2);
// }
// dauginti(3, 2);
// dauginti(3, 3);
// dauginti(3, 4);
// dauginti(3, 5);

// function dauginti(sk1, sk2){
//   return sk1*sk2;
// }
// console.log(dauginti(5,4));
// // praktikuotis šitaip ^
// let funkcijosAtsakymas = dauginti(5,4) + 5;
// console.log(funkcijosAtsakymas);

// function daugintiBeReturn(sk1, sk2){
//   console.log(sk1*sk2);
// }
// daugintiBeReturn(5,4);
// console.log(daugintiBeReturn(5,4));
// // NESIpraktikuoti šitaip ^
// let funkcijosAtsakymasBeReturn = daugintiBeReturn(5,4);
// console.log(funkcijosAtsakymasBeReturn);

/*          Kreipimasis į DOM        */
/*
  DOM - Document Object Model

  Kreipimasis į dokumente esančius tag'us - document.querySelector('selektorius')
  Įvykio klausimasis dokumente esančio elemento - addEventListener('event', callback) 
*/
// function keiciamDiva(){
//   let divas = document.querySelector(`#cantGetMe`);
//   console.dir(divas); // norint atvaizduoti HTML elementą (node'ą) su išsamia informacija, naudojame ne console.log(), bet console.dir()
//   divas.style.fontSize = '50px';
//   divas.style.color = 'red';
//   divas.textContent += ', bet pakeistas :)';
// }

// document
//   .querySelector('#pressMe')
//   .addEventListener('click', keiciamDiva);

// document
//   .querySelector('#pressMe')
//   .addEventListener('mouseleave', keiciamDiva);

/*          Metodai  (methods)       */
/*
  Metodas yra funkcija, kuri priklauso kažkokiam elementui/objektui.

  Vieni metodai modifikuoja pradinius duomenis, kiti nemodifikuoja pradinių duomenų.
*/
//    Masyvų metodai
/*
  pop() - išima iš galo
  shift() - išima iš pradžios
  push() - prideda prie galo
  unshift() - prideda prie pradžios

  sort() - išrikiuoja abecelės tvarka.
    Su skaičiais atsiranda problema. Ją reikia spręsti skliausteliuose pridedant "function(a,b){return a-b}".
    Su lietuviškai simboliais atsiranda problema. Ją reikia spręsti skliausteliuose pridedant "function(a,b){return a.localeCompare(b)}".
  reverse() - apsuka masyvą.

  slice(1,2) - paima nuo 1 iki 2, bet masyvo nepakeičia
  splice(1,2,3,4,5...) - 1 pozicijoj prideda 3,4,5... elementą/us ir išima 2 kiekį elementų esančių toliau
  1.concat(2,3,4...) - sujungia 1 su 2,3,4... masyvų/ais, bet jų nepakeičia.
*/

const zemynai = ['Europa', 'Azija', 'Afrika', 'Š. Amerika', 'P. Amerika', 'Antarktida', 'Australija'];

console.log(zemynai.pop()); // išima ir grąžina paskutinį modifikuoja pradinį masyvą
console.log(zemynai.shift()); // išima ir grąžina pirmąjį modifikuoja pradinį masyvą
console.log(zemynai.push('Europa')); // prideda į galą modifikuoja pradinį masyvą ir grąžina naują masyvo ilgį
console.log(zemynai.unshift('Australija')); // prideda į pradžią modifikuoja pradinį masyvą ir grąžina naują masyvo ilgį
console.log(zemynai);
console.log(zemynai.reverse());

const lietuvybes = ['šeškas', 'šalis', 'ąžuolas', 'ąsotis', 'ėdalas', 'egle', 'silpnas', 'stiprus', 'šakotis', 'žirafa', 'zebras', 'alus', 'ateik'];
const skaiciai = [1,54,6,465,19,4,23,1.2,1,00,321,68,61,32,156,1,561,1,1,1,651,31,984,65,1];
console.log(skaiciai.sort((a, b) => a - b)); // rikiuoja 1->9
console.log(skaiciai.sort((a, b) => b - a)); // rikiuoja 9->1
// console.log(lietuvybes.sort());
// console.log(lietuvybes.sort((a, b)=> a.localeCompare(b)));

console.log(lietuvybes.slice(5, 9)); // grąžina masyvo elementus nuo pirmojo (imtinai) iki antrojo (neimtinai) indekso, bet nemutuoja pradinio masyvo
console.log(lietuvybes.splice(5, 3, 'naujas', 'dar')); // nuo pirmojo (imtinai) parametro pradeda kirpti antrąjąme parametre nurodytą kiekį elementų ir toje vietoje prideda sekančius parametrus (jeigu jų yra) šitaip mutuodamas pradinį masyvą. O grąžina iškirpus elementus.
console.log(lietuvybes.concat(zemynai)); // Grąžina sujungtus masyvus. Nemutuoja nei vieno iš masyvų.

/* funkcijos su masyvais */
function spausdinuMasyvus(masyvas){
  let nenorimeModifikuoti = masyvas.slice();
  while(nenorimeModifikuoti.length){
    console.log(nenorimeModifikuoti.shift());
  }
}

let skaiciuMasyvas = [6,4,694,1,684,351,646,16,4,849,61];
spausdinuMasyvus(skaiciuMasyvas);
spausdinuMasyvus(lietuvybes);
spausdinuMasyvus(zemynai);
console.log(skaiciai);
spausdinuMasyvus(skaiciai);
console.log(skaiciai);
spausdinuMasyvus([1,2,3]);