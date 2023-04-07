//      Kintamieji
let zodis = 'Žodinis kintamasis';
let skaicius = 654;
let loginis = false;
let masyvas = ['tekstas', 54, true];
let objektas = { 
  raktinisZodis: 'reikšmė',
  rytmetis: true,
  valanda: 9
};

//      Aritmetika

//      Sąlygos
console.groupCollapsed('sąlygos');
console.log(5 == '5'); // true
console.log(5 === '5'); // false
console.log(!true); // false
console.log(false && true); // false
console.log(true && true); // true
console.log(false || true); // true
console.log(false || false); // false
console.groupEnd();
// if(salyga){
// } else if(salyga){
// } else if(salyga){
// } else {
// }

// switch(salygosReiksme){
//   case salyga: 
//     // veiksmai
//     break;
//   case salyga: 
//     // veiksmai
//     break;
//   default:
//     // veiksmus
// }

// salyga ? tiesa : melas;
// salyga ? tiesa : kitaSalyga ? tiesa : melas;

// salyga && tiesa;

//            Ciklai
// for(let iteracija = 0; salygaSuIteracija; iteracija++){
//   // veiksmai
// }
// while(tiesa){
//   // veiksmai
// }
// for(const elementas of masyvas){
//   // veiksmai su elementas
// }
// for(const raktinisZodis in objektas){
//   // veiksmai su objekto elementu
// }
// do{
//   // veiksmas
// } while(tiesa);

//            Funkcijos
// function nameOfFunction(par1, par2, par3){
//   // veiksmai su par1, par2, par3
// }
// nameOfFunction(arg1, arg2);
// nameOfFunction(arg5, arg6, arg7);
// nameOfFunction(arg999, arg777, arg666);

// const arrowFunction = (par1, par2) => {
//   // veiksmai su par1, par2
// }

//            NODE
//      Selektinimas
// const rastasElementas = document.querySelector('selektorius');
// const rastiElementai = document.querySelectorAll('selektorius');
//      Event'ai
// NODE.addEventListener('veiksmas', funkcija);
//      Kūrimas
// const divas = document.createElement('div');
// divas.setAttribute('id', 'idName');
// divas.classList.add('pridedamKlase');
// document.appendChild(divas);

//            Formų nuskaitymas
// document
//   .querySelector('FORMOS_Selektorius')
//   .addEventListener('submit', event => {
//     event.preventDefault();
//     const formosIvestys = {
//       ivestis1: event.target.elements.inputName1.value,
//       ivestis2: event.target.elements.inputName2.value,
//     }
//   });

//            Metodai
//  Masyvų iteraciniai
// masyvas.forEach(masyvoElementas => {
//   console.log(masyvoElementas);
// });

//            Destruktūrizavimas
// function ageAfter10Years({amzius, ...rest}){
//   console.log(rest);
//   return amzius+10;
// }
// console.log(ageAfter10Years({ vardas: "Rokas", pavarde: "Banaitis", amzius: 26}));

//            Moduliai
// export default function vardas(){};
// import vardasKaipNori from './Kazkur.js';
// export { data1, data2, data3 };
// import { data1, data2, data3 } from './kazkur.js';

//            Klasės
// class KlasesVardas{
//   constructor(props){
//     this.kaipVadinsiuPropsKlasesViduje = props;
//     return this.render();
//   }
//   render(){
//     //kažką darau su ...
//     this.kaipVadinsiuPropsKlasesViduje;
//   }
// }

// class Gyvunas{
//   constructor(vardas,kojuKiekis,spalva,veisle){
//     this.vardas = vardas;
//     this.kojuKiekis = kojuKiekis;
//     this.spalva = spalva;
//     this.veisle = veisle;
//   }
// }

// class Kate extends Gyvunas{
//   constructor(balsas, ...rest){
//     super(...rest);
//     this.balsas = balsas;
//   }
// }
// class Suo extends Gyvunas{
//   constructor(balsas, ...rest){
//     super(...rest);
//     this.balsas = balsas;
//   }
// }

// const gyvunas0 = new Gyvunas('Bobas', 2, 'oražinė', 'kengūra');
// const gyvunas1 = new Kate('miau', 'Rainė', 4, 'oražinė', 'siamo');

// console.log(gyvunas0, gyvunas1);

//          Data Storage
// Duomenų saugojimas vartotojo dalyje (atitinkamame domain)
// document.cookie = '';
// window.sessionStorage.metodas();
// window.localStorage.metodas();

// Duomenų saugojimas atskirame faile - JSON
// let jsonFormatas = JSON.stringify(objektas); // saugojimui
// let nebeJsonFormatas = JSON.parse(jsonFormatas); // paėmimui

// console.log(objektas);
// console.log(jsonFormatas);
// console.log(nebeJsonFormatas);

//          Fetch
//    GET
fetch('URL')
  .then(res => res.json())
  .then(data => {
    // veiksmai su data
  });
//    POST
fetch('URL', {
  method: "POST",
  headers:{
    'Content-Type':'application/json'
  },
  body: JSON.stringify(objektas)
})
  .then(res => res.json())
  .then(data => {
    // data yra išsiūstas objektas, kažkaip galbūt pakeistas API, sugrąžintas
  });
//    DELETE
fetch('URL/ID',{
  method: "DELETE"
})
  .then(res => res.json())
  .then(data => {
    // data gali būti kažkoks atsakymas iš serverio ar pavyko ar nepavyko trinti nudorytą įrašą
  })
//    PUT
fetch('URL/ID', {
  method: "PUT",
  headers:{
    'Content-Type':'application/json'
  },
  body: JSON.stringify({ rytmetis: false })
})
  .then(res => res.json())
  .then(data => {
    // data gali būti pakitęs duomuo, pagal pateiktą informaciją
    /*
      { 
        rytmetis: false,
        id: 1
      }
    */
  });
//    PATCH
fetch('URL/ID', {
  method: "PATCH",
  headers:{
    'Content-Type':'application/json'
  },
  body: JSON.stringify({ rytmetis0: false })
})
  .then(res => res.json())
  .then(data => {
    // data gali būti pakitęs duomuo, pagal pateiktą informaciją
    /*
      { 
        raktinisZodis: 'reikšmė',
        rytmetis: true,
        rytmetis0: false,
        valanda: 9,
        id: 1
      }
    */
  });



  /*
    let data_API_Viduje = { 
      raktinisZodis: 'reikšmė',
      rytmetis: true,
      valanda: 9,
      id: 1
    };
  */