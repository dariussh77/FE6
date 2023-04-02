import { sum as sudetis, division } from './matematika.js';
import mumboJumbo, { kita } from './randomColor.js';
import P from './paragraph.js';
import H from './heading.js';
import Card from './card.js';
import List from './list.js';

console.groupCollapsed('moduliai');
kita();kita();kita();kita();kita();
console.log(sudetis('spalva:',mumboJumbo()));
console.log(division(80000, 3));
console.groupEnd();

const testSection = document.querySelector('#test');
const paragrafas0 = new P({
  text:'Sukūrėme paragrafą :)',
  class: ['raudonasTekstas', 'centruotasTekstas']
});
const paragrafas1 = new P({text:'Saulė šviet, varom pabėgiot!!!'});
const heading0 = new H({
  text: 'Aš esu antraštė',
  size: 1,
  class: ['raudonasTekstas', 'centruotasTekstas', 'didelisTekstas']
});
const heading1 = new H({
  text: 'Aš esu mažiukas antraščiukas',
  size: 5
});

const card0 = new Card({
  class: [],
  image: {
    src: 'https://assets2.cbsnewsstatic.com/hub/i/r/2012/02/06/1feb5e95-a644-11e2-a3f0-029118418759/thumbnail/1200x630/64a9aba33675cad48043257194ebc838/breading-cats-q013.jpg',
    alt: 'cat ale bread'
  },
  heading: {
    text: 'Cat in da bread',
    size: 1
  },
  paragraph: {
    text: 'Cat is very happy while living inside the bread :)'
  }
});

const sarasas0 = new List({
  listType: 'ol',
  listClass: ['vienaKlase', 'kitaKlase'],
  // typeAttribute: 'A',
  listItemsClass: ['liKlase', 'ho', 'kek'],
  listItems: [
    {
      text: 'Pirmas'
    },{
      text: 'Antras'
    },{
      text: 'Ne Pirmas',
      class: ['unikaliKlase']
    },{
      text: 'Kažkelintas',
      class: ['unikaliKlase', 'hi']
    },{
      text: 'Paskutinis maybe'
    }
  ]
});

const table0 = {
  attributes: [
    {
      name: "id",
      values: ['idVardas']
    },{
      name: "class",
      values: ["vienaKlase", 'kitaKlase']
    }
  ],
  /*thead:[ // daug lankstumo, bet ilgas

  ],
  tbody:[ 
    [
      {
        data: "Rokas"
      },{
        data: "Banaitis"
      },{
        data: 26
      }
    ],[
      {
        data: "Petras"
      },{
        data: "Petrauskas"
      },{
        data: 55
      }
    ]
  ]*/
  /*tbody:[ // mažai lankstumo, bet trumpas
    {
      vardas: "Rokas",
      pavarde: "Banaitis",
      amzius: 26
    },{
      vardas: "Petras",
      pavarde: "Petrauskas",
      amzius: 55
    }
  ]*/
}
console.log(table0);

// const el = {
//   name: 'div',
//   attributes: [],
//   childrenElements:[
//     {
//       name: 'div',
//       attributes: [],
//       childrenElements:[
//         {
//           name: 'h1',
//           attributes: [],
//           textNode: 'some text'
//         },{
//           name: 'img',
//           attributes: []
//         },{
//           name: 'p',
//           attributes: [],
//           textNode: 'some text'
//         }
//       ]
//     },{
//       name: 'div',
//       attributes: [],
//       childrenElements:[
//         {
//           name: 'h1',
//           attributes: [],
//           textNode: 'some text'
//         },{
//           name: 'img',
//           attributes: []
//         },{
//           name: 'p',
//           attributes: [],
//           textNode: 'some text'
//         }
//       ]
//     }
//   ]
// }

testSection.append(heading0, paragrafas0, paragrafas1, heading1, card0, sarasas0);