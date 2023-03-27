//                  Masyvo generavimas
let skaiciaiM=[];
for(let i=0;i<14;i++) {
    let skaiciusR=parseInt(Math.random()*100);
    skaiciaiM.push(skaiciusR);
};
console.log('Sugeneruotas Masyvas: ', skaiciaiM);
//              1.Užduotis - kievieno masyvo elemntą

console.groupCollapsed('1.Užduotis- skaičiai iš masyvo');

for(let i=0; i<skaiciaiM.length;i++) {
    console.log(`Skaičius Nr.${i}: ${skaiciaiM[i]}`);
}

console.groupEnd('1.Užduotis- skaičiai iš masyvo');

//              2.Užduotis - kas trečią

console.groupCollapsed('2.Užduotis - kas trečią');

for(let i=0; i<skaiciaiM.length;i+=3) {
    console.log(`Skaičius Nr.${i}: ${skaiciaiM[i]}`);
}

console.groupEnd('2.Užduotis - kas trečią');

//              3.Užduotis - kas antrą nuo galo

console.groupCollapsed('3.Užduotis - kas antrą nuo galo');

for(let i=skaiciaiM.length-2; i>0;i-=2) {
    console.log(`Skaičius Nr.${i}: ${skaiciaiM[i]}`);
}

console.groupEnd('3.Užduotis - kas antrą nuo galo');
//              4.Užduotis - Spausdinti tik didesnius už 54

console.groupCollapsed('4.Užduotis - Spausdinti tik didesnius už 54');

for(let i=0; i<skaiciaiM.length;i++) {
    if(skaiciaiM[i]>54){
        console.log(`Skaičius Nr.${i}: ${skaiciaiM[i]}`);
    };
}

console.groupEnd('4.Užduotis - Spausdinti tik didesnius už 54');

//              5.Užduotis - Spausdinti Lyginius/nelyginius

console.groupCollapsed('5.Užduotis - Spausdinti Lyginius/nelyginius');
console.log('-----Lyginiai skaičiai:------');
for(let i=0; i<skaiciaiM.length;i++) {
    
    if(skaiciaiM[i]%2===0) {
    console.log(`Lyginis Nr.${i}: ${skaiciaiM[i]}`);
    }
};
console.log('-----Nelyginiai skaičiai:------');
for(let i=0; i<skaiciaiM.length;i++) {
    
    if(skaiciaiM[i]%2===1) {
    console.log(`Nelyginis Nr.${i}: ${skaiciaiM[i]}`);
    }
};

console.groupEnd('5.Užduotis - Spausdinti Lyginius/nelyginius');

//              6.EXTRA1 - FIZZ, BUZZ, FIZBUZZ

console.groupCollapsed('6.EXTRA1 - FIZZ, BUZZ, FIZBUZZ');
console.log('-----Fizz/3:------');
for(let i=0; i<skaiciaiM.length;i++) {
    
    if(skaiciaiM[i]%3===0) {
    console.log(`Fizz Nr.${i}: ${skaiciaiM[i]}`);
    }
};
console.log('-----Buzz/5:------');
for(let i=0; i<skaiciaiM.length;i++) {
    
    if(skaiciaiM[i]%5===0) {
    console.log(`Buzz Nr.${i}: ${skaiciaiM[i]}`);
    }
};
console.log('-----FizzBuzz/3/5:------');
for(let i=0; i<skaiciaiM.length;i++) {
    if(skaiciaiM[i]%3===0) {
        if(skaiciaiM[i]%5===0) {
            console.log(`FizzBuzz Nr.${i}: ${skaiciaiM[i]}`);
        }
    }
};

console.groupEnd('6.EXTRA1 - FIZZ, BUZZ, FIZBUZZ');

//              7.EXTRA2 - Pirminiai skaičiai

console.group('7.EXTRA2 - Pirminiai skaičiai');

console.log('-------Tikrina ar konkretus skaičius - pirminis-----------');
let pirminis=0;
pirminis=prompt('Įveskite skaičių nuo 0 iki 100 - pirminio skaičiaus patikrinimui:',61);
let liekana0=0;
for(let i=2;i<100;i++){
    if(pirminis%i===0) {
        liekana0+=1
    }
};
if (liekana0===1) {
    alert(`Pirminis: ${pirminis}`);
    console.log(`Pirminis: ${pirminis}`);
}
else {
    alert(`Nepirminis: ${pirminis}`);
    console.log(`Nepirminis: ${pirminis}`);
};
//--------------

console.log('-----Pirminiai skaičiai iš Masyvo SkaiciaiM:------');
console.log(`Masyvas Skaiciai M: ${skaiciaiM}`);
for(let i=0; i<skaiciaiM.length;i++) {
    let liekana0=0;
    for(let j=2;j<=100;j++){
        if(skaiciaiM[i]%j===0) {
            liekana0+=1;
        }
    };
    if (liekana0===1) {
        console.log(`Pirminis Nr.${i}: ${skaiciaiM[i]}`);
    };
};

//-------------------------------


let nuo=prompt(`Nuo kiek pradedam?(0-100.000)`);
let isKiekSk=prompt(`Iš kelių skaičių tikrinti visus pirminius?(0-100.000)`);
console.log(`-----Visi pirminiai skaičiai nuo ${nuo} iki ${isKiekSk}:------`);
console.time();
function fpirminiai (nuo, isKiekSk) {
    let pirminiuMasyvas=[];
    let isVisoPir=null;
    for(let i=nuo; i<=isKiekSk;i++) {
        let liekana0=0;
        for(let j=2;j<=i;j++){
            if(i%j===0) {
                /* if (liekana0>1) {
                    
                }; */
                liekana0+=1;
            };
        };
        if (liekana0===1) {
            isVisoPir+=1;
            pirminiuMasyvas.push(i);
        };
    };
    console.log(`Pirminių skaičių nuo ${nuo} - ${isKiekSk} masyvas ${pirminiuMasyvas}`);
    console.log(`Iš viso yra pirminių skaičių: ${isVisoPir}`);
    return pirminiuMasyvas;
};
let fpirminiuAts=fpirminiai(nuo,isKiekSk);
console.timeEnd ();
console.log(`Pirminių masyvas pateiktas už funkcijos ribos`, fpirminiuAts);

console.groupEnd('7.EXTRA2 - Pirminiai skaičiai');

//--------------------



