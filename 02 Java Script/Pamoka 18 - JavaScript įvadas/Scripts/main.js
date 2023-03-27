/*
   Pagrindiniai kiekvienos programavimo elemntai:  
    Kintamieji - variables
    aritmetika - arithmetic / calculus
    sąlygos - condition
    ciklai  - loops
    funkcijos - funtions

    Skriptas rašomas body pabaigoje, nes:
        1. Kad vartotojui pirma užkrautų html, nereiktų laukti scripto užkrovimo.
        2. Scriptas kreipiasi į HTML , jei nebus užkrautas HTML nesuveiks scriptas.

    <script src="./Scripts/main.js" defer></script - defer nukelias tagą į pabaigą.

    
*/

/* window.alert("Mane rodo paskutinį"); */

/* 

Kintamieji

var | let |const - kintamojo startas - naudojami paprastai let ir const, kreipiantis į kintamajį var, let nereikia:
    1. Senasis užrašymo būdas kurio ribos didesnės;
    2. Let - naujas, ribos mažesnės;
    3. const - ribos mažesnės, ir ne keičiama (yra apėjimų).
    4. ___(blankempty_) - globalus NENAUDOJAMAS.

galimataip - Sugalvojate kaip vadinsite kintamaji vienu žodžiu - vienas žodis, unikalus, prasmingas, negali prasidėti skaičiumi, naudoti tik lotyniškus simbolius, daugelis simboliu negalimi išskyrus  _. 

=    priskyrimo ženklas

Reikšmė:
    string -rašomas kabutėse ("", '', ``) - tekstinis;
    number - skaičius;
    boolean - true /false - dvi galimos reikšmės;
Baigiasi kabliataškiu.
*/

/* var pavįadi4nim#as = 'reiksme';  */

var menesiai = 'kovas';
const PI = 3.14;

/* menesiai; */

let grazusskaicius = 66.66*6/66-6+66.6;

let arvasara = true; /* UpperCase sensative - skirtingi pavįadinimai didziosiosmis */
let arVasara = false;

/* 
Informacijos atvaizdavimas naršyklėje:
    1.console.log() - išveda duomenis į konsolę (zr.devtools)
        console.group() | console.groupCollased () -sukuria konsolės grupę.
    2.window.arert() - išmeta duomenis į pranešimo langą;
    3.window.promt() - ekrane atvaizduoja pranešimo lentelęsu informacijos įvedimo laukeliu; prilyginus window.promt kintamajam - galimepasiimti vartojo reikšmę
*/
/* console.log(arvasara);
window.alert('pertrauka');
window.prompt('Įvesk:');
let vartotojoReiksme = window.prompt('Ar vėluojam į pertrauką');window.alert(vartotojoReiksme); */
console.group('Grupe');

console.log('daug eilučių');
console.log('daug eilučių');
console.log('daug eilučių');
console.log('daug eilučių');
console.log('daug eilučių');
console.log('daug eilučių');
console.log('daug eilučių');

console.groupEnd();
console.group('Grupe2');

console.log ('kita grupė');
console.log ('kita grupė');
console.log ('kita grupė');
console.log ('kita grupė');
console.log ('kita grupė');
console.log ('kita grupė');
console.log ('kita grupė');
console.groupEnd();

/* 
            Aritmetika 
    Veiksmai su duomenimis (padrinde kintamaisiais) ir statiniais:
        + -     sum/addition;
        - -     subtract;
        * -     multiplication;
        / -     division;
        ** -    power  -kėlimas laipsniu;;
        **(1/n) - root -šaknies traukimas;
        % -     remainder -liekanos radimas;

        Visur dirbama tik su skaičiais, o + naudojamas ir su textu.
*/
let sk1 = 5;
let sk2 = 9;
let neskaičius = '5';
let zodis = 'Tekstassss';
let tiesa = true;

console.group('aritmetika');

console.log('sk1+sk2=',sk1+sk2);
console.log(sk1-sk2);
console.log(sk1*sk2);
console.log(sk1/sk2);
console.log(sk1**sk2);
console.log(sk1**(1/sk2));
console.log(sk1%sk2);
console.log('Tekstas +sk1', sk1+zodis)
console.log("'5'+9=", sk1+sk2);
console.groupEnd();

/*              Prilyginimas ir palyginimas

        Prilyginimas

        Naujos reikšmės suteikimas:
        let kint = "labas vakaras";
        kintamasis = 50;
        Trumpiniai:
        +=x  - didnimas per x;
        -=x  - mažinimas per x;
        *=x  - auginimas per x;
        /=x  - dalinimas per x;
        **=x  - kėlimas laipsniu per x;
        %=x  - liekanos radimas per x;

        Palyginimai:
        > - daugiau 
        < -mažiau
        >= - daugiau arba lygu
        <= - mažiau arba lygu
        == - ar lygios reikšmę
        === - ar lygios reikšmės IR duomenų tipai
        != - ar nelygios reikšmės
        !==  - ar nelygios reikšmės IR duomenų tipai
        

*/
console.group('Kintamuju suvedimas ');

let kintamasis = 'labas vakaras';
console.log(kintamasis);
kintamasis=50;
console.log(kintamasis);
kintamasis=kintamasis+1; /* padidinti vienu */
console.log(kintamasis);
kintamasis+=100; /* trumpinys kintamasis =  kintamasis+1;  */
console.log(kintamasis);
kintamasis**=1/2; 
console.log(kintamasis);
console.groupEnd();

console.group('loginiai elemntai')

console.log(10>3);
console.log(10<3);
console.log(10<=10);
console.log(10>=3);
console.log(10==3);
console.log(10!=3);
console.log(10===3);
console.log(10=='10');
console.log(10==='10');
console.groupEnd();

                        /* Svarankiškai */



let verte=1/2;
let dydis=9;
let ilgis=0;
let aukstis=9;
let kaina=77;

let vardas='Ilgitas';
let pavarde='Lokys';
let tarpas=' ';
let pasaukimas='Filosofas';
let profesija='Inžinierius';

let l_geras=true;
let l_blogas=false;
let l_puosnus=true;
let l_paikas=false;
let l_kovingas=true;

console.group('Operatoriai');

console.log('verte+aukstis=',verte+aukstis);
console.log('dydis+pavarde=',dydis+pavarde);
console.log('kaina+l_kovingas=',kaina+l_kovingas);
console.log('vardas+pavarde=',vardas+pavarde);
console.log('profesija+l_blogas=',profesija+l_blogas);
console.log('aukstis-aukstis=',aukstis-aukstis);
console.log('dydis-pasaukimas=',dydis-pasaukimas);
console.log('pavarde-vardas=',pavarde-vardas);
console.log('l_geras-l_kovingas=',l_geras-l_kovingas);
console.log('l_paikas-kaina=',l_paikas-kaina);
console.log('l_blogas*l_kovingas=',l_blogas*l_kovingas);
console.log('l_geras/l_blogas=',l_geras/l_blogas);
console.log('dydis**(1/2)=',dydis**(1/2));
console.log('vardas**pavarde=',vardas**pavarde);
console.log('kaina%aukstis=',kaina%aukstis);
console.groupEnd();

console.group('Palyginimas');
console.log('pavarde==vardas',pavarde==vardas);
console.log('pavarde>vardas=',pavarde>vardas);
console.log('(Žiūri pagal abecele)pavarde<vardas=',pavarde<vardas);
console.log('l_paikas===l_blogas',l_paikas===l_blogas);
console.log('l_paikas===ilgis',l_paikas===ilgis);
console.log('l_paikas==ilgis',l_paikas==ilgis);
console.groupEnd();

console.group('SUtrumpinimai');
console.log('l_geras+=l_puosnus   =',l_geras+=l_puosnus);
console.log('kaina=kaina%aukstis =',kaina%=aukstis );
console.log(kaina);
console.log('=',);
console.log('=',);
console.log('=',);
console.log('=',);
console.log('=',);
console.log('=',);
console.log('=',);
console.log('=',);
console.log('=',);
console.log('=',);
console.log('=',);




