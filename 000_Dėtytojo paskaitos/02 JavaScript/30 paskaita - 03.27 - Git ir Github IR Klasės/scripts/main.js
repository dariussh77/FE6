// let asmuo1 = {
//   vardas: "Rokas",
//   pavarde: "Banaitis",
//   amzius: 26
// }
// let asmuo2 = {
//   vardas: "Petras",
//   pavarde: "Petraitis",
//   amzius: 55
// }

const asmenys0 = [
  {
    vardas: "Rokas",
    pavarde: "Banaitis",
    amzius: 26
  },{
    vardas: "Petras",
    pavarde: "Petraitis",
    amzius: 55
  }
];

class Zmogus{
  constructor(vardas, pavarde, amzius){
    this.vardas = vardas;
    this.pavarde = pavarde;
    this.amzius = amzius;
  }
  sako(){
    return "Labas";
  }
  pasisveikinti({vardas}){
    return `${this.vardas} pasisveikina su ${vardas}`;
  }
}

class Kate{
  sako(){
    return "Miau";
  }
}

let asmenys1 = [
  new Zmogus("Rokas", "Banaitis", 26),
  new Zmogus("Petras", "Petraitis", 55)
];
console.log(asmenys1[0].pasisveikinti(asmenys1[1]));

let kate1 = new Kate();

function skaiciuoti(a,b){
  return a + b;
}
console.log(skaiciuoti(5,6));