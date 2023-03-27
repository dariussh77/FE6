///             Random figure

function daugiakampis(){
    let piesimas=document.querySelector('#grafika').getContext('2d');
    piesimas.clearRect(0,0,500,500);
    let a={x:Math.random()*500, y:Math.random()*500};
    let b={x:Math.random()*500, y:Math.random()*500};
    let c={x:Math.random()*500, y:Math.random()*500};
    let d={x:Math.random()*500, y:Math.random()*500};
    let e={x:Math.random()*500, y:Math.random()*500};
    console.log(a,b,c,d,e);
    let raudona=Math.ceil(Math.random()*255);
    let zalia=Math.ceil(Math.random()*255);
    let melyna=Math.ceil(Math.random()*255);
    piesimas.strokeStyle=`rgb(${raudona},${zalia},${melyna})`;
    piesimas.beginPath();
    piesimas.moveTo(a.x,a.y);
    piesimas.lineTo(b.x,b.y);
    piesimas.lineTo(c.x,c.y);
    piesimas.lineTo(d.x,d.y);
    piesimas.lineTo(e.x,e.y);
    piesimas.closePath();
    piesimas.stroke();
    
};
document
    .querySelector('#grafika')
    .addEventListener('click',daugiakampis); 


///         Canvas koordinatės


let piestiKoord=document.querySelector('#cannvasKoord').getContext('2d');
//console.log(piestiKoord);
function fKoor(){
    
    let koordGalas=500;
    for(let i=50;i<koordGalas;i+=50){
        //console.log(i);
        piestiKoord.font = "16px Comic Sans MS";
        piestiKoord.fillText(i, i-10,15);
        
        piestiKoord.beginPath();
        piestiKoord.moveTo(i,20);
        piestiKoord.lineTo(i,koordGalas-10);
        piestiKoord.closePath();
        piestiKoord.stroke();
    };
    for(i=50;i<koordGalas;i+=50){
        //console.log(i);
        piestiKoord.font = "16px Comic Sans MS";
        piestiKoord.fillText(i, 5,i+5);
        
        piestiKoord.beginPath();
        piestiKoord.moveTo(40,i);
        piestiKoord.lineTo(koordGalas-10,i);
        piestiKoord.closePath();
        piestiKoord.stroke();
    };
    
};
fKoor();

///                     Piesimas

let a={x:0,y:0}
let b={x:0,y:0}
function fpiesti(piestiObj){
    if(a.x===0&&a.y===0){
        a={x:piestiObj.offsetX,y:piestiObj.offsetY};
    };
    let piesti2D=document.querySelector('#piesti').getContext('2d');
    //console.log(piestiObj);
    b={x:piestiObj.offsetX,y:piestiObj.offsetY}; 
    //console.log(b);
    piesti2D.beginPath();
    piesti2D.moveTo(a.x, a.y);
    piesti2D.lineTo(b.x,b.y)
    piesti2D.closePath();
    piesti2D.stroke();
    a=b;
    return b;
}
function fIsvalyti(){
    let piesti2D=document.querySelector('#piesti').getContext('2d');
    piesti2D.clearRect(0,0,500,500);
}

document.querySelector('#isvalymas').addEventListener('click', fIsvalyti);

document.querySelector('#piesti').addEventListener('mousemove', fpiesti);

///Kaip padaryti, kad pieštų tik paspaudus KPelėsK???????????????

    



    