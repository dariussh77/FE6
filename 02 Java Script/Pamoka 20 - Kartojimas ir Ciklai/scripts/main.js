//          Ciklai

/* Ciklas - Loop - besikartojantys veiksmai.
Ciklas vykdomi TouchList, kol atitinka nurodyta sąlygą.
Ciklų tipai:
for (){};
    for of -masyvams
    for in - objektams
while(){};
    do{} while()
masyvų įteraciniai metodai
    forEach(callback ant visu);
    flatMap;
    map;
    reduce;
    reduceRight;
    find;
    findLast
    findIndex;
    findLastIndex
    find 
    some;
    every;
    ....

Operatoriai:
i++ - Skirti didinti kintamąjį per vienetą po ciklo iteracijos
++i - Skirti didinti kintamąjį per vienetą prieš ciklo iteracijos
i-- - Skirti mažinti kintamąjį per vienetą po ciklo iteracijos
--i - Skirti mažinti kintamąjį per vienetą prieš ciklo iteracijos
*/

//              1. For intro

/* for(skaitliukopradzia; sąlyga; skaitliuko keitimas){veiksmai}
Naudojamas, kai galima apskaičiuoti reikalingą įteracijų kiekį */

console.groupCollapsed('1.For');
let i=0; 
for(i=0;i<10;i++) { 
    console.log('i++ ciklas'+i);
 };
 console.log('Pabaigus Ciklą su i++:'+i);
 for(i=0;i<10;++i) { 
    console.log('++i ciklas'+i);
 };
 console.log('Pabaigus Ciklą su ++i:'+i);

 /////
 let j=77;
 console.log('I++ ',j++); //77
 console.log('I++ ',j);
 j=77;
 console.log('I++ ',++j); //78
 console.groupEnd('1.For');
///deja atsakymas taspats


//      2.While
/* 
    while(sąlyga){veiksmai}

    Naudojamas, kai negalima apskaičiuoti reikalingą įteracijų kiekį - kai dirbama su asinchroniniais procesais.
    
*/
console.groupCollapsed('2.While');
let k=1;
while (k<=10) {
    console.log('while: ', k);
    k++;
}
console.groupEnd('2.While');




//                     3. Do while
/* d{}while(sąlyga)
Pradžiai padaro veiksmą, net jei sąlyga false

*/

console.groupCollapsed('3.While');
do{
    console.log('Įvyko bent vieną sykį');
}while(false);

console.groupEnd('3.While');


//             4. For of
/* 
for(value of arry) {veiksmai}
Naudojamas norint iteruoti per iteruojamą duomenį (dažniausiai masyvas)

*/
console.groupCollapsed('4.For of');
let masyvas=[2,5,6,3,8,7,6];
for(reiksme of masyvas) {
    console.log('Paimama kiekviena masyvo reiksme: '+reiksme);
}
console.log(reiksme);
console.groupEnd('4.For of');

//             5. For in
/* 
for(key of object) {veiksmai}
Naudojamas norint iteruoti per iteruojamą objektą. 

Naudojant "for in" ir object.key () objekto raktiniai žodžiai yra patalpinami  kintamuosiuose ir juos kreipiamisi per object[key]
*/
console.groupCollapsed('5.For in');
let objektas={pirmas:'aaaa', antras:'bbbb'}
for(let raktas in objektas) {
    console.log(raktas, objektas[raktas]);//teisingas rašymas
    console.log('Kažkodėl neapibrėžta?',raktas, objektas.raktas); //neteisingas rašymas
}

console.groupEnd('5.For in');


//                      6.Variable scope
/* 
    Kintamieji egzistuoja savo ribose, ribos nurodomos skliausteliais {}.
    Varas - negali pabėgti iš funkcijos.
    Global pabėga iš visur.
    Let, Const - iš rinų nepabėga.

*/

console.groupCollapsed('6.Variable scope');

let katinelis='ryžas';
{
    console.log(katinelis);
    let suniukasLet='taksas';
    var suniukasVar='Šnauceris';
    const suniukasConst='Biglis'
    console.log(suniukasLet);
    console.log(suniukasVar);
    console.log(suniukasConst);

}
// console.log(suniukasLet); //negalima nes Var Scope ribu
console.log(suniukasVar);
// console.log(suniukasConst); //negalima nes Var Scope ribu
console.groupEnd('6.Variable scope');

//              7.Masyvai cikluose

console.group('7.Masyvas cikluose');
let gyvunaiM=['Šunkiukas','Šuniukas', 'katukas', 'begemotas', 'aklys'];
//spausdina nuo pradzios iki galo
console.log('-----------spausdina nuo pradzios iki galo----------------');
for(let i=0;i<gyvunaiM.length;i++){
    console.log(gyvunaiM[i]);
}
console.log('----------spausdina iš galo----------');
//spausdina iš galo
for(let i=gyvunaiM.length-1;i>=0;i--){
    console.log(gyvunaiM[i]);
}
console.log('--------kas 3 gyvuną nuo 2 gyvuno iki galo------------');
//ciklas kuris spausdina kas 3 gyvuną nuo 2 gyvuno iki galo
for(let i=1;i<gyvunaiM.length;i+=3){
    console.log(gyvunaiM[i]);
}

console.groupEnd('7.Masyvas cikluose');

