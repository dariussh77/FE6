/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio konvertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */


const qfrom=document.querySelector('.wrapper>form');
qfrom.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    console.log('Eventas:',e);
    let kintamasis=Number.parseFloat(e.target.elements.search.value);
    console.log(kintamasis);
    let lb=kintamasis*2.2046;
    let gramai=kintamasis*1000;
    let oz=kintamasis*35.274;

    let qdiv=document.querySelector('#output');
    qdiv.innerHTML='';

    let divLb=document.createElement('div');
    let headerLb=document.createElement('h2');
    let headerLbText=document.createTextNode('Svarais: ')
    headerLb.appendChild(headerLbText);
    let resultLb=document.createElement('span');
    let resultLbText=document.createTextNode(lb);
    resultLb.appendChild(resultLbText);
    divLb.append(headerLb,resultLb);

    let divGramai=document.createElement('div');
    let headerGramai=document.createElement('h2');
    let headerGramaiText=document.createTextNode('Gramais: ')
    headerGramai.appendChild(headerGramaiText);
    let resultGramai=document.createElement('span');
    let resultGramaiText=document.createTextNode(gramai);
    resultGramai.appendChild(resultGramaiText);
    divGramai.append(headerGramai,resultGramai);

    let divOz=document.createElement('div');
    let headerOz=document.createElement('h2');
    let headerOzText=document.createTextNode('Uncijomis: ')
    headerOz.appendChild(headerOzText);
    let resultOz=document.createElement('span');
    let resultOzText=document.createTextNode(oz);
    resultOz.appendChild(resultOzText);
    divOz.append(headerOz,resultOz);

    qdiv.append(divLb, divGramai, divOz);
});