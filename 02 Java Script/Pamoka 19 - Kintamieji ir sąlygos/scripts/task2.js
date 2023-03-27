//II dalis Namų darbas Nr.2
console.group('II. Užduotis');
alert('Sveiks');

let info=[
    asmuo1={
        miestas: prompt('Iš kurio miesto?'),
        gatve:prompt('Iš kokios gatvės esi?'),
        vardas:prompt('Koks tavo vardas?')
        },
    asmuo2= {
        miestas: prompt('Iš kurio miesto tavo draugas?'),
        gatve:prompt('Iš kokios jis gatvės?'),
        vardas:prompt('Koks Jo vardas?')
        } 
];
console.log(asmuo1.miestas);
info.forEach(function arVilnius(n) {
   if (n.miestas==='Vilnius') {
        alert('Rytas - Jėga')
        }else if(n.miestas==='Kaunas') {
            alert('Aišku- Kavenskas')
        }else{
            alert('vadinasi iš kaimo?')
        }
        
    }
);
     
console.log('Visa info',  info);



console.groupEnd('II. Užduotis');