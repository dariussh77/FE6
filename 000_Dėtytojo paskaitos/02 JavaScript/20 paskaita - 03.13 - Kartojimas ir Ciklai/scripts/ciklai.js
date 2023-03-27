/* Ciklai */

/*
  Ciklas? Loop? - besikartojantys veiksmai

  Ciklai vykdomi tol, kol atitinka nurodytą sąlygą

  Ciklų tipai:
    for(){}
      for of - masyvas
      for in - objektams
    while(){}
      do{} while()
    masyvų iteraciniai metodai
      forEach(callback)
      filter(callback)
      map(callback)
      reduce(callback)
      flatMap(callback)
      reduceRight(callback)
      find(callback)
      findLast(callback)
      findIndex(callback)
      findLastIndex(callback)
      some(callback)
      every(callback)
      ...


    Operatoriai:
      kintamasis++ didinti kintamąjį per vienetą po ciklo iteracijos
      ++kintamasis didinti kintamąjį per vienetą prieš ciklo iteraciją
      kintamasis-- mažinti kintamąjį per vienetą po ciklo iteracijos
      --kintamasis mažinti kintamąjį per vienetą prieš ciklo iteraciją
*/

/* for */
/*
  for(skaitliukoSukūrimas; sąlyga; skaitliukoKitimas){ veiksmai... }
  Naudojamas tuomet, kai galime apskaičiuoti reikalingą iteracijų kiekį
*/
console.groupCollapsed('for intro');
console.log('hihi1');
console.log('hihi2');
console.log('hihi3');
console.log('hihi4');
console.log('hihi5');
console.log('hihi6');
console.log('hihi7');
console.log('hihi8');
console.log('hihi9');
console.log('hihi10');

for(let i=1; i<=10; i++){
  console.log('vykdom ciklą', i);
}
console.groupEnd();

/* while */
/*
  while(sąlyga){ veiksmai... }
  Naudojamas tuomet, kai negalime apskaičiuoti reikalingo iteracijų kiekio
*/
console.groupCollapsed('while intro');
let iteracija = 1;
while(iteracija <= 10){
  console.log('while ciklas', iteracija);
  iteracija++;
}
console.groupEnd();

/* do while */
/*
  do{ veiksmai... }while(sąlyga)
  Ciklo veiksmai būtų įvykdyti bent vieną kartą
*/
console.groupCollapsed('do while');
do {
  console.log('Įvyko bent vieną sykį');
} while(false);
console.groupEnd();

/* for of */
/* 
  for(value of array){ veiksmai... }
  Naudojamas norint iteruoti per iteruojamą duomenį (dažniausiai masyvas)
*/
console.groupCollapsed('for of');
let masyvas = [5,8,7,6,2,1,5,1,0];
for(let katinukas of masyvas){
  console.log(katinukas);
}
// console.log(katinukas);
console.groupEnd();

/* for in */
/*
  for(key in object){ veiksmai... }
  Naudojamas norint iteruoti per objektą

  Naudojant for in IR Object.keys() objekto raktiniai žodžiai yra patalpinami kintamuosiuose ir tam, kad juos panaudotume, turime į objektą kreiptis nebe per tašką, bet per skliaustelius: objektas.raktas, bet objektas[raktas]
*/
console.groupCollapsed('for in');
let objektas = { pirmas:'haha', antras:'hihi', trecias: ':(' };
for(let raktas in objektas){
  console.log(raktas, objektas[raktas]); // good in this case
  console.log(raktas, objektas.raktas); // bad in this case
}
console.groupEnd();

/* variable scope */
/*
  Kintamieji egzistuoja savo ribose
  Ribos nurodomos {} skliausteliais
*/
console.groupCollapsed('variable scope');
let katinelis = 'ryžas';
console.log(katinelis);
{
  console.log(katinelis);
  let suniukas = 'Taksas';
  var suniukas2 = 'Biglis';
  const suniukas3 = 'Terjeras';
  console.log(suniukas);
  console.log(suniukas2);
  console.log(suniukas3);
  {
    var antrasLygis = 888;
    console.log(katinelis);
  }
  console.log(antrasLygis);
}
console.log(antrasLygis);
// console.log(suniukas);
console.log(suniukas2);
// console.log(suniukas3);
// console.log(i);
for(i = 0; i<3; i++){
  console.log(i)
}
console.log(i);
console.groupEnd();

let gyvunuMasyvas = ['šunkiukas', 'šuniukas','katukas','ežiukas','katė','šuo','ryklys','begemotas','dramblys','liūtas','žirafa','zebras','krokodilas','aligatorius'];
console.log(gyvunuMasyvas);
// console.log(gyvunuMasyvas[1]);
// console.log(gyvunuMasyvas[2]);
// console.log(gyvunuMasyvas[3]);
// console.log(gyvunuMasyvas[4]);
// console.log(gyvunuMasyvas[5]);
// console.log(.....);

// ciklas kuris spausdina visus gyvūnus nuo pirmo iki paskutinio
// for(let i = 0; i < gyvunuMasyvas.length; i++){
//   console.log(gyvunuMasyvas[i]);
// }

// ciklas kuris spausdina visus gyvūnus nuo paskutinio iki pirmojo
// for(let i = gyvunuMasyvas.length-1; i >= 0; i--){
//   console.log(gyvunuMasyvas[i]);
// }

// ciklas kuris spausdina kas trečią gyvūną nuo penkto iki galo
for(let i=4; i < gyvunuMasyvas.length; i+=3){ // i+=3 === i=i+3
  console.log(gyvunuMasyvas[i]);
}