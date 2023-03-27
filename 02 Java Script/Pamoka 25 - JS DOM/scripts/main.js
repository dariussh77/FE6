//              Kartu1

const kartu1=document.querySelector('#kartu1')
/* kartu1.innerHTML+=`
<h1 class="raudonasTekstas didelisTekstas centruotasTekstas">Bandymas su innerHTML</h1>
<div class="flex flex-wrap justify-center gap-2">
    <div class="kortele1">
        <h3>Kortelės pavadinimas</h3>
        <img src="https://picsum.photos/id/949/600/400" alt="">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum rem laboriosam sequi accusamus repellendus necessitatibus aliquam, officiis natus, voluptas at mollitia. Voluptatem maxime atque neque, saepe aliquid maiores sed totam.</p>
    </div>
    <div class="kortele1">
        <h3>Kortelės pavadinimas</h3>
        <img src="https://picsum.photos/id/1067/600/400" alt="">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum rem laboriosam sequi accusamus repellendus necessitatibus aliquam, officiis natus, voluptas at mollitia. Voluptatem maxime atque neque, saepe aliquid maiores sed totam.</p>
    </div>
    <div class="kortele1">
        <h3>Kortelės pavadinimas</h3>
        <img src="https://picsum.photos/id/237/600/400" alt="">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum rem laboriosam sequi accusamus repellendus necessitatibus aliquam, officiis natus, voluptas at mollitia. Voluptatem maxime atque neque, saepe aliquid maiores sed totam.</p>
    </div>
</div>
`; */
/* let visosKorteles='';

for (let i=0; i<=duomenys.length;i++){
    console.log(duomenys[i]);
    visosKorteles+=`
    <h3>${duomenys[i].pavadinimas}</h3>
    <img src="${duomenys[i].paveiksliukas}" alt="${duomenys[i].paveiksliukoAlt}">
    <p>${duomenys[i].paragrafas}</p>
    `;
};
kartu1.innerHTML+=`
<h1 class="raudonasTekstas didelisTekstas centruotasTekstas">Bandymas su innerHTML</h1>
<div class="flex flex-wrap justify-center gap-2">
    ${visosKorteles}
</div>
`; */

///DOM elemnetų kūrimas geruoju būdu

const testZona=document.querySelector('#testZona');
let naujasDivas=document.createElement('div');
/* naujasDivas.className+='kortele1'; */ //Nerašoma
naujasDivas.classList.add('kortele1');
let naujasPar=document.createElement('p');
let tekstas=document.createTextNode('Loremsdsd    sdfsdf ');
let naujasHeading=document.createElement('h3');
let tekstas2=document.createTextNode('Pavadinimas');
let naujasImage=document.createElement('img');
naujasImage.setAttribute('src', './images/moteris2.webp');
naujasImage.setAttribute('alt', 'Paveikslėlis');

naujasHeading.appendChild(tekstas2);
naujasPar.appendChild(tekstas);
naujasDivas.append(naujasHeading,naujasImage,naujasPar);
testZona.appendChild(naujasDivas);
console.dir(naujasDivas);

//Kartu 2

const kartu2= document.querySelector('#kartu2');
let kartu2Heading=document.createElement('h1')
let kartu2Text=document.createTextNode('Illum rem laboriosam');
let divKonteineris=document.createElement('div');
/* divKonteineris.classList.add ('flex');
divKonteineris.classList.add ('flex-wrap');
divKonteineris.classList.add ('justify-center'); */
divKonteineris.classList.add ('gap-2','flex','flex-wrap','justify-center');
for(let i=0;i<duomenys.length;i++){
    let kortelesDiv=document.createElement('div');
    kortelesDiv.classList.add('kortele1')
    let kortelesHeader=document.createElement('h3');
    let kortelesPavadinimas=document.createTextNode(duomenys[i].pavadinimas);
    kortelesHeader.appendChild(kortelesPavadinimas);
    let kortelesImage=document.createElement('img');
    kortelesImage.setAttribute('src', duomenys[i].paveiksliukas);
    kortelesImage.setAttribute('alt', duomenys[i].paveiksliukoAlt);
    let kortelesParagrafas= document.createElement('p');
    let kortelesTekstas= document.createTextNode(duomenys[i].paragrafas);
    kortelesParagrafas.appendChild(kortelesTekstas);
    kortelesDiv.append(kortelesHeader,kortelesImage,kortelesParagrafas);
    divKonteineris.appendChild(kortelesDiv);
}
kartu2.append(kartu2Heading,divKonteineris)