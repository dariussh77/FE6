//                      1.Funkcijos
/* 
Funkcija yra užvadintas kodas, kuris nevyksta tol, kol į jį nesikreipiame.
Funkcijos gali priimti duomenis .
Funkcijos gali gražinti duomenis.

SIntraksė:
    funtion pavadinimas(parametrai){veiksmai}
Kreipimasis:
    pavadinimas(parametrai)

*/
//Duomenų priėmimas:
console.groupCollapsed('1.Funkcija')
function pasisveikinimas(vardas){
    console.log(`"Labas" ${vardas}`);
};
pasisveikinimas('Dariau');
pasisveikinimas; //nieko nedaro
//Duomenų gražinimas
function dauginti(sk1, sk2) {
    //console.log(`${sk1}*${sk2} = ${sk1*sk2}`); //nenaudoti
    return sk1*sk2;
}
console.log(dauginti(9,7));
dauginti(5,9);
dauginti(8,6);
let atsakymas=dauginti(12,26);
console.log(atsakymas);
console.groupEnd('1.Funkcija');
//
//              2. Kreipimasis į DOM

/* 
DOM- Document Object Model.
document.querySelector('#pressMe') - kreitimasi į HTML taga
document.addEventListener('veiksmas',keiciamDivaSmall) - kreimaisi įvykių laukimą. 
*/
console.groupCollapsed('2.Kreipimasis į DOM');
function keiciamDiva(){
    let divas=document.querySelector('#cantGetMe');
    console.log(divas);
    console.dir(divas);
    divas.style.fontSize  = '50px';  
};
//keiciamDiva();

function keiciamDivaSmall(){
    let divas=document.querySelector('#cantGetMe');
    console.log(divas);
    console.dir(divas);
    divas.style.fontSize  = '20px';  
};

document
    .querySelector('#pressMe')
    .addEventListener('mouseover',keiciamDiva);
document.addEventListener('click',keiciamDivaSmall); 
console.groupEnd('2.Kreipimasis į DOM');   

//              3.Metodas - methods
/* 
Metodas yra funkcija, kuri spriklauso kažkokiam elementui/objektui.

        Masyvų metodai

Masyvų koregavimas

pop() - išima iš galo  

shift() - išima iš pradžios 
 
push() - prideda prie galo  unshift() - prideda prie pradžios  

sort() - išrikiuoja abecelės tvarka.      Su skaičiais atsiranda problema. Ją reikia spręsti skliausteliuose pridedant "function(a,b){return a-b}".      Su lietuviškai simboliais atsiranda problema. Ją reikia spręsti skliausteliuose pridedant "function(a,b){return a.localeCompare(b)}".  

reverse() - apsuka masyvą.
  
concat(2,3,4...) - sujungia 1 su 2,3,4... masyvų/ais, bet jų nepakeičia.

splice(1,2,3,4,5...) - 1 pozicijoj prideda 3,4,5... elementą/us ir išima 2 kiekį elementų esančių toliau 

slice(1,2) - paima nuo 1 iki 2, bet masyvo nepakeičia  

*/
console.groupCollapsed('3.Metodas - methods');
const zemynai=['Europa', 'Azija', 'Afrika', 'Š.Amerika','P.Amerika','Antarktida','Australija']; //metodai pakeičia ir konstantas
console.log(zemynai);
console.log(zemynai.pop()); //išima paskutinį
console.log(zemynai.shift()); //išima pirmąjį
console.log(zemynai.push('Europa')); //prideda į galą
console.log(zemynai.unshift('Australija')); //prideda į pradžią
console.log(zemynai.reverse());//apverčia


const lietuvybes=['antis','šalis','ąsotis','ėdalas','namas', 'eglė', 'lubos','ėdžios'];
const skaiciai=[454,64,54,42,897,547,2156,215];
console.log ('Pagal skaičiaus simbolių ilgį:',skaiciai.sort());
console.log ('Nuo mažiausio iki ddidžiausio', skaiciai.sort((a,b)=>a-b));
console.log ('Nuo didžiausio iki mažiausio',skaiciai.sort((a,b)=>b-a));
console.log('Pagal Lietuvišką abėcėlę: ',lietuvybes.sort((a,b)=>a.localeCompare(b)));
console.log('Pagal Lietuvišką abėcėlę:??? ',lietuvybes.sort((a,b)=>a.charCodeAt(0)));

console.log('Paima nuo antro iki paskutinio:',lietuvybes.slice(1,-3));//nepakeičia masyve
console.log('Paima nuo antro iki paskutinio:',lietuvybes.splice(1, 2, 'nauja', 'dar'));//nepakeičia masyve

console.log('Apjungia du masyvus, nemutuoja masyvų:',lietuvybes.concat(zemynai));
console.log('Apjungia į 1 stringą:',lietuvybes+zemynai);
console.groupEnd('3.Metodas - methods');

//              4.Funkcijos su masyvais
console.group('4.Funkcijos su masyvais');
function spausdinuMasyvus (masyvas) {
    let nenoriuModifikuoti=masyvas.slice();
    while(nenoriuModifikuoti.length){
        console.log(``, nenoriuModifikuoti.shift());
    };
};
spausdinuMasyvus(skaiciai);
spausdinuMasyvus(lietuvybes);
spausdinuMasyvus(zemynai);





console.groupEnd('4.Funkcijos su masyvais');





