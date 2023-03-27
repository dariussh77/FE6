//                      1.DOM
/* 
document.querySelector('selektorius');
document.querySelectorAll('selektorius');

NODE.add
*/
function vardoIrPavardesIlgis(vardas, pavarde){
    return vardas.trim().length+pavarde.trim().length;
};
function vardoIrPavardesIlgisFormosFunkcija(event1) {
    event1.preventDefault(); //neleizia nuresetinti
    console.log(event1);
/*     console.log(event1.target[0].value);
    console.log(event1.target[1].value); */
/*     console.dir(document.querySelector('#vardas')); //netinkamas,nes 
    console.dir(document.querySelector('#pavarde')); */
    let elementai=event1.target.elements; //trumpinys
    console.dir(elementai.vardas.value);
    console.dir(elementai.pavarde.value);
    let ilgiusuma=vardoIrPavardesIlgis(elementai.vardas.value,elementai.pavarde.value);
    console.log(ilgiusuma);
    document
    .querySelector('#pirmosFormosAts')
    .textContent=`Jūsų vardo ilgis yra: ${ilgiusuma} raidžių ilgio.`; //prideda prie H3 teksto....
}

document
    .querySelector('section#pirmaForma>form')
    .addEventListener('submit', vardoIrPavardesIlgisFormosFunkcija);


// Antra forma

function sudetiesFormosFunkcija(event){
    event.preventDefault();
    console.log (event);
    let pirmasDuomuo=event.target.elements.pirmasSudetiesDuomuo.valueAsNumber;
    let antrasDuomuo=event.target.elements.antrasSudetiesDuomuo.valueAsNumber;
    console.log(pirmasDuomuo,antrasDuomuo);
    document.querySelector('#sudetiesAts').textContent=pirmasDuomuo+antrasDuomuo;
}

document
    .querySelector('form#sudetiesForma')
    .addEventListener('submit', sudetiesFormosFunkcija);

