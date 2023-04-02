// 1) Sukurti Klasę, kurios pagalba galima būtų kurti OL arba UL elementus su LI jų viduje. (kas be ko, galimybė suteikti tekstus ir atributus) P.S. Stilizuoti :)

//OL ar UL kūrimas
export default class Olul{
    constructor(savybes){
        this.savybes=savybes;
        return this.olUlNode();
    }
    olUlNode(){
        console.log(this.savybes);
        this.savybes.listTipas==='ol'? this.nodeOlUl=document.createElement('ol')
        : this.savybes.listTipas==='ul'? this.nodeOlUl=document.createElement('ul')
        :alert('Klaida!!!');
        this.nodeOlUl.classList.add(...this.savybes.olUlKlases);
        this.li=new Li(this.savybes.li,this.nodeOlUl)
        return this.nodeOlUl;
    }
};
//Li kūrimo klasė
class Li{
    constructor (savybes,olUl){
        this.savybes=savybes;
        this.olUl=olUl;
        return this.linodeKurimas();
    }
    linodeKurimas(){
        this.savybes.forEach(e=>{
            this.nodeLi=document.createElement('li');
            this.nodeLi.classList.add(...e.liKlases)
            this.liText=document.createTextNode(e.text);
            this.nodeLi.appendChild(this.liText);
            this.olUl.append(this.nodeLi);
        });  
        return this.nodeLi;
    }
};