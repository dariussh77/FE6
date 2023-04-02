import Olul from './ol.js';
import Select from './select.js';

// 1) Sukurti Klasę, kurios pagalba galima būtų kurti OL arba UL elementus su LI jų viduje. (kas be ko, galimybė suteikti tekstus ir atributus) P.S. Stilizuoti :)
console.groupCollapsed('1.Užduotis');
const liDatas=new Olul({
    listTipas:'ul',
    olUlKlases:['roman', 'inside'],
    li:
    [
        {text:'Tekstas1',liKlases:['pasvires','paryskintas']},
        {text:'Tekstas2',liKlases:['pasvires','paryskintas']},
        {text:'Tekstas3',liKlases:['pasvires','paryskintas']},
        {text:'Tekstas4',liKlases:['blankus']},
        {text:'Tekstas5',liKlases:['pasvires','paryskintas']}
    ]
});
console.log('Lidatas:',liDatas);
const ulOlFormavimas=document.querySelector('#uzduotis1');
ulOlFormavimas.append(liDatas);
console.groupEnd('1.Užduotis');

//   2) Sukurti Klasę, kurios pagalba galima būtų kurti SELECT elementą, kurio viduje būtų OPTION'ai. (kas be ko, galimybė suteikti tekstus ir atributus). P.S. Stilizuoti :)
const selectData=new Select({
    sklases:['pasvires', 'blankus'],
    options:
    [
        {text:'Arcturus',oklases:['pasvires','paryskintas'],value:'Arcturus'},
        {text:'Aldebaranas',oklases:['pasvires','paryskintas'],value:'Aldebaranas'},
        {text:'Vega',oklases:['pasvires','paryskintas'],value:'Vega'},
        {text:'Calista',oklases:['blankus'], value:'Calista'},
        {text:'Šiaurinė',oklases:['pasvires','paryskintas'],value:'Šiaurinė'}
    ]
});
console.log('SelectData:',selectData);
const sectionAppend=document.querySelector('#selectai');
sectionAppend.append(selectData);


//   3+) Sukurti Klasę, kurios pagalba galima būtų kurti TABLE elementą, kurio viduje būtų THEAD ir TBODY (gal ir TFOOT jei nori). THEAD viduje būtų TR, kurio viduje TH. TBODY viduje būtų TR, kurių viduje būtų TD. (jeigu darot su TFOOT, tai ten irgi bus TR su TD kaip buvo TBODY).  (kas be ko, galimybė suteikti tekstus ir atributus). P.S. Stilizuoti :)
//   4++) Sukurti universalią Klasę, kurios pagalba galima būtų sukurti bet kokius elementus ar net jų struktūras.