/* let zodis='hjgj';
let skaicius=564;
let logic=true;
let masyvas=[1,2,2,6];
let object={a:1,b:2,c:3,d:6}


//Salygos
console.log(5=='5');//true
console.log(5==='5');//false
console.log(!true);//false
console.log(false&&true); //false
console.log(true&&true); //true
console.log(false||true); //tuee
console.log(false||false); //false
console.log();
//
if(true){

}else if(true){

}else{

};
switch (salygosReiksme){
    case salyga:
        1+1;
        break;
    case salyga2:
        2+2;
        break
    default:
        3+3
}

true? 1+1:true?2+2:3+3

true&&1+1;

//Ciklai

for(let i=0;i<10;i+=1){};

while(tiesa){};

for (const elementa of masyvas){};

for (raktiniszodis in objektas){}
do{

}while(tiesa)

//Funkcijos

function Name(par1, par2,...){
    veiksmai 
};
name(arg1, arg2,...);

const funktio=(pa1,par2)={}

//Node
//Selektinimas
const k=document.querySelector()
const k=document.querySelectorAll()
//Eventyai
NODE.addEventListeninh

let divas=document.createElement('div');
divas.appendChild('text')

//Formu nuskaitymas

document.querySelector('forma')
    .addEventListener('submit',(e)=>{
        e.prevent.default();
        let formosIvestys={
            ivesti1:e.target.elements.input1,
            ivesti2:e.target.elements.input1
        }
    })

//    Metodai

masyvas.forEach(masyvoElementas=>{

})

//destruktūrizvimas
function fFunktion({pavarde}){
 pavarde
}

fFunktion({vardas:'darius', pavarde:'Šilinskas'})

//moduliai

import Klase from ('./failas');
export default class Epo{
    constructor(a,b){
        this.a =a
        return render()
    }
    render(rend){

    }
} */

//Klasės

//Extendas
class Gyvunas{
    constructor(vardas, kojukiekis,spalva){
        this.vardas=vardas;
        this.kojukiekis=kojukiekis;
        this.spalva=spalva
    }
};
class Kate extends Gyvunas{
    constructor(balsas,...rest){
        super(rest); //turi buti pirmas
        this.balsas=balsas;
    }
}
console.log(new Gyvunas('Bobas', 2, 'oranžinė'));
console.log(new Kate('miau','Rainė', 4, 'raudona'));

//Data Storage

// Vardotojo pc
document.cokie="puma";
window.sessionStorage.setItem('g','b');
window.localStorage.setItem('g','b');

//Json - 

let jsonStringify=JSON.stringify({vardas:'Darius'})
let nebeJSON=JSON.parse(jsonStringify);
console.log(jsonStringify);
console.log(nebeJSON);


//Fetch
//Get
fetch('URL').then(res=>res.json()).then(data=>{})
//POST
fetch('URL', {method:"POST", headers:{'Content-Type':'application.json'}, body: JSON.stringify({vardas:'Darius'})}).then(data=>{

})

//Delete
fetch('URL/ID', {method:"DELETE"}).then(res=>res.json)then(data=>{
  pranesimas
})

//PUT
fetch('URL', {
    method:"PUT", 
    headers:{'Content-Type':'application.json'}, 
    body: JSON.stringify({vardas:'Darius'})
    })
    .then(data=>{

})
