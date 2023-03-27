//          DOM
/*
  // document.getElementsByClassName
  document.querySelector('selektorius');
  document.querySelectorAll('selektorius');

  NODE.addEventListener('event', callback);
*/

function vardoIrPavardesIlgis(vardas, pavarde){
  return vardas.trim().length + pavarde.trim().length;
}
function vardoIrPavardesIlgioFormosFunkcija(event){
  event.preventDefault();
  console.log(event);
  // console.dir(event.target[0].value);
  // console.dir(event.target[1].value);
  // console.dir(document.querySelector('#vardas').value);
  // console.dir(document.querySelector('#pavarde').value);
  // console.dir(event.target.elements.vardas.value);
  // console.dir(event.target.elements.pavarde.value);
  let elementai = event.target.elements;
  console.dir(elementai.vardas.value);
  console.dir(elementai.pavarde.value);
  let ilgiuSuma = vardoIrPavardesIlgis(elementai.vardas.value, elementai.pavarde.value);
  console.log(ilgiuSuma);
  document.querySelector('#pirmosFormosAts>span').textContent = ilgiuSuma;
}

document
  .querySelector('section#pirmaForma > form')
  .addEventListener('submit', vardoIrPavardesIlgioFormosFunkcija);

/*
document
  .querySelector('section#pirmaForma > form')
  .addEventListener('submit', event => {
    event.preventDefault();
    document.querySelector('#pirmosFormosAts>span').textContent = event.target.elements.vardas.value.trim().length + event.target.elements.pavarde.value.trim().length;
  });
*/

function sudetiesFormosFunkcija(event){
  event.preventDefault();
  console.log(event);
  let pirmasDomuo = event.target.elements.pirmasSudetiesDomuo.valueAsNumber;
  let antrasDomuo = event.target.elements.antrasSudetiesDomuo.valueAsNumber;
  console.log(pirmasDomuo, antrasDomuo);
  document.querySelector('#sudetiesAts').textContent = pirmasDomuo+antrasDomuo;
}

document
  .querySelector('form#sudetiesForma')
  .addEventListener('submit', sudetiesFormosFunkcija);