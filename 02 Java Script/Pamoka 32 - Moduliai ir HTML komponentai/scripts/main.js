import sum, {subtraction as atimtis, divition,skaicius} from './matematika.js'; //default galima keisti pavadinima, o paprastai reikia naudoti "as"
import XXXrandomCollor from './randomColor.js';
import P from './paragraph.js';
import H from './heading.js';
import Card from './card.js';
import Image from './image.js';
console.log('Suma:',sum(13,7));
console.log('Atimtis:',atimtis(13,7));
console.log('Dalyba:',divition(13,7));
console.log('Atskiras skicius:',skaicius); //galima kur kintamaji export viduje:
//console.log('Daugyba:', multiplication()); //neveikia nes neexportinama

console.log('Random Color:',XXXrandomCollor());

const paragrafas0=new P({
    text:'Susikųrėm paragrafą:',
    class:['raudonasTekstas','didelisTekstas','centruotastekstas']
});
const paragrafas1=new P({text:'Susikųrėm antrą paragrafą:'});
console.log(paragrafas0, paragrafas1);
const testSection=document.querySelector('#test');
testSection.append(paragrafas0,paragrafas1);

const heading0=new H({
    text: 'Aš H5 tekstas',
    size:5
})
testSection.append(heading0);

// 0.2 Card 

const card0=new Card({
    class:
    [],
    image: {
        klases:['permatoma'],
        src:'https://picsum.photos/id/684/600/400?grayscale',
        alt:'Kalnai'
    },
    heading:{
        text:'Kalnai vakare',
        size: 1
    },
    paragraph:{
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid omnis ex illum praesentium doloremque a provident hic totam vero quia quibusdam veniam.'
    }
});
console.log(card0);

testSection.append(card0);

//0.1 Image.js tikrinimas

const nuotraukos=[
    {
        klases:['nuotDydis','uzapvalinta','permatoma'],
        src: 'https://picsum.photos/id/823/600/400',
        alt: 'Fotografė'
    },{
        klases:['nuotDydis','uzapvalinta'],
        src: 'https://picsum.photos/id/334/600/400',
        alt: 'Gitaros genijus'
    }
];

let nDarbas=document.querySelector('#nDarbas');
nuotraukos.map(e=> new Image(e)).map(e=>nDarbas.append(e));



