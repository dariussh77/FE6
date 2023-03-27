const uzduotis1=document.querySelector('#uzduotis1');

let uzduotisNr=document.createElement('h1');
let uzduotisNrTekstas=document.createTextNode('1. Data[0]');
uzduotisNr.appendChild(uzduotisNrTekstas);
uzduotisNr.classList.add('text-center')
let divas=document.createElement('div');
console.log(data);
let h2=document.createElement('h2');
let h2Tekstas=document.createTextNode(data[0].title);
h2.appendChild(h2Tekstas);
let p=document.createElement('p');
let pTekstas=document.createTextNode(data[0].paragraph);
p.appendChild(pTekstas);
p.classList.add('text-justify')
let img=document.createElement('img');
img.setAttribute("src",data[0].image);
divas.append(h2,p,img);
console.log(divas);
uzduotis1.append(uzduotisNr,divas)
// 2 DATA[1]
uzduotisNr=document.createElement('h1');
uzduotisNrTekstas=document.createTextNode('2. Data[1]');
uzduotisNr.appendChild(uzduotisNrTekstas);
uzduotisNr.classList.add('text-center')
divas=document.createElement('div');

h2=document.createElement('h2');
h2Tekstas=document.createTextNode(data[1].title);
h2.appendChild(h2Tekstas);
let divasviduje=document.createElement('div');
divasviduje.classList.add('flex','border');
for(i=0;i<data[1].images.length;i++){
    img=document.createElement('img');
    img.setAttribute("src",data[1].images[i]);
    img.classList.add('images')
    divasviduje.append(img);
}
divas.append(h2,divasviduje)
uzduotis1.append(uzduotisNr,divas)

//3 Data[2]
const uzduotis3=document.querySelector('#uzduotis3');
console.log(uzduotis3);
let uzduotisNr3=document.createElement('h1');
let uzduotisNrTekstas3=document.createTextNode('3. Data[2]');
uzduotisNr3.appendChild(uzduotisNrTekstas3);


let h2_3=document.createElement('h2');
let h2Tekstas_3=document.createTextNode(data[2].title);
h2_3.appendChild(h2Tekstas_3);
let divas3=document.createElement('div');
divas3.classList.add('border', 'flex');
let data2=data[2].works;
console.log(data2);
    for (i=0;i<data2.length;i++){
        let divasviduje_3=document.createElement('div');
        divasviduje_3.classList.add('borderBlue', 'size', 'flexcolumn')
        let h3_3=document.createElement('h3');
        let h3Tekstas_3=document.createTextNode(data2[i].title);
        h3_3.appendChild(h3Tekstas_3);
        img_3=document.createElement('img');
        img_3.setAttribute('src', data2[i].image);
        img_3.classList.add('images')
        p_3=document.createElement('p');
        pTekstas_3=document.createTextNode(data2[i].paragraph);
        p_3.appendChild(pTekstas_3);
        p_3.classList.add('text-justify');
        divasviduje_3.append(img_3,h3_3,p_3);
        divas3.append(divasviduje_3);
    };


uzduotis3.append(uzduotisNr3,h2_3,divas3)

///// Rodyti slėpti mygtukas

const allSections=document.querySelectorAll('section');
console.log(allSections);
for(let i=0;i<allSections.length;i++){
    const rodytiSleptiMygtukas=document.createElement('button');
    const mygtukoTekstas=document.createTextNode('Slėpti');
    rodytiSleptiMygtukas.appendChild(mygtukoTekstas);
    rodytiSleptiMygtukas.classList('absolute');
    rodytiSleptiMygtukas.style.top='0';
    rodytiSleptiMygtukas.style.right='0';
    rodytiSleptiMygtukas.addEventListener('submit',rodytiSlepti);
    console.dir(rodytiSleptiMygtukas);
    allSections[i].classList.add(rodytiSleptiMygtukas);
    allSections[i].classList.add('relative');
};
function rodytiSlepti(event){
    console.log(event);
    console.log('paspaudei');
    let visiElementaiApartMygtuko=event.target.parentNode.querySelector(':not(button.rodytiSleptiMygtukas)');
    console.log(visiElementaiApartMygtuko);
    if(event.target.innerHTML==='Slėpti'){
        for(let i=0; i<visiElementaiApartMygtuko.length;i++){
            visiElementaiApartMygtuko[i].style.display='none'
        };
        event.target.innerHTML='Rodyti';
    }else if(event.target.innerHTML==='Rodyti'){
        for(let i=0; i<visiElementaiApartMygtuko.length;i++){
            visiElementaiApartMygtuko[i].style.display='';
        };
        event.target.innerHTML='Slėpti';
    }else{
        console.log(event);
    }
}