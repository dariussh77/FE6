//II dalis 4 a
//nepavyko išgauti Array pavadinimo, todėl dariau su objektu!!!!!!
console.group ('4A variantas');
alert("4.A");
let metuLaikai={
    ziema:['gruodis','sausis','vasaris'],
    pavasaris:['kovas','balandis','gegužė'],
    vasara:['birželis','liepa','rugpjūtis'],
    ruduo:['rugsėjis','spalis','lapkritis']
};
console.log(metuLaikai);
let _menuo=prompt('Koks dabar mėnuo?');
let menuo=_menuo.toLowerCase();

Object.entries(metuLaikai).forEach(([key,value]) => {
    value.forEach(/* function men(m) */ (m)=> {
        if(m===menuo) {
            alert('A varijante gauname - '+key);
            console.log(key);
        }
    })  
}
);
console.groupEnd ('A variantas');


// II dalis 4b
//Kodėl neveikia ||or????????????
alert('4.B');
console.group('4B variantas');
switch (menuo) {
    case 'gruodis':alert('Dabar žiema');
    break; //kam reikalingas tas break?????
    case 'sausis':alert('Dabar žiema');
    break;
    case 'vasaris':alert('Dabar žiema');
    break;
    case 'kovas':alert('Dabar pavasaris');
    break;
    case 'balandis':alert('Dabar pavasaris');
    break;
    case 'gegužė':alert('Dabar pavasaris');
    break;
    case 'birželis':alert('Dabar vasara');
    break;
    case 'liepa':alert('Dabar vasara');
    break;
    case 'rugpjūtis':alert('Dabar vasara');
    break;
    case 'rugsėjis':alert('Dabar ruduo');
    break;
    case 'spalis':alert('Dabar ruduo');
    break;
    case 'lapkritis':alert('Dabar ruduo');
    break;
    default:alert('Kažką sumaišei...')
};
console.groupEnd('4B variantas');