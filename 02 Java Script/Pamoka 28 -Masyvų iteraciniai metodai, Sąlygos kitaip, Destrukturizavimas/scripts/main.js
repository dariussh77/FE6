console.groupCollapsed('Masyvu iteraciniai metodai');
const masyvas=['A','b','c','D','a','b','c','d','a','b','c','d','a']

//                 1. ForEach metodas -neatliekantis return ir be break
console.groupCollapsed('1. ForEach metodas');

for(let i=0;i<masyvas.length;i++){
    console.log(i,masyvas[i])
};
console.log('-------------------------------------');
masyvas.forEach((elementas,i)=>{
    console.log(i,elementas);
})


console.groupEnd('1. ForEach metodas');

console.groupCollapsed('2. Filter metodas');

let masyvasBeAFor=[];
for(let i=0;i<masyvas.length;i++){
    if(masyvas[i]!=='a'){
        masyvasBeAFor.push(masyvas[i]);
    }
};
console.log(masyvasBeAFor);
console.log('---------------------------');
let masyvasBeAFilter=masyvas.filter((elementas)=>{
    if(elementas!=='a'){
        return elementas;
    }
});
console.log(masyvasBeAFilter);


console.groupEnd('2. Filter metodas');
//                      3.MAp Metodas      
console.groupCollapsed('3. MAp metodas');
let mutuotasSuFor=[];
for(let i=0;i<masyvas.length;i++){
    if(masyvas[i]!=='a'){
        mutuotasSuFor.push(':)'+ masyvas[i]);
    }
};
console.log(mutuotasSuFor);
console.log('-----------------------------------');
let mutuotasSuMap=masyvas.map(elementas=>{return ';)'+elementas});
console.log(mutuotasSuMap);

console.groupEnd('3. MAp metodas');
//              4.Reduce Metodas
console.groupCollapsed('4. Reduce metodas');
//for be initial
let reduceForBe='';
for(let i=0;i<masyvas.length;i++){
    reduceForBe+=masyvas[i];
}
console.log(reduceForBe);
console.log('----------------------');
let reduceForSu='pradinė reikšmė';
for(let i=0;i<masyvas.length;i++){
    reduceForSu+=masyvas[i];
}
console.log(reduceForBe);

console.log('---------------------------------------');

let reduceBe=masyvas.reduce((acc,curr)=>{return acc+curr;})
console.log(reduceBe);

console.log('---------------------------');

let reduceSu=masyvas.reduce((acc,curr)=>{return acc+curr;}, 'pradinė reikšmė')
console.log(reduceSu);

console.groupEnd('4. Reduce metodas');
//          5. Some metodas
console.groupCollapsed('5. Some metodas');


let someAts=masyvas.some(letter=>{return letter ===letter.toLowerCase()});
console.log('Ar bent viena raidė yra mažoji?:',someAts);
console.groupEnd('5. Some metodas');


//          6. Every metodas
console.groupCollapsed('6. Every metodas');


let everyAts=masyvas.every(letter=>{return letter===letter.toLowerCase()});
console.log('Ar visos mažosios?:',everyAts);
console.groupEnd('6. Every metodas');

//          7. FindIndex metodas
console.groupCollapsed('7. FindIndex metodas');


let finIndexAts=masyvas.findIndex(letter=>{return letter===letter.toUpperCase()});
console.log('Koks ideksas diziuju?:',finIndexAts); 
console.groupEnd('7. FindIndex metodas');
//          8. FindLastIndex metodas
console.groupCollapsed('8. FindLastIndex metodas');


let finLastIndexAts=masyvas.findLastIndex(letter=>{return letter===letter.toUpperCase()});
console.log('Koks ideksas diziuju?:',finLastIndexAts); 
console.groupEnd('8. FindLastIndex metodas');
console.groupEnd('Masyvu iteraciniai metodai');

///
//////////                  Conditions

console.groupCollapsed('Conditions');
let amzius =8;
console.log('------------IF----------------');
if(amzius>18){
    console.log('Pilnametis');
}else{
    console.log('Nepilnametis');
}

console.log('------------Ternary----------------');
amzius>18?console.log('Pilnametis')
    :amzius>7?console.log('Jau ne vaikas')
    :console.log('Vaikas');

console.log('------------Logical And be else-----------');
amzius>18 && console.log('Pilnametis');

console.groupEnd('Conditions');
///                 Destrukturizvimas
///         Masyvai
console.groupCollapsed('Destruktūrizavimas');
console.groupCollapsed('1.Masyvai');
let masyvasBDes=['labas','viso','labanakt',undefined,9,3,4];
console.log(masyvasBDes);
console.log('---------Masyvas be destruktūrizavimo--------------');
let el1=masyvasBDes[0];
let el2=masyvasBDes[1];
let el3=masyvasBDes[2];
let el4=masyvasBDes[3] ? masyvasBDes[3]:'77';
console.log(el1,el2,el3,el4);

console.log('---------Masyvas su destruktūrizavimu------------');
let[em0,,em2,em3='77',...emLikutis]=masyvasBDes
console.log(em0,em2,em3,emLikutis);

console.groupEnd('1.Masyvai');
//////              Objektai
console.groupCollapsed('2.Objektai');
let asmuo={
    vardas:'Darius',
    lytis: 'vyras',
    ugis: 179,
    gyvena: {šalis:'Lietuva', miestas:'Širvintos'},
    spalva: 'šatenas',
    vedes: true
};

let { vardas:dVardas, lytis:dLytis, ugis:dUgis,gyvena:{miestas:dmiestas},vairuotojoTeises='Neturi', ...likutis }=asmuo;
console.log(dVardas,dLytis,dUgis,dmiestas,vairuotojoTeises,likutis);




console.groupEnd('2.Objektai');


//                              Funkcijos
console.groupCollapsed('3.Funkcijos');

function sudetis(sk1,sk2,...skN){
    return sk1+sk2+skN.reduce((acc,curr)=>acc+curr,0);
}
console.log(sudetis(1,5,6,8,7));

console.groupEnd('3.Funkcijos');
//          Sukeitimas vietomis kintamuosiuose

console.groupCollapsed('4.Sukeitimas vietomis duomenų');
let a='labas';
let b='labanaktis';
console.log(a,b);
/* let laikinas=a;
a=b;
b=laikinas */
[a,b]=[b,a];
console.log(a,b);

console.groupEnd('4.Sukeitimas vietomis duomenų');



console.groupEnd('Destruktūrizavimas');



