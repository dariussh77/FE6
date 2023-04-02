export default class Image{
    constructor (savybes){
        this.savybes=savybes;
        return this.nodeFormavimas();
    }
    nodeFormavimas(){
        this.nuotraukaNode=document.createElement('img');
        this.source=this.nuotraukaNode.setAttribute('src', this.savybes.src);
        this.alter=this.nuotraukaNode.setAttribute('alt', this.savybes.alt);
        this.visosKlases=this.nuotraukaNode.classList.add(...this.savybes.klases);
        //this.nuotDydis=this.nuotraukaNode.classList.add(this.savybes.klases[0]);
        //this.uzapvalinta=this.nuotraukaNode.classList.add(this.savybes.klases[1]);

        console.log(this.nuotraukaNode);
        return this.nuotraukaNode;
    }
}