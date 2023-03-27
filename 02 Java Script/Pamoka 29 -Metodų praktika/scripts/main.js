console.groupCollapsed('I.Iteracinių metodų užduotys')
//                      1.ForEach
console.log('------1 ir 2 .ForEach---------------------');

const cars = ["BMW", "VW", "Audi"];
console.log('Cars Masyvas:',cars);
cars.forEach((elementas,i)=>console.log(`Atomobilis ${i}:`,elementas));

console.log('------3. Draugų vardai Captionas----------');
let draugai=["peTras", "JonAs", "aNTanaS","ramūNas","edgAraS"];
console.log('Masyvas Draugai:',draugai);
let draugaiCap=draugai.map(elm=>{
    let pirmaR=elm.charAt(0).toUpperCase();
    let likusios=elm.slice(1).toLowerCase();  
    return pirmaR.concat(likusios);
});
console.log('Caption Masyvas:',draugaiCap);
console.log('-------------4. Draugai jau vyresni nei 18--------------');
let draugaiM=[
            {amzius:46,vardas:'Ramūnas'},
            {amzius:47,vardas:'Edgaras'},
            {amzius:11,vardas:'Linas'},
            {amzius:18,vardas:'Ąžuolas'},
        ];
console.log('Draugų masyvas su amžiumi:',draugaiM);
let suaugeDraugai=draugaiM.filter((elm)=>{return elm.amzius>=18});
console.log('Draugai 18+:',suaugeDraugai);


console.log('----------5.Miestai iš K su find-----------------');
const miestai=["VILNIUS", "KAUNAS",'Šiauliai', 'kėdainiai'];
console.log('Miestų masyvas:',miestai);
let ImiestasK=miestai.find(elm=>elm.toLowerCase().at(0)==='k');

console.log('Pirmasis masyve miestas iš K raidės:',ImiestasK);

console.log('-----6.Ar yra bent vienas miestas iš K raidės su some---------');
let ArmiestasK=miestai.some(elm=>elm.at(0)===elm.at(0).toLowerCase());
console.log('Ar yra miestas prasideda iš Mažosios?:',ArmiestasK);

console.log('------7.Ar miestai visi iš Didžiosios? ---------------------------');
let ArmiestasD=miestai.every(elm=>elm.at(0)===elm.at(0).toUpperCase());
console.log('7.Ar miestai visi iš Didžiosios?',ArmiestasD);


console.groupEnd('I.Iteracinių metodų užduotys');



//                      Destuktūrizacija

console.groupCollapsed('II.Destruktūrizacija');
console.log('-----1.Du kintamiesius iš masyvo-------------------',);
let skMasyvas=[44.69,54,65,45,15,36];
console.log('Skaičių pradinis masyvas',skMasyvas);
let [,,sk1,...likutis]=skMasyvas;
console.log('1-skMasyvas[2], 2 - visi likę:',sk1,likutis);

console.log('------2. 4-is kintamuosius ių Objekto-----------------',);
let asmuo={
    vardas:'Darius',
    akys:undefined,
    lytis:{
        vyras:true,
        moteris:false
        },
    amzius:46,
    aukstis:179,
    plaukai:'šatenas'};
    console.log('Orginalus objektas:',asmuo);
let {
    vardas:vardukas,
    akys='nenustatyta',
    lytis:{vyras},
    lytis:{moteris:moteriske}
}=asmuo;
console.log('Vardukas:',vardukas,'Akys:',akys,'Vyras:',vyras,'Moteriske:',moteriske);

console.log('---------3. --------------',);
console.log('Skaičių orginalus masyvas:',skMasyvas);
let [,,,...masyvasLike]=skMasyvas;
console.log('Masyvas iš skaičių masyvo neįtraukiant pirmų 3 elementų:',masyvasLike);

console.log('---------4.Sukeisti reikšme--------------',);
let a='Pirmas';
let b='Antras';
console.log('Nesukeista A ir B:',a,b);
[a,b]=[b,a];
console.log('Sukeisti duomenys A ir B:',a,b);

console.groupEnd('II.Destruktūrizacija');








console.groupCollapsed('III.Uždaviniai - forEach, filter, reduce, map');
console.log('-----1.Masyvo sukūrimas------------------',);
let meniu=[
    {id:0, patiekalas:"Burgeris", turime:true, savikaina:0.3, kaina:1},
    {id:1, patiekalas:"Bulvytės", turime:false, savikaina:0.1, kaina:0.9},
    {id:2, patiekalas:"Žemaičių blynai", turime:true, savikaina:0.7, kaina:1.9},
    {id:3, patiekalas:"Cepelinai", turime:false, savikaina:2, kaina:8},
    {id:4, patiekalas:"Mažas Burgeris", turime:true, savikaina:0.2, kaina:0.7},
    {id:5, patiekalas:"Kava", turime:true, savikaina:0.1, kaina:1},
    {id:6, patiekalas:"Gira", turime:false, savikaina:0.2, kaina:1.5},
    {id:7, patiekalas:"Alus", turime:true, savikaina:0.2, kaina:2.5},
    {id:8, patiekalas:"Pyragaitis", turime:false, savikaina:0.9, kaina:4},
    {id:9, patiekalas:"Tortas", turime:true, savikaina:1.5, kaina:11},
];
console.log('Meniu:',meniu);

console.log('------2.forEach į konsolę-----------------',);
meniu.forEach(elm=>console.log(elm));
console.log('------3. forEach išvestipatiekalu pavadinimus ir kainas----------',);
meniu.forEach(elm=>console.log(elm.patiekalas,':',elm.kaina,'Eur'));
console.log('-------4. Išfiltruoti turimus----------------',);
let onstock=[];
for(let i=0;i<meniu.length;i++){
    if (meniu[i].turime){
        onstock.push(meniu[i]);
    };
};
console.log('Turime vietoje:',onstock);

console.log('------4.1 Map - patiekalas su Pelnu----------',);
let pelnasM=onstock.map((elm)=>{ 
    return {patiekalas:elm.patiekalas,pelnas:elm.kaina-elm.savikaina};
});
console.log('Naujas masyva su pelnu:',pelnasM);

console.log('------4.2 -----------------');
let uzsM=[meniu.map((elm)=>{ 
    return {patiekalas:elm.patiekalas,kaina:elm.kaina,parduotaKiekis:Math.ceil(Math.random()*10)};
}),meniu.map((elm)=>{ 
    return {patiekalas:elm.patiekalas,kaina:elm.kaina,parduotaKiekis:Math.ceil(Math.random()*10)};
})];
console.log('Du dideli užsakymai:',uzsM);
console.log('------4.3-4.44-----------------',);
let uzsakymuPelnas=uzsM.map(uzs=>{
        return uzs.map(ePajM=>{
            return ePajM.kaina * ePajM.parduotaKiekis;
        }).reduce((a,b)=>a+b);   
}) ;          
console.log('Baliu Kainos:',uzsakymuPelnas);

console.log('-------5. Išfiltruoti----------------');

let filterM=meniu.filter(elm=>elm.id>4 && elm.kaina>2 && elm.kaina<10);
console.log('Filtravimas 5:',filterM);

console.log('-------6. Nerikiuotas sąrašas----------------');

let query=document.querySelector('#ul');
let ul = document.createElement('ul');
query.appendChild(ul);
let li=meniu.map(elm=>{
    //Pirmas gylis
    document.querySelector('#ul');
    let list=document.createElement('li');
    let listFill=document.createTextNode(elm.patiekalas);
    list.appendChild(listFill);
    ul.appendChild(list);
    //Antras Gylis
    let ul1=document.createElement('ul');
    list.appendChild(ul1);
    let list1=document.createElement('li');
    ul1.appendChild(list1);
    let kainaText=document.createTextNode(`Kaina - ${elm.kaina}Eur`);
    list1.appendChild(kainaText);
    let list2= document.createElement('li');
    let turimeText= document.createTextNode(`Turime vietoje - ${elm.turime}.`);
    list2.appendChild(turimeText);
    ul1.appendChild(list2);
    // Brūkšnys
    let hr=document.createElement('hr');
    ul.appendChild(hr);
});
console.log(ul);

console.groupEnd('III.Uždaviniai - forEach, filter, reduce, map');



//                      