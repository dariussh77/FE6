//                                    :)))))))))))))
//                          Klasės
console.group('1.Klasės');
let asmenys0=[
    {
        vardas:'Darius',
        pavarde: 'Šilinskas',
        amzius:47
    },
    {
        vardas:'Petras',
        pavarde: 'Petraitis',
        amzius:49
    }
];
console.log('Sukurta rankomis:',asmenys0);
console.log('---------------------------');
class Zmogus{
    constructor(vardas, pavarde,amzius){
        this.vardas=vardas;
        this.pavarde=pavarde;
        this.amzius=amzius; 
    }
    sako(){
        return 'Labas';
    };
    pasisveikinti(kitasAsmuo){
        return `${this.vardas}, pasisveikina su ${kitasAsmuo.vardas} `
    }
};
let asmenys1=[
    new Zmogus('Darius','Šilinskas',47),
    new Zmogus('Petras','Petraitis',47)
    
];
console.log(asmenys1[0].pasisveikinti(asmenys1[1]));
console.log('---------------------------');
/* class AntZmogis extends Zmogus{
    constructor(supergalia){
        super(...zmogausSavybes);
        his.superGalia=superGalia
    }
};
let zmogusVoras=new AntZmogis('voro galios','Peter')
 */
console.log('---------------------------');
class Kate{
    sako(){
        return 'Miau';
    }
}
let Kate1= new Kate ("Murka");
console.log(Kate1.sako());

console.log('Sukurta per klasę:',asmenys1);




console.groupEnd('1.Klasės');