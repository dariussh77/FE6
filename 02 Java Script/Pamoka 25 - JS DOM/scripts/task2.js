function fIvedimas (event){
    event.preventDefault();
    let nuoObj=document.querySelector('#nuo');
    let nuo=nuoObj.valueAsNumber;
    let ikiObj=document.querySelector('#iki');
    let iki=ikiObj.valueAsNumber;
    // let masyvasIvesdimas=[nuo,iki];
    console.log(nuo, iki);
    const pirminiuMasyvas = fpirminiai(nuo,iki);
// Divų kurimas   
let divai=document.querySelector('#divai');
for(let i=0;i<pirminiuMasyvas.length;i++){
    let kurtidiva=document.createElement('div');
    kurtidiva.classList.add('border');
    let uzpildytiDiva=document.createTextNode(pirminiuMasyvas[i])
    kurtidiva.appendChild(uzpildytiDiva);
    divai.append(kurtidiva);
 }
}

document
    .querySelector('#ivedimas')
    .addEventListener('submit', fIvedimas);


function fpirminiai (nuo, iki) {
    let fpirminiuMasyvas=[];
    let isVisoPir=null;
    for(let i=nuo; i<=iki;i++) {
        let liekana0=0;
        for(let j=2;j<=i;j++){
            if(i%j===0) {
                liekana0+=1;
            };
        };
        if (liekana0===1) {
            isVisoPir+=1;
            fpirminiuMasyvas.push(i);
        };
    };
    console.dir(`Pirminių skaičių nuo ${nuo} - ${iki} masyvas ${fpirminiuMasyvas}`);
    console.log(`Iš viso yra pirminių skaičių: ${isVisoPir}`);
    return fpirminiuMasyvas;
};









//


