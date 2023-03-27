
console.groupCollapsed('0.Bandymai');

console.log('number.parseInt("99.91")',parseInt('99,91'));
console.log('toExponatial(99,91)',parseInt('99,91').toExponential());
let a='tėstas';
console.log(a.localeCompare('testas'));
console.log(a.padEnd(2,'*'));
console.groupEnd('0.Bandymai');
//-----------------------------------------
console.groupCollapsed('1.Boolean metodai ir properties');
let tiesa=true;
let netiesa=false;
let stringas=Boolean('namas');
console.log('tiesa',tiesa);
console.log('-----tiesa.toString()',tiesa.toString());

console.log('----tiesa.valueOf()',tiesa.valueOf());
console.log('netiesa.valueOf()',netiesa.valueOf());
console.log('stringas:',stringas);
console.log('------stringas.valueOf()',stringas.valueOf());

console.groupEnd('1.Boolean metodai ir properties');
//-------------------------------------------
console.groupCollapsed('2.Number metodai ir properties');
let x=3.7586688;
let y=2/3;
console.log('Number.EPSILON:',Number.EPSILON);
console.log('Number.MAX_SAFE_INTEGER:',Number.MAX_SAFE_INTEGER);
console.log('Number.MIN_SAFE_INTEGER:',Number.MIN_SAFE_INTEGER);
console.log('---------------MAX_VALUE:',Number.MAX_VALUE);
console.log('MAX_VALUE*2:',Number.MAX_VALUE*2);
console.log('--------POSITIVE_INFINITY/88888888888888:',Number.POSITIVE_INFINITY/88888888888);
console.log('Number.POSITIVE_INFINITY/Number.POSITIVE_INFINITY:',Number.POSITIVE_INFINITY/Number.POSITIVE_INFINITY);
console.log('Number.NEGATIVE_INFINITY:',Number.NEGATIVE_INFINITY);
console.log('Number.NaN:',Number.NaN);

console.log('Number.isFinite(Number.POSITIVE_INFINITY/Number.POSITIVE_INFINITY):',Number.isFinite(Number.POSITIVE_INFINITY/Number.POSITIVE_INFINITY));
console.log('Number.isInteger(5.1):',Number.isInteger(5.1));
console.log('Number.parceInt("5.9"):',Number.parseInt('5.9'));
console.log('Number.parseFloat("5.000001"):',Number.parseFloat('5.000001'));
console.log('Number.parseFloat(4.555555).toFixed(2):',Number.parseFloat(4.55555).toFixed(2));

console.groupEnd('2.Number metodai ir properties');
//-------------------------------------
console.groupCollapsed('3.Math metodai ir properties');

console.log('Number.parseFloat(Math.PI).toFixed(2):',Number.parseFloat(Math.PI).toFixed(2));
console.log('Math.E:',Math.E);
console.log('Math.abs(-9,669):',Math.abs(-9,669));
console.log('Math.cbrt(-125): ',Math.cbrt(-125));
console.log('Math.sqrt(25):', Math.sqrt(25));
console.log('Math.ceil(6.9335): ',Math.ceil(6.9335));
console.log('Math.floor(6.9666):',Math.floor(6.9666));
console.log('Math.hypot(x0-x1=5,y0-y1=6):',Math.hypot(5,6));
console.log('Math.sign(-5,95:)',Math.sign(-5,95),'Math.sign(8.9):', Math.sign(8.9));
console.log('Math.max(45,100,30):',Math.max(45,100,30));
console.log('Math.min(45,100,30):',Math.min(45,100,30));
console.log('Math.pow(5,3):',Math.pow(5,3));
console.log('Math.random()*77 -iki 0-77:',Math.round(Math.random()*77));


console.groupEnd('3.Math metodai ir properties');
//------------------------------------------------------------------------

console.group('4.String metodai ir properties');
let IlgasStringas=`A

Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, maiores.

Z`
console.log('------------------IlgasStringas BANDYMAMS----------------:', IlgasStringas);
console.log('-----------------------------------------------------------');
let string1=new String('TaikaM');
let stringM=['T','a','i','k','a']
console.log('let string1=new String("Taika") - Sukuriammas masyvas',string1);
let string2=String('Lėtas');
let stringWhiteSpace='           Whites      Space     ';
console.log('let string2= String("Taika") - sukuriamas stringas:',string2);
console.log('Išvedamas Stringas-String(8888): ',String(8888));

console.log('IlgasStringas.at(-1)):',IlgasStringas.at(-1));
console.log('IlgasStringas.charAt(1)-neina į minusą:',IlgasStringas.charAt(0));
console.log('string1.concat("_",string2):',string1.concat('_',string2));
console.log('string1.endsWith("aM"):',string1.endsWith('aM'));
console.log('string2.startsWith("Tai"):',string2.startsWith("Tai"));
console.log('IlgasStringas.includes("amet"):',IlgasStringas.includes("amet"));
console.log('string1.indexOf("a") - nerado B:',string1.indexOf("B"));
console.log('string1.lastIndexOf("a"):',string1.lastIndexOf("a"));
console.log('stringM.sort((c,d)=>c.localeCompare(d))) - išrųšiavimas dirba tik su masyvais:',stringM.sort((c,d)=>c.localeCompare(d)));
console.log('string1.localeCompare(string2) - nelygūs:',string1.localeCompare(string2));
console.log('string1.localeCompare("TaikaM") - lygūs',string1.localeCompare("TaikaM"));
console.log('string1.padEnd(9,"*"):',string1.padEnd(9,'*'));
console.log('string1.padStart(9,"*"):',string1.padStart(9,'*'));
console.log('string1.repeat(3):',string1.repeat(3));
console.log('Ar pasikeitė String1?-Ne:',string1);
console.log('String2:--------------',string2);
console.log('string2.slice(1,-1) - iškerpama nuo 1 iki paskutinio simbolio:',string2.slice(1,-1));
console.log('string2.slice(-3):',string2.slice(-3));
console.log('string2.substring(1,-1):',string2.substring(1,-1));
console.log('IlgasStringas.split(" ") - suformuoja masyva pagal "tarpus":',IlgasStringas.split(" "));
console.log('IlgasStringas.split("\n")- išskaido masyvą pagal paragrafus',IlgasStringas.split('\n'));
console.log('string2.toLocaleUpperCase("tr":',string2.toLocaleUpperCase('tr'));
console.log('string2.toUpperCase()):',string2.toUpperCase());
console.log('string2.toLocaleLowerCase("tr"):',string2.toLocaleLowerCase('tr'));
console.log('string2.toLowerCase():',string2.toLowerCase());
console.log('stringWhiteSpace:',stringWhiteSpace);
console.log('stringWhiteSpace.trim():',stringWhiteSpace.trim());
console.log('stringWhiteSpace.trimStart():',stringWhiteSpace.trimStart());
console.log('stringWhiteSpace.trimEnd():',stringWhiteSpace.trimEnd());
console.log('string1:',string1);
console.log('string1.valueOf()',string1.valueOf());
let didziosios=/[a-z]/g; // parenka visas didžiąsias
let lorem=['ipsum'];
console.dir(didziosios.valueOf());
console.log('IlgasStringas.match(didziosios):',IlgasStringas.match(didziosios));
console.log('IlgasStringas.match("Lorem")',IlgasStringas.match(lorem)); //neveikia nesuprantu
console.log('IlgasStringas.replaceAll(".","..."):',IlgasStringas.replaceAll('.','...'));
console.log('Ar pasikeitė?:',IlgasStringas);
console.log('',);

console.groupEnd('4.String metodai ir properties');

console.group('5.Masyvų neiteraciniai metodai ir properties');
let skaiciuMasyvas=[45,546,8799,98,6,23,47,96,487];
let zodziuMasyvas=['Diena','Vakaras', 'Rytas','Naktis']
console.log(skaiciuMasyvas);
console.log(zodziuMasyvas);
console.log('skaiciuMasyvas.at(-1):',skaiciuMasyvas.at(-1));
console.log('zodziuMasyvas(concat(skaiciuMasyvas)):',zodziuMasyvas.concat(skaiciuMasyvas));
console.log('zodziuMasyvas.copyWithin(3,0):',zodziuMasyvas.copyWithin(3,0));
console.log('Pasikeitė masyvas!!!',zodziuMasyvas);
let iter=zodziuMasyvas.entries();
console.log('zodziuMasyvas.entries("Vakaras"):',iter);
console.log(iter.next().value);
console.log(iter.next().value);
let fillM=[1,1,1,1];
console.log('FillM:',fillM);
fillM.fill(77,1,4);
console.log('fillM.fill(77,1,4)- pakeičia org masyvą:',fillM);
let unflat =[1,2,3,[4,[5.1,0],7]];
console.log(unflat);
console.log('unflat.flat():',unflat.flat());
console.log('unflat.flat(1)arba():',unflat.flat(1));
console.log('unflat.flat(2):',unflat.flat(2));
let fromM=Array.from(IlgasStringas);

console.log('let fromM=Array.from(IlgasStringas):',fromM);
console.log('Padaro kopiją masyvo unflat:',Array.from(unflat));
console.log('Array.of(unflat, fillM)- sukųrė iš masyvų',Array.of(unflat, fillM));
console.log('fillM.includes(77):',fillM.includes(77));
console.log('unflat[3][1].indexOf(5.1):',unflat[3][1].indexOf(5.1));
console.log('zodziuMasyvas.indexOf("Diena"):',zodziuMasyvas.indexOf('Diena'));
console.log('zodziuMasyvas.lastIndexOf("Diena"):',zodziuMasyvas.lastIndexOf('Diena'));
console.log('Array.isArray(string1):',Array.isArray(string1));
console.log('Array.isArray(zodziuMasyvas):',Array.isArray(zodziuMasyvas));
console.log(unflat);
console.log('unflat.join('*'):',unflat.join('*'));
console.log('',);
console.log('',);
console.groupEnd('5.Masyvų neiteraciniai metodai ir properties');

console.groupCollapsed('77.Funkcijos');




//              Funkcijos
function f_Vardas(par1,par2){
    return par1+par2;
};
console.log(f_Vardas(5,4));

const masyvasNeFunkcijos=['a','b','c','d'];
function masyvas_i_string(masyvas){
    console.log('Funkcija vyksta:');
    return masyvas.join(';');
}
let fAtsakymas=masyvas_i_string(masyvasNeFunkcijos);
console.log(fAtsakymas);

//                  CallbackFn
function rikiuotiSkaicius(sk1,sk2){
    console.log('Sk1 ir sk 2:',sk1, sk2);
    console.log(sk1-sk2);
    return sk1-sk2;
};


const nerikiuotasMasyvas= [0, 52, -150,5,-200, 41];
console.log('Nerikiuotas masyvas:',nerikiuotasMasyvas);
let rikiuotasMasyvas=nerikiuotasMasyvas.sort(rikiuotiSkaicius);
console.log('Nerikiuotas masyvas:',nerikiuotasMasyvas);
console.log('Išrikiuotas su Funkcija (a,b=>a-b):',rikiuotasMasyvas);
console.log('Nerikiuotas masyvas:',nerikiuotasMasyvas);
console.log('Išrikiuotas tik su SORT:',nerikiuotasMasyvas.sort());
console.log('Nerikiuotas masyvas:',nerikiuotasMasyvas);


//kitoks SORT rikiavimas be (a,b)=>a-b
console.log('---------------------------------');
const nerikiuotasMasyvas2= [0, 52, -150,5,-200, 41];

let fmasyvas=e=>{
let laikinasMTeig=[];
    let laikinasMNeig=[];
    for(let i=0;i<e.length;i++){
        if(e[i]>=0){
            laikinasMTeig.push(e[i]/Math.max(...e));
        }else{
            laikinasMNeig.push(e[i]/Math.max(...e));
        };
    };
    /* laikinasMTeig= */laikinasMTeig.sort();
    /* laikinasMNeig= */laikinasMNeig.sort(); //sort ir reverse pakeičia orginalų masyvą
    /* laikinasMNeig= */laikinasMNeig.reverse();
    let laikinasM=laikinasMNeig.concat(laikinasMTeig);
    let NaujasM=[];
    for(let i=0;i<laikinasM.length;i++){
        NaujasM.push(laikinasM[i]*Math.max(...e));
    }
    return NaujasM;
}
let IsrikiuotasM= fmasyvas(nerikiuotasMasyvas2);
console.log('Išrikiuotas su dalybos funkcija:',IsrikiuotasM);




//              Arrow funktion

const arrowFunkcija=(par1,par2)=>{ //skliaustelių nebūna, jei tik vienas parametras.
    return par2*par1;
};
let afAtsakymas=arrowFunkcija(5,6);
console.log (afAtsakymas);

//              Anoniminės funkcijos
(function(par,par2){
    return par+'atliekame veiksmus'+par2
});
(par1 => {return par1+'labas'});

console.groupEnd('77.Funkcijos');