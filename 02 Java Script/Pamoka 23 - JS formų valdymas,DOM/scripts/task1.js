
//                          1. Sukurti primityvią skaičiuoklę

//1) Sukurti 4-7 formas HTML'e, kuriose galima būtų įvesti du skaičius ir būtų išvedama tų skaičių: sudėtis, atimtis, daugyba, dalyba, laipsnio kėlimas, šaknies traukimas, liekanos radimas.
//1 extra) Sukurti vieną formą HTML'e, kurioje galima būtų įvesti du skaičius ir select'e nurodyti norimą veiksmą ir būtų grąžinamas teisingas atsakymas.
function skaiciuotuvoFunkcija (ivykis) {
    ivykis.preventDefault();
    console.log(ivykis);
    let sk1=ivykis.target.elements.skaicius1.valueAsNumber;
    let sk2=ivykis.target.elements.skaicius2.valueAsNumber;
    let ats=null;
    let oper=ivykis.target.elements.operator.value;
    console.log(sk1);
    console.log(sk2);
    console.log(oper);
    switch (oper){
        case 'suma':ats=sk1+sk2;
        break;
        case 'atimtis':ats=sk1-sk2;
        break;
        case 'daugyba':ats=sk1*sk2;
        break;
        case 'dalyba':ats=sk1/sk2;
        break;
        case 'laisniu':ats=sk1**sk2;
        break;
        case 'saknis':ats=sk1**(1/sk2);
        break;
        case 'liekana':ats=((sk1*1000)%(sk2*1000)/1000);
        break;
        default: alert('Klaida!');
    };
    console.log(ats);
    document.querySelector('#atsakymas').textContent=ats.toFixed(2);
};


document
    .querySelector('#skaiciuokle')
    .addEventListener('submit', skaiciuotuvoFunkcija);

//2) Sukurkite kino teatro kainos apskaičiavimo platformą. Joje turi būti vienas input laukelis, kur žmogus įrašo savo amžių, o JS apskaičiuoja kainą ir išveda ją h1 elemente. Standartinis bilietas – 6eu, iki 16 metų – 50proc nuolaida, 1/3 nuolaida vyresniems nei 60.

function bilietuF(veiksmas){
    veiksmas.preventDefault();
    console.log (veiksmas);
    console.log(veiksmas.target.elements.inputAmzius.valueAsNumber);
    if(veiksmas.target.elements.inputAmzius.valueAsNumber>=60) {
        document.querySelector('#kainosLaukelis').textContent=2;
    }else if(veiksmas.target.elements.inputAmzius.valueAsNumber<=16) {
        document.querySelector('#kainosLaukelis').textContent=3;
    }else{document.querySelector('#kainosLaukelis').textContent=6;}
};

document
    .querySelector('#bilietuForma')
    .addEventListener('submit', bilietuF);


//3) Kai kuriose šalyse reikia eiti į kariuomenę, jei tau tarp 18 ir 30 metų ir jei neturi kriminalinio įrašo. Sukurti programą, kuri su input + checkBox pasakytų ar tam žmogui gali reikėti eiti į kariuomenę (h1 elemente). Hint: pasirinkite su querySelector tik pažymėtą checkBox input (aha, yra toks CSS selektorius), ir perskaitykite jo reikšmę.

function fArmija (tikrinimas){
    tikrinimas.preventDefault();
    console.log(tikrinimas); 
    let tr=tikrinimas.target.elements; //Kreipimasis į tikrinimas.target[x].aaaa - netinkamas, nes masyvas gali pakeiti numeraciją.
    console.log(tr.inTeistumas.checked);
    console.log(tr.inAmzius.valueAsNumber);
    if(tr.inAmzius.valueAsNumber<60&&
        tr.inAmzius.valueAsNumber>=18&&
        tr.inTeistumas.checked===false) { 
        document.querySelector('#outAtsakymas').textContent='PAŠAUKTAS';
    }else{
        document.querySelector('#outAtsakymas').textContent='NEPAŠAUKTAS'; 
    }; 
};
document
    .querySelector('#armija') //Kaip vyksta čia paveldėjimas taguose? - Bublinimas
    .addEventListener('submit',fArmija); //Kodėl su onclick neveikia tikrinimas.preventDefault()? //nereikia onclick - be on;


//                      4. Bonusai

/* 4) Įmonė visiems savo darbuotojams duoda Kalėdų bonusą - 50 eurų. Tiems darbuotojams, kurie dirba ilgiau nei 10 metų - prideda papildomus 50 eurų (bendrai - 100 eurų). O jei dirba 20 metų ar daugiau - papildomus 100 eurų (iš viso - 200 eurų). Parašyk programą, kuri leistų darbuotojui įsivesti skaičių kiek dirbo metų įmonėje, input elementu - atsirastų tekstas su pervedamu bonusu.
  Pvz: [16] => "Jūsų bonusas: 100 eurų". */

function fBonusai(ivykis){
    ivykis.preventDefault();
    console.log(ivykis);
    let tr=ivykis.target.elements;
    if(tr.inIsdirbta.valueAsNumber>=20){
        document.querySelector('#outBonusai').textContent='200 Eu';
    }else if(tr.inIsdirbta.valueAsNumber>=10){
        document.querySelector('#outBonusai').textContent='100 Eu';
    }else{
        document.querySelector('#outBonusai').textContent='50 Eu';
    };
};

document
        .querySelector('#bonusai')
        .addEventListener('submit', fBonusai);

//                              5.Keliamieji metai

/* 5) Kiek dienų šiais metais? Parašykite programą, kur įvedus metus - pasakys ar jie keliemieji, ar ne (po forma). Kaip apskaičiuoti ar keliemiji metai? Jie turi dalintis iš keturių, bet jei dalinasi iš 100, tai turi dalintis ir iš 400, kad būtų keliamieji (angl. a year is a leap year if it is divisible by four, except that any year divisible by 100 is a leap year only if it is also divisible by 400). Tai - populiari užduotis, tad internete rasite ne vieną versiją, ir daug teorijos kaip skirtingi žmonės skaičiuoja. Tad rekomenduojame padarius - pasitikrinti ir kitų žmonių idėjas. */
function fKeliamieji(ivykis){
    ivykis.preventDefault();
    console.log(ivykis);
    let tmetai=ivykis.target.elements.inKeliamieji.valueAsNumber;
    console.log(tmetai);
    document.querySelector('#outMetai').textContent=tmetai;
    if (tmetai%4===0){
        document.querySelector('#outAts').textContent='KELIAMIEJI';
        if(tmetai%100===0&&tmetai%400===0){
            document.querySelector('#outAts').textContent='KELIAMIEJI (ir dalijasi iš 100/400)';
        }else if(tmetai%100===0){
            document.querySelector('#outAts').textContent='NEKELIAMIEJI(nors ir dalijasi iš 4)';
        }
    }else{
        document.querySelector('#outAts').textContent='NEKELIAMIEJI';
    };
}

document
    .querySelector('#keliamieji')
    .addEventListener('submit',fKeliamieji);


/* 6) Parašyk programą, kurioje vartotojas įrašo temperatūra Celsijumi, o programa paskaičiuoja ir atvaizduoja tą pačią temperatūrą Farenheitu. */
function fFarengeitai (ivykis){
    //ivykis.preventDefault(); - naudojamas tik su submit įvykiu.
    console.log(ivykis);
    let trCelius=ivykis.target.valueAsNumber;
    let trFarengeitai=((trCelius*9/5)+32).toFixed(2);
    console.log(trCelius);
    console.log(trFarengeitai);
    document.querySelector('#outFarengeitai').textContent=trFarengeitai;
    document.querySelector('#outCelcius').textContent=trCelius;
};
function prevet (event){
    event.preventDefault();
}
document
    .querySelector('#farengetai')
    .addEventListener('keyup', fFarengeitai);
document
    .querySelector('#farengetai')
    .addEventListener('submit', prevet);

/* 7) Sukurk programą, kurioje reikia įvesti elektroninį paštą ir paspausti mygtuką "sutinku gauti laiškus". Suvedus duomenis, jei mygtukas "sutinku" nepasirinktas - išmeta - "Registracija nesėkminga. Jei pasirinktas - išmeta "El. paštas [paštas] sėkmingai užregistruotas". */

function fPastas(veikla){
    veikla.preventDefault();
    console.log(veikla);
    let trumpinys=veikla.target.elements;
    let trPastas=trumpinys.inPastas.value;
    console.log(trPastas);
    if(trumpinys.inCheck.checked===true&&trumpinys.inPastas.value!==''){
        document.querySelector('#outPastas').textContent=`El. paštas ${trPastas} sėkmingai užregistruotas.`
    }
    
}

document
    .querySelector('#elPastas')
    .addEventListener('submit', fPastas);

/* 8) Sukurk programą, kurioje bus du inputai - vardas (text) ir skaičius (number) ir tuščias <ul>. Įrašius formoje duomenis, po apačia turi susikurti list itemų tiek, kiek tu parašei skaičių. List itemuose turi būti tavo vardas :) */



/* 9) Sukurkite formą, kurioje vienas input - skaičius, įvesti stačiakampio dydį. Po forma - tegul būna tusčias div elementas. Jame reikia atvaizduoi trikampį pagal įvestą input. Šis pratimas - klasika programavimo ciklų srityje, tiek atsakymų, tiek teorijų, tiek sąmokslo teorijų internete - daugiau nei reikia; pasibaigus ar pastrigus - būtinai pasinagrinėkite (gal vienas iš paaiškinimų jums atvers duris į ciklų pasaulio aiškumą).
Pvz:
Įvesta: 2
Rezultatas:
*
**

Įvesta: 5
Rezultatas:
*
**
***
****
***** */
   