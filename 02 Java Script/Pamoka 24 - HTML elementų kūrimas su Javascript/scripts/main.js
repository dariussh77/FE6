//                          1.HTML elementų kūrimas per JS

/* 8) Sukurk programą, kurioje bus du inputai - vardas (text) ir skaičius (number) ir tuščias <ul>. Įrašius formoje duomenis, po apačia turi susikurti list itemų tiek, kiek tu parašei skaičių. List itemuose turi būti tavo vardas :) */
function vardoKartojimas(event){
    event.preventDefault();
    console.log(event);
    let vardas=event.target.elements.vardas.value;
    let kartojimas=event.target.elements.kartoti.valueAsNumber;
    console.log(vardas,kartojimas);
    let sarasas=document.querySelector('#ciaKuriame');
    console.dir(sarasas);
    console.dir(sarasas.innerHTML);
    sarasas.innerHTML='';
    for (let i=0; i<kartojimas;i++){
        sarasas.innerHTML+=`<li>${vardas}</li>`
    };
    console.dir(sarasas.innerHTML);
};

document
    .querySelector('#task_8')
    .addEventListener('submit', vardoKartojimas);

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
function kurtiTrikampi(event){
    event.preventDefault();
    console.log(event);
    let trikampioDydis=event.target.elements.stacDydis.valueAsNumber;
    console.log(trikampioDydis);
    let trikampioDivas=document.querySelector('#trikampisCia');
    trikampioDivas.innerHTML='';
    console.dir(trikampioDivas);
    let zvaigzdes='';
    for (let i=0; i<trikampioDydis;i++){
        zvaigzdes+='*';
        trikampioDivas.innerHTML+=`<p>${zvaigzdes}</p>`;
    };

    
};

document
    .querySelector('#task_9 > form')
    .addEventListener('submit', kurtiTrikampi);

    ///             2.Kuriamas daug elemntų

// KODĖL ĮVYKDŽIUS document.querySelector('body').innerHTML+=` TADA BET KURIS FORMOS PATEIKIMAS NURESETINA LANGĄ?

document.querySelector('#kuriamElementus').innerHTML+=`
<div>
    <H1>Gero savaitgalio išvedamas iš JavaScript</H1>
    <img src="https://picsum.photos/id/431/600/400" alt="">
    <p>?????????????</p>
</div>
<hr>
`;

