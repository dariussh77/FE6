/*
  8) Sukurk programą, kurioje bus du inputai - vardas (text) ir skaičius (number) ir tuščias <ul>. Įrašius formoje duomenis, po apačia turi susikurti list itemų tiek, kiek tu parašei skaičių. List itemuose turi būti tavo vardas :)
*/

function vardoKartojimas(event){
  event.preventDefault();
  // console.log(event);
  let vardas = event.target.elements.vardas.value;
  let kartojimas = event.target.elements.kartojimas.valueAsNumber;
  // console.log(vardas, kartojimas);
  let sarasas = document.querySelector('#ciaKuriame');
  // console.dir(sarasas);
  sarasas.innerHTML = '';
  // console.dir(sarasas.innerHTML);
  for(let i = 0; i < kartojimas; i++){
    sarasas.innerHTML += `<li>${vardas}</li>`;
  }
  // console.dir(sarasas.innerHTML);
}

document
  .querySelector('#task_8 > form')
  .addEventListener('submit', vardoKartojimas);

/*
  9) Sukurkite formą, kurioje vienas input - skaičius, įvesti stačiakampio dydį. Po forma - tegul būna tusčias div elementas. Jame reikia atvaizduoi trikampį pagal įvestą input. Šis pratimas - klasika programavimo ciklų srityje, tiek atsakymų, tiek teorijų, tiek sąmokslo teorijų internete - daugiau nei reikia; pasibaigus ar pastrigus - būtinai pasinagrinėkite (gal vienas iš paaiškinimų jums atvers duris į ciklų pasaulio aiškumą).
  Pvz:
  Įvesta: 2
  Rezultatas:
  *
  **

  Įvesta: 5
  Rezultatas:
  *
  **
  ***
  ****
  *****
*/

function kurtiTrikampi(event){
  event.preventDefault();
  // console.log(event);
  let trikampioDydis = event.target.elements.stacDydis.valueAsNumber;
  // console.log(trikampioDydis);
  let trikampioDivas = document.querySelector('#trikampisCia');
  trikampioDivas.innerHTML = '';
  // console.dir(trikampioDivas);
  let zvaigzdes = '';
  for(let i = 0; i < trikampioDydis; i++){
    zvaigzdes += '*';
    trikampioDivas.innerHTML += `<p>${zvaigzdes}</p>`;
  }
}

document
  .querySelector('#task_9 > form')
  .addEventListener('submit', kurtiTrikampi)



document.querySelector('body').innerHTML += `
  <div>
    <h1> Gero savaitgalio </h1>
    <img src="https://www.rei.com/dam/130817_4264_teach_kid_ride_bike_hero_lg.jpg">
    <p> Bye bye :) </p>
  </div>
`;