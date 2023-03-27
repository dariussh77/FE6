const masyvas = ['a','b','c','d','a','c','e'];
console.groupCollapsed('masyvų iteraciniai metodai');
// paprastas for
console.groupCollapsed('simple for');
for(let i = 0; i < masyvas.length; i++){
  console.log(i, masyvas[i]);
}
console.groupEnd();

//        ForEach
console.groupCollapsed('forEach');
masyvas.forEach( (elementas, i) => {
  console.log(i, elementas);
} );
console.groupEnd();

// duomenų filtravimas su paprastu for
console.groupCollapsed('for filter');
let masyvasBeAFor = [];
for(let i = 0; i < masyvas.length; i++){
  if(masyvas[i] !== 'a'){
    masyvasBeAFor.push(masyvas[i]);
  }
}
console.log(masyvasBeAFor);
console.groupEnd();

//        Filter
console.groupCollapsed('filter');
let masyvasBeAFilter = masyvas.filter( (elementas) => {
  if(elementas !== 'a'){
    return elementas;
  }
});
console.log(masyvasBeAFilter);
console.groupEnd();

// mutuotas masyvas su for
console.groupCollapsed('for map');
let mutuotasSuFor = [];
for(let i = 0; i < masyvas.length; i++){
  mutuotasSuFor.push(':) ' + masyvas[i]);
}
console.log(mutuotasSuFor);
console.groupEnd();

//        Map
console.groupCollapsed('map');
let mutuotasSuMap = masyvas.map( (elementas) => {
  return ':) '+elementas;
});
console.log(mutuotasSuMap);
console.groupEnd();

// for reduce be intial
console.group('for reduce be intial');
let reduceForBe = '';
for(let i = 0; i < masyvas.length; i++){
  reduceForBe += masyvas[i];
}
console.log(reduceForBe);
console.groupEnd();

// for reduce su intial
console.group('for reduce su intial');
let reduceForSu = 'pradine reikšmė: ';
for(let i = 0; i < masyvas.length; i++){
  reduceForSu += masyvas[i];
}
console.log(reduceForSu);
console.groupEnd();

// reduce be initial
console.group('reduce be intial');
let reduceBe = masyvas.reduce( (acc, curr) => {
  return acc + curr;
});
console.log(reduceBe);
console.groupEnd();

// reduce su initial
console.group('reduce su intial');
let reduceSu = masyvas.reduce( (acc, curr) => {
  return acc + curr;
}, 'pradine reikšmė: ');
console.log(reduceSu);
console.groupEnd();

//      Some
console.group('Some');
let someAts = masyvas.some( (letter) => {
  return letter === letter.toUpperCase();
} );
console.log('Ar bent viena raidė yra didžioji?', someAts);
console.groupEnd();

//      Every
console.group('Every');
let everyAts = masyvas.every( (letter) => {
  return letter === letter.toLowerCase();
});
console.log('Ar visos raidės yra mažosios?', everyAts);
console.groupEnd();
console.groupEnd();

//      Conditions
console.groupCollapsed('Conditions');
let amziusSalygoms = 5;

//    If
console.group('if');
if(amziusSalygoms >= 18){
  console.log('Esi pilnametis.');
} else {
  console.log('Nesi pilnametis.');
}
console.groupEnd();

//    Ternary
console.group('ternary');
amziusSalygoms >= 18 
  ? console.log('Esi pilnametis.') 
  : console.log('Nesi pilnametis.');
console.groupEnd();

//    Logical AND
console.group('logical and');
amziusSalygoms >= 18 && console.log('Esi pilnametis.');
console.groupEnd();

// Ternary chaining
console.group('ternary chain')
amziusSalygoms < 18
  ? console.log('Nesi pilnametis.')
  : amziusSalygoms > 65 
  ? console.log('Esi pensininkas.')
  : amziusSalygoms >= 18 && amziusSalygoms <= 65
  ? console.log('Esi pilnametis.')
  : console.log('Metai turi būti nurodomi skaičiumi.');
console.groupEnd();

console.groupEnd();

//        Destruktūrizavimas
console.groupCollapsed('destr mas');
let masyvasDes = ['labas', 'ate', undefined,6,7,8,9,10];
console.log(masyvasDes);
//    Masyvas be destr...
let el0 = masyvasDes[0];
// let el1 = masyvasDes[1];
let el2 = masyvasDes[2] ? masyvasDes[2] : 'default reikšmė';
let elMas = masyvasDes.slice(3);
console.log(el0, el2, elMas);
//    Masyvo destruktūrizavimas
let [em0, , em2 = 'default reikšmė', ...emMas] = masyvasDes;
console.log(em0,  em2, emMas);
console.groupEnd();

console.groupCollapsed('destr obj');
let objektasDes = {
  vardas: 'Rokas',
  amzius: 26,
  gyvenamojiVieta: {
    miestas: 'Kaunas',
    salis: 'Lietuva'
  },
  plaukuSpalva: 'ruda',
  vedes: false,
  dirbantis: true
}
console.log(objektasDes);
//    Objektas be destruktūrizavimo
let vardasBe = objektasDes.vardas;
let amziusBe = objektasDes.amzius;
let salisBe = objektasDes.gyvenamojiVieta.salis;
let vairuotojoTeisesBe = objektasDes.vairuotojoTeises ? objektasDes.vairuotojoTeises : 'Neturi';
console.log(vardasBe, amziusBe, salisBe, vairuotojoTeisesBe);
//    Objekto destruktūrizavimas
let { vardas, amzius:metai, gyvenamojiVieta:{salis}, vairuotojoTeises='Neturi', ...kaipNori} = objektasDes;
console.log(vardas, metai, salis, vairuotojoTeises, kaipNori);
console.groupEnd();

console.groupCollapsed('fukcijos parametru destr');
function sudetis(sk1, sk2, ...daugiauSkaiciu){
  return sk1 + sk2 + daugiauSkaiciu.reduce( (acc, curr) => acc + curr);
}
console.log(sudetis(4,55,1,2,3,4,5,6,7,8));
console.groupEnd();

console.group();
let a = 'labas';
let b = 'labanaktis';
console.log(a, b);
// let laikinas = a;
// a = b;
// b = laikinas;
[a, b] = [b, a];
console.log(a, b);
console.groupEnd();

// Video:
//     https://youtu.be/UgEaJBz3bjY
//     https://youtu.be/NIq3qLaHCIs
//     https://youtu.be/-vR3a11Wzt0