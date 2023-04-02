export default class Select{
    constructor (savybes){
        this.savybes=savybes;
        return this. selectNodeF();
    }
    selectNodeF(){
        this.selectNode=document.createElement('select');
        this.selectNode.classList.add(...this.savybes.sklases);
        console.log(this.selectNode);  
        this.optionNode=new Option(this.savybes.options, this.selectNode);

        return this.selectNode;
    }
}
class Option{
    constructor(savybes, selectNode){
        this.savybes=savybes;
        this.selectNode=selectNode;
        return this.optionNode();
    }
    optionNode(){
        console.log(this.savybes);
        this.savybes.forEach(e => {
             this.optionNodes=document.createElement('option');
             this.optionNodes.setAttribute('value',e.value);
             this.optionNodes.classList.add(...e.oklases);
             this.optionText=document.createTextNode(e.text);
             this.optionNodes.append(this.optionText);
             console.log(this.optionNodes);
             this.selectNode.append(this.optionNodes)
        });
       
    }
}