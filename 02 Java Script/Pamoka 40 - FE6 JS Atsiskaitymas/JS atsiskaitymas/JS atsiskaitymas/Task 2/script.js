/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
let qButton=document.querySelector('#btn__element');
let click=0;
qButton.addEventListener('click',(e)=>{
    click++;
    let qState=document.querySelector('#btn__state');
    qState.innerHTML='';
    let stateText=document.createTextNode(click);
    qState.appendChild(stateText);
});