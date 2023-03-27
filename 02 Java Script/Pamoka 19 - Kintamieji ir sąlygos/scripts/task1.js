
//1.1
console.group('1.Sukurti masyva ir objektą')


let daina={
    stilius:'rap',
    atlikejas:'Eminem',
    metai:1999,
    salis:'US',
    gramy:true,
    ploksteles:1820
};
console.log('(Objektas is 6):',daina);
console.log('Atlikėjas:',daina.atlikejas);
console.log('Dainos metai:',daina.metai);
//1.2
let menesiai=['sausis','vasaris','kovas','balandis','gegužė','birželis','liepa','rugpjūtis', 'rugsėjis', 'spalis','lapkritis','gruodis'];
console.log('(Masyvas is 6):',menesiai);
console.log('7 mėnuo:',menesiai[6]);
console.log('10 mėnuo:',menesiai[9]);


//1.3


let metuLaikai=[
    [
        'gruodis',
        'sausis', 
        'vasaris'
    ],
    [
        'kovas',
        'balandis', 
        'gegužė'
    ],
    [
        'birželis',
        'liepa', 
        'rugpjutis'
    ],
    [
        'rugsėjis',
        'spalis', 
        'lapkritis'
    ]
];
console.log('(Masyvas masyve)',metuLaikai);
console.log('Vasaros(2)-Antras mėnuo:',metuLaikai[2][1]);
console.log('Rudens(2)-Trečias mėnuo:',metuLaikai[3][2]);
console.log('Pavasario(2)-Pirmas mėnuo:',metuLaikai[1][0]);
//1.4

let MetuLaikai=[
    {
        gime: 'Edgaras',
        sniegas:true,
        žolė:false,
        dienusk: 89  
    },
    {
        gime: 'Darius',
        sniegas:true,
        žolė:true,
        dienusk: 92
    },
    {
        gime: 'Daiva',
        sniegas:false,
        žolė:true,
        dienusk: 90
    },
    {
        gime: 'Evilija',
        sniegas:true,
        žolė:true,
        dienusk: 91
    }
];
console.log('(Objektas Masyve)',MetuLaikai);
console.log('Rudeni gimė:',MetuLaikai[3].gime);
console.log('Žiemą gimė:',MetuLaikai[0].gime);
console.log('Kiek vasara dienu?:',MetuLaikai[2].dienusk);


//1.5 
let dainos={
    pavadinimas:'Hot',
    stilius:'rap',
    atlikejas:'Eminem',
    metai:1999,
    salis:'US',
    gramy:true,
    ploksteles:1820,
    topuose:[2007.2,2007.6,2008.1,2008.7]
};
console.log('(Masyvas-objekte)',dainos);
console.log('Pirmas kartas topuose:',dainos.topuose[0]);
console.log('Trečias kartas topuose:',dainos.topuose[2]);
console.log('Dainos pavadinimas:',dainos.pavadinimas);

//1.6
let MetuLaikaiOb={
    ziema:{
        gime: 'Edgaras',
        sniegas:true,
        zole:false,
        dienusk: 89  
    },
    pavasaris:{
        gime: 'Darius',
        sniegas:true,
        zole:true,
        dienusk: 92
    },
    vasara:{
        gime: 'Daiva',
        sniegas:false,
        zole:true,
        dienusk: 90
    },
    ruduo:{
        gime: 'Evilija',
        sniegas:true,
        zole:true,
        dienusk: 91
    }
};
console.log('(Objektas-objekte)',MetuLaikaiOb);
console.log('Ar Vasara sninga?:',MetuLaikaiOb.vasara.sniegas);
console.log('Ar Rudeni sninga?:',MetuLaikaiOb.ruduo.sniegas);
console.log('Ar žolė auga žiemą?:',MetuLaikaiOb.ziema.zole);
console.groupEnd('1.Sukurti masyva ir objektą');

//2. Išvestis - padaryta 1 punkte.
console.group('2.Išvestis');
console.log('Atlikta 1 dalyje');
console.groupEnd('Išvestis');
//3. Parašyti sąlygą, kuri tikrintų ar turi vairuotojo teises.
console.group('3.Teisės');
console.log('Padaryta su Window.alert!!!');
let teises='...';
let automobilis='...';
let blaivumas='...';
teises = window.prompt("Ar turite teises?: taip/ne",'taip');

if(teises==="taip") {
    automobilis=window.prompt('Ar turite automobilį?','ne');
    if(automobilis==='taip') {
        blaivumas=window.prompt('Ar šiandien gėrėte?','taip');
        if(blaivumas==='taip') {
            window.alert('Praeikite su manimi :(');
        }
        else{
            window.alert('Galite važiuoti');
            
        }
    }
    else {
        window.alert('Linkiu įsigyti Auto');
    }
}
else {
    
    if(teises===null) {
        window.alert('Su ausimis negerai?  :(')
    }
    else{
        window.alert('Gero pasivaikščiojimo');
    }
}
console.log(teises);
console.groupEnd('3.Teisės');
