export default class Zmogus{
    constructor({vardas, pavarde, amzius, vedes,lytis, profileImage,id}){
        this.vardas=vardas;
        this.pavarde=pavarde;
        this.amzius=amzius;
        this.vedes=vedes;
        this.lytis=lytis;
        this.profileImage=profileImage;
        this.id=id;
        return this.render();
    }
    render(){
        console.groupCollapsed('1.Iš Json');
        console.log(this.vedes);
        this.divCard=document.createElement('div');
        this.divCard.classList.add('card');

        this.heading=document.createElement('div');
        this.headingTest=document.createTextNode(`${this.vardas} ${this.pavarde}`);
        this.heading.appendChild(this.headingTest);

        this.image=document.createElement('img');
        this.image.setAttribute('src',this.profileImage);
        this.image.setAttribute('alt','this.profileImage');

        this.agePar=document.createElement('p');
        this.ageParTest=document.createTextNode(`Amžius: ${this.amzius}`);
        this.agePar.appendChild(this.ageParTest);

        this.statusPar=document.createElement('p');
        this.statusParTest=document.createTextNode(`Šeimyninė padėtis: ${this.seimosStatusas()}`);
        console.log(this.statusParTest);
        this.statusPar.appendChild(this.statusParTest);

        this.deleteButton = document.createElement('button');
        this.deleteButtonText = document.createTextNode('Delete this card');
        this.deleteButton.appendChild(this.deleteButtonText);
        this.delete();

        this.divCard.append(this.heading,this.image, this.agePar,this.statusPar, this.deleteButton);
        console.groupEnd('1.Iš Json');
        return this.divCard;
    }
    seimosStatusas(){
        if(this.lytis==='vyras' && this.vedes){
            return 'vedęs';
        }else if(this.lytis==='vyras' && !this.vedes){
            return 'nevedęs';
        }else if(this.lytis==='moteris' && this.vedes){
            return 'ištekėjusi';
        }else if(this.lytis==='moteris' && !this.vedes){
            return 'netekėjusi';
        }
    }
    delete(){
        this.deleteButton.addEventListener('click',e=>{
            this.divCard.remove();
            fetch(`http://localhost:3000/asmenys/${this.id}`,{method:'DELETE'});
        })
        
    }

};