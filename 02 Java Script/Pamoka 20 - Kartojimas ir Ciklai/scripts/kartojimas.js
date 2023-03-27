//                  Kintamieji
//backtikas - kitoks kabučių naudojimas

console.groupCollapsed('1.Backtikas');
let vardas ='Darius';
console.log('Labs '+ vardas+' daug \n teksto + galiausiai šis teksta pasidaro perkrautas ');
console.log(`Galime rašyti kabutes viduje - a'; 
galima daryti eilučių lūžius;
galima naudoti vietoj + - '$' ${vardas} ${true||false}
`);
console.log( ' lorem ' );
console.groupEnd('1.Backtikas');

console.groupCollapsed('2.Filmų masyvas');

let filmas={
    pavadinimas:'Rambo',
    leidimoMetai: 2008,
    rezisierius: 'S.Stallone',
    movieLength: '91 min',
    aktoriai: [
        {
            aktorius:'Sylvester Stalone',
            personazas: 'Rembo'
        },{
            aktorius:'Jullie Benz',
            personazas: 'asilas'
        },{
            aktorius:'Paul Schulze',
            personazas: 'lenkas'
        },{
            aktorius:'Metthew Marschden',
            personazas: 'kiaulė'
        }
    ]
}
console.log(filmas);

let filmai=[
    {
        pavadinimas:'Rambo',
        leidimoMetai: 2008,
        rezisierius: 'S.Stallone',
        movieLength: '91 min',
        aktoriai: [
            {
                aktorius:'Sylvester Stalone',
                personazas: 'Rembo'
            },{
                aktorius:'Jullie Benz',
                personazas: 'asilas'
            },{
                aktorius:'Paul Schulze',
                personazas: 'lenkas'
            },{
                aktorius:'Metthew Marschden',
                personazas: 'kiaulė'
            }
        ]  
    },{
        pavadinimas:'Pul fiction',
        leidimoMetai: 1994,
        rezisierius: 'Quentin Tarantino',
        movieLength: '154 min',
        aktoriai: [
            {
                aktorius:'John Travolta',
                personazas: 'Vincent Vega'
            },{
                aktorius:'Samuel L.Jackson',
                personazas: 'Jules Winnfied'
            },{
                aktorius:'Uma Turman Schulze',
                personazas: 'Mia Wallace'
            },{
                aktorius:'Harvey Keitel Marschden',
                personazas: 'Winston Wolfe'
            }
        ]    
    }
]
console.log(filmai);
console.log(filmai[1]);
console.log(filmai[1].aktoriai);
console.log(filmai[1].aktoriai[1]);
console.log(filmai[1].aktoriai[1].personazas);
console.groupEnd('2.Filmų masyvas');

//                  Sąlygos
console.group('3.Sąlygos')
let skaicius=5;
if (5>skaicius) {
    console.log(`5 daugiau už ${skaicius}`);
}else if(5<skaicius) {
    console.log(`5 mažiau už ${skaicius}`);
}else {
    console.log(`5 lygu ${skaicius}`);
}
//

let didelisSkaicius=48;
if(didelisSkaicius>=100) {
    console.log('Didelis skaičius');
}else if (didelisSkaicius<100&&didelisSkaicius%2){
    console.log('Ne toks ir didelis, bet nelyginis');
}else{
    console.log('Su ELSE gaudome kitus variantus - Ne skaičius');
}


console.groupEnd('3.Sąlygos');

