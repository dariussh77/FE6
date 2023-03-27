//          Kintamieji

let zodinis = `Tekstinio tipo kintamasis rašomas kabutėse ir vadinamas string'u.`;
let skaicius = 5; // paprastas skaičius arba matematinė išraiška
let loginis = true; // true arba false 
let masyvas = ['labas','ate',1,2,3,false]; // konteineris, kurio viduje vardinami duomenys
let objektas = {vardas:'Rokas', lytis:'vyras'}; // konteineris, kurio viduje užvadinami duomenys
console.groupCollapsed('backtick');
let vardas = 'Rokas';
let miestas = 'Kaunas';
console.log("Labas "+vardas+". Esi iš "+miestas+" miesto. Tai yra labai gražus miestas."+"Kaunas – antrasis pagal dydį Lietuvos miestas šalies centrinėje dalyje, Nemuno ir Neries santakoje.\n" +
"Svarbus pramonės, transporto, mokslo ir kultūros centras, Laikinoji sostinė.\n" +
"Kauno miesto savivaldybė, Kauno rajono savivaldybės centras, katalikų arkivyskupijos centras. Gyventojų skaičius – 298,8 tūkst. (2021).");
console.log(`Labas ${vardas}. Esi iš ${miestas} miesto. Tai yra labai gražus miestas.Kaunas – antrasis pagal dydį Lietuvos miestas šalies centrinėje dalyje, Nemuno ir Neries santakoje.
Svarbus pramonės, transporto, mokslo ir kultūros centras, Laikinoji sostinė.
Kauno miesto savivaldybė, Kauno rajono savivaldybės centras, katalikų arkivyskupijos centras. Gyventojų skaičius – 298,8 tūkst. (2021)."`);
console.log('Mano vardas yra '+vardas+'.');
console.log(`Mano vardas yra ${vardas}.`);
console.groupEnd();

console.groupCollapsed('filmu masyvas');
// let filmas = {
//   pavadinimas: 'Rambo',
//   leidimoMetai: 2008,
//   rezisierius: 'Sylvester Stallone',
//   filmoIlgis: '91 minutes',
//   aktoriai: ['Sylvester Stallone','Jullie Benz','Paul Schulze','Matthew Marsden']
// };

// let filmas = {
//   pavadinimas: 'Rambo',
//   leidimoMetai: 2008,
//   rezisierius: 'Sylvester Stallone',
//   filmoIlgis: '91 minutes',
//   aktoriai: [
//     {
//       aktorius: 'Sylvester Stallone',
//       personazas: 'John Rambo'
//     },{
//       aktorius: 'Jullie Benz',
//       personazas: 'Sarah Miller'
//     },{
//       aktorius: 'Paul Schulze',
//       personazas: 'Michael Burnett'
//     },{
//       aktorius: 'Matthew Marsden',
//       personazas: 'School Boy'
//     }
//   ]
// };
// let filmas2 = {};

let filmai = [
  {
    pavadinimas: 'Rambo',
    leidimoMetai: 2008,
    rezisierius: 'Sylvester Stallone',
    filmoIlgis: '91 minutes',
    aktoriai: [
      {
        aktorius: 'Sylvester Stallone',
        personazas: 'John Rambo'
      },{
        aktorius: 'Jullie Benz',
        personazas: 'Sarah Miller'
      },{
        aktorius: 'Paul Schulze',
        personazas: 'Michael Burnett'
      },{
        aktorius: 'Matthew Marsden',
        personazas: 'School Boy'
      }
    ]
  },{
    pavadinimas: 'Pulp Fiction',
    leidimoMetai: 1994,
    rezisierius: 'Quentin Tarantino',
    filmoIlgis: '154 minutes',
    aktoriai: [
      {
        aktorius: 'John Travolta',
        personazas: 'Vincent Vega'
      },{
        aktorius: 'Samuel L. Jackson',
        personazas: 'Jules Winnfield'
      },{
        aktorius: 'Uma Thurman',
        personazas: 'Mia Wallace'
      },{
        aktorius: 'Harvey Keitel',
        personazas: 'Windston Wolfe'
      }
    ]
  }
];
console.log(filmai);
console.log(filmai[1]);
console.log(filmai[1].aktoriai);
console.log(filmai[1].aktoriai[0]);
console.groupEnd();


//      Sąlygas

console.groupCollapsed('kada vyksta sąlygos ribose esantys veiksmai');
let salygosSkaicius = 5;
if(5 > salygosSkaicius){
  console.log('vyksta');
  console.log('veiksmas');
  console.log('jeigu');
  console.log(`if'as`);
  console.log(`tiesa`);
} else if(5 < salygosSkaicius){
  console.log('vyksta');
  console.log('veiksmas');
  console.log('jeigu');
  console.log(`else if'as`);
  console.log(`tiesa`);
  console.log(`o`);
  console.log(`if'as`);
  console.log(`melas`);
} else {
  console.log(`vyksta`);
  console.log(`veiksmas`);
  console.log(`jeigu`);
  console.log(`visi`);
  console.log(`if'ai ir else if'ai`);
  console.log(`melai`);
}
console.groupEnd();

// let didelisSkaicius = '50l';
// if(didelisSkaicius >= 100){
//   console.log('Skaičius tikrai yra didelis.');
// } else if(didelisSkaicius < 100){
//   console.log('Skaičius ne toks ir didelis.');
// } else {
//   console.log('Ne skaičius išvis wtf...');
// }

let didelisSkaicius = 49;
if(didelisSkaicius >= 100){
  console.log('Skaičius tikrai yra didelis.');
  if(didelisSkaicius >= 1000){
    console.log('Okay, labai didelis.');
  } else {
    console.log('Na 1000 nesiekia, tai dar meh...');
  }
} else if(didelisSkaicius < 100 && didelisSkaicius % 2 === 0){
  console.log('Skaičius ne toks ir didelis, bet bent jau lyginis...');
} else if(didelisSkaicius < 100 && didelisSkaicius % 2 !== 0){
  console.log('Skaičius ne toks ir didelis ir net nelyginis...');
} else {
  console.log('Ne skaičius išvis wtf...');
}