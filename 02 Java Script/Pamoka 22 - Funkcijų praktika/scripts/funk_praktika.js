//                  1. 4 Funkcijos su operatoriai

console.groupCollapsed(`1. 4 Funkcijos su operatoriai`);

function suma(x,y) {
    let a=x+y;
    return a;
};
console.log(`${suma(4,9)}=${4}+${9}`);

console.log(`--------------`);
function atimtis(x,y) {
    let a=x-y;
    return a;
};
console.log(`${atimtis(4,9)}=${4}-${9}`);
console.log(`--------------`);
function daugyba(x,y) {
    let a=x*y;
    return a;
};
console.log(`${daugyba(4,9)}=${4}*${9}`);
console.log(`--------------`);
function dalyba(x,y) {
    let a=x/y;
    return a;
};
console.log(`${dalyba(4,9)}=${4}:${9}`);
console.log(`--------------`);
function laipsniu(x,y) {
    let a=x**y;
    return a;
};
console.log(`${laipsniu(4,3)}=${4}^${3}`);
console.log(`--------------`);
function saknis(x,y) {
    let a=x**(1/y);
    return a;
};
console.log(`${saknis(127,3)}=${127}^1/${3}`);

console.groupEnd(`1. 4 Funkcijos su operatoriai`);

//                  2. Išvesti masyvą iš eilės.

console.groupCollapsed(`2. Išvesti masyvą iš eilės.`);

let skMasyvas=[];
for(let i=0;i<14;i++) {
    let duomuo=parseInt(Math.random()*100);
    skMasyvas.push(duomuo);
}
console.log(`Random Masyvas iš 14:`, skMasyvas);

function MasyvoDuomIsv(){
    for (let i=0;i<skMasyvas.length;i++){
        console.log(skMasyvas[i]);
    }
};
MasyvoDuomIsv();

console.groupEnd(`2. Išvesti masyvą iš eilės.`);

//                  3. 4 Išvesti mąsyvą atvirkščiai

console.groupCollapsed(`3. 4 Išvesti mąsyvą atvirkščiai`);
console.log(`Random Masyvas iš 14:`, skMasyvas);
function MasyvoDuomAtvirkciai(){
    console.log(`Atvirkščiai:`,skMasyvas.reverse());
};
console.log(MasyvoDuomAtvirkciai());
console.groupEnd(`3. 4 Išvesti mąsyvą atvirkščiai`);

//                  4. Surikiuoti String masyvą pagal abėcėlę

console.groupCollapsed(`4. Surikiuoti String masyvą pagal abėcėlę`);
let stringMasyvas=[`Išvesti`,`ąsotis`,`mąsyvą`,`antis`,`įnagis`,`Žara`,`Zita`];
console.log(`Masyvas prieš:`,stringMasyvas);
function StringMasyvasABC(masyvas) {
    console.log('Surikiuoti String masyvą pagal abėcėlę',masyvas.sort((a,b)=>a.localeCompare(b)));
};
StringMasyvasABC(stringMasyvas);
console.log(`Masyvas Po:`,stringMasyvas);

console.groupEnd(`4. Surikiuoti String masyvą pagal abėcėlę`);

//                  5. Skaičių masyvas nuo didžiausio iki mažiausio

console.groupCollapsed(`5. Skaičių masyvas nuo didžiausio iki mažiausio`);
console.log(`Random Masyvas iš 14:`, skMasyvas);
function skMasyvasDid (masyvas){
    console.log(`Skaičių masyvas nuo didžiausio iki mažiausi`, masyvas.sort((a,b)=>b-a));
};
skMasyvasDid(skMasyvas);
console.log(`Kaip masyvas pasikeitė:`, skMasyvas);
console.groupEnd(`5. Skaičių masyvas nuo didžiausio iki mažiausio`);

//                  6. Sukurti Masyva nuo sk1 iki sk2 iš eilės

console.groupCollapsed(`6. Sukurti Masyva nuo sk1 iki sk2 iš eilės`);
let masyvasXY=[];
function sukurtiMasyvaXY(x,y) {
    for(i=x;i<=y;i++){
        masyvasXY.push(i);
    };
};
sukurtiMasyvaXY(15,33);
console.log(`Gautas Masyvas:`,masyvasXY);
console.groupEnd(`6. Sukurti Masyva nuo sk1 iki sk2 iš eilės`);

//                  7.Skaičiai X-didinimas, Y- pradžia, Z-pabaiga

console.groupCollapsed(`7.Skaičiai X-didinimas, Y- pradžia, Z-pabaiga`);
let masyvasDidetiXYZ=[];
function sukurtiDidMasyvaXYY(x,y,z) {
    for(i=y;i<=z;i+=x){
        masyvasDidetiXYZ.push(i);
    };
};
sukurtiDidMasyvaXYY(3,10,30);
console.log(`Gautas Masyvas:`,masyvasDidetiXYZ);
console.groupEnd(`7.Skaičiai X-didinimas, Y- pradžia, Z-pabaiga`);

//                  8. Apjungs du String parametrus ir išves simbolių skaičių.

console.groupCollapsed(`8. Apjungs du String parametrus ir išves simbolių skaičių.`);

function apjString(a,b,c){
    let mString2=[a,b,c];
    console.log(`A. Apjungimas masyvuose: `,mString2[0].concat(mString2[1],mString2[1]));
    let g=mString2[0].concat(mString2[1],mString2[1]);
    console.log(`A.Žodžių iš masyvo bendrasilgis:`,g.length);
};
apjString(`namas`,'pecius',`kaminas`)

function apjString2(a,b){
    console.log(`B.Apjungti stringai:`,a.concat(b));
    let c=a.concat(b);
    console.log(`B.Naujo stringo ilgis:`,c.length);
};
apjString2(`namas`,'pecius') 
console.groupEnd(`8. Apjungs du String parametrus ir išves simbolių skaičių.`);

//                  9. Abėcėlei priskiriamas skaitmuo

console.groupCollapsed(`9. Abėcėlei priskiriamas skaitmuo`);

let abecele=[`a`,`ą`,`b`,`c`,`č`,`d`,`e`,`ę`,`ė`,`f`,`g`,`h`,`i`,`į`,`y`,`j`,`k`,`l`,`m`,`n`,`o`,`p`,`r`,`s`,`š`,`t`,`u`,`ų`,`ū`,`v`,`z`,`ž`];
console.log(`Lietuviškų raidžių sąrašas:`,abecele);
function skIraides(a) {
    console.log(`${a}-a abėlėlės raidė yra: `,abecele[a-1]);
};
skIraides(17);
console.groupEnd(`9. Abėcėlei priskiriamas skaitmuo`);

//                  10. Funkcija X, Y ir  operatoriai(+-*/)

console.groupCollapsed(`10. Funkcija X, Y ir  operatoriai(+-*/^ @(kaipšaknis))`);
function skaiciuotuvas (x,y,o){
    let atsakymas=0;
    if(o==='+'){
        atsakymas=x+y;
        console.log(`${x}+${y}=${atsakymas}`);
    }else if(o==='-') {
        atsakymas=x-y;
        console.log(`${x}-${y}=${atsakymas}`);
    }else if(o==='*') {
        atsakymas=x*y;
        console.log(`${x}*${y}=${atsakymas}`);
    }else if(o==='/') {
        atsakymas=x/y;
        console.log(`${x}:${y}=${atsakymas}`);
    }else if(o==='^') {
        atsakymas=x**y;
        console.log(`${x}^${y}=${atsakymas}`);
    }else if(o==='@') {
        atsakymas=x**(1/y);
        console.log(`${x}šaknis${y}=${atsakymas}`);
    }else{
        console.log('Klaida!');
    }
};
skaiciuotuvas(2,6,'+');
skaiciuotuvas(2,6,'-');
skaiciuotuvas(2,6,'*');
skaiciuotuvas(36,6,'/');
skaiciuotuvas(11,2,'^');
skaiciuotuvas(125,3,'@');
console.groupEnd(`10. Funkcija X, Y ir  operatoriai(+-*/)`);

//                  11. Dvi funkcijos:

/* 
Math.random
Math.ceil
Math.floor
Math.round
number.toFixed (3)  - 9,9999999999 => 9,999
*/

console.groupCollapsed(`11. Dvi funkcijos:`);

function randomsk (){
    let randomX=parseInt(Math.random()*10);
    console.log(`Atsitiktinis skaičius iki 10:`,randomX);
    return randomX;
};
function kvadratu (randomX) {
    console.log(`Skaičius pakeltas kvadratu:`,randomX**2)
};
kvadratu(randomsk());
//randomsk();

console.groupEnd(`11. Dvi funkcijos:`);


//                  77. 4 Funkcijos su operatoriai

/* console.groupCollapsed(`77. 4 Funkcijos su operatoriai`);

console.groupEnd(`77. 4 Funkcijos su operatoriai`); */