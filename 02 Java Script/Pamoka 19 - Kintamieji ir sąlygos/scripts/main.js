/*                           Kintamieji -variable

NaN, null,undefined - ir daugiau nesvarbūs

    1.    objektas - object - {}
Grupuoti kintamuosius, kai nori, kad jie turėtų savo pavadinimus - eiliškumas nesvarbus.
Objekte esantis kintamasis susideda iš 2 dalių -raktinisŽodis:reikšmė. Objekto viduje gali buti kitas objektas ar masyvas.    

    2.    masyvas - array - []
Grupuoti kintamuosius, bet eiliškumas svarbus, o kintamieji viduje neturi turėti pavadinimo. Vardinti duomenis susijusias tarpusavyje.

Tiek objektas, tiek masyvas yra konteineriniai kintamieji(jų viduje talpinami kiti kintamieji).

*/

let asmuo1={
    vardas:'Darius',
    pavarde: 'Šilinskas',
    vedes: true,
    amzius: 46    
};
/* console.group('Objektai'); */

console.groupCollapsed('Objektai');
console.log(asmuo1);
console.log(asmuo1.pavarde);
asmuo1.pavarde='ŠILINSKAS';  /* pakeisti duomenis */
console.log(asmuo1.pavarde);
console.groupEnd('Objektai');

asmuo1.plaukuSpalva="šatenas";




let transportoPriemones=[
    "dviratis",
    "mašina",
    'lėktuvas',
    'valtis',
    'raketa'
];
/* pakeičia sekanti rašymą */
console.groupCollapsed('Masyvas');
let transportoPriemone1='dviratis';
let transportoPriemone2='mašina';
console.log(transportoPriemones);
console.log(transportoPriemones[1]);
console.log(transportoPriemones.length);
transportoPriemones[7]='jachta';
console.groupEnd('Masyvas');


let asmenys=[
    {
    vardas:'Darius',
    pavarde: 'Šilinskas',
    vedes: true,
    amzius: 46,
    pomegiai:['dviračiai','astronomija'],
    gyvenamojiVieta:{
        planeta:'Žemė',
        zemysnas:'Europa',
        salis:'Lietuva'
        }       
    },

    {
    vardas:'Petras',
    pavarde: 'Petraitis',
    vedes: false,
    amzius: 50,
    pomegiai:['rūkymas','astronomija'],
    gyvenamojiVieta:{
        planeta:'Žemė',
        zemysnas:'Europa',
        salis:'Girliandija'
        }       
    }
];
console.groupCollapsed ('Masyvas sudėtingas su Objektu');
console.log(asmenys);
console.log(asmenys[1]);
console.log(asmenys[1].vardas);
console.log(asmenys[0].pomegiai[1]);

asmenys[0].pomegiai[3]='valgymas';
console.groupEnd('Masyvas sudėtingas su Objektu');

let masyvasMasyve=[1, 'labas', [5,9,11,15], ['begti','lekti', 'skuosti']];

console.groupCollapsed ('Masyvas masyve');
console.log(masyvasMasyve[3][2]);

console.groupEnd('Masyvas masyve');

                                    


 /*                    Sąlygos -  condition

            Loginiai aperatoriai:
            NOT - ! - apverčia reikšmę;
            OR - ||- arba;
            AND - && - ir;

            Sąlygos
            if - Else if - else
            switch - 
            ternary - 

            Truthy ir falsy

            reikšmės gražins tiesa arba mela kai bus idetos salygos vidu
                Truthy              |     Falsy
            skaiciai apart 0                0
            netuščias string                tuščias string
            masyvas                         null
            objektas                        undefined
*/
console.groupCollapsed('Loginiai operatoriai');
console.log(true||true); //true
console.log(true||false); //true
console.log(false||false); //flase
console.log(true&&true);//true
console.log(true&&false);//
console.log(false&&false);
console.log(!false&&false);
console.groupEnd('Loginiai operatoriai');

console.groupCollapsed ('If condition');
let amzius=14;
if(amzius>=18 && amzius<=65) {
    console.log('darbingas');
}
else if(amzius>65 && amzius<100)
{
    console.log('senjoras');
}
else if(amzius>=0 && amzius<=18)
{
    console.log('nepilnametis');
    if(amzius<=6){
        console.log('ikimokyklinis');
    }
    else {
        console.log('mokinys');
    } 
}
else{
    console.log('klaida, ar tikrai dar gyvas!!!!');  
};
console.groupEnd('If condition');


console.groupCollapsed ('If  truhy/falsy');

if('') {
    console.log('tiesa');
}
else {
    console.log('melas');
}
console.groupEnd('If  truhy/falsy')
