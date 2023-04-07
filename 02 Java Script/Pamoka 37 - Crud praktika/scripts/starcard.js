export default class StarCard{
    constructor({mass,id,name,constalation,evolutionStage,startype,absBright,age,coord,distance, photo,visBright}){
        this.mass=mass;
        this.id=id;
        this.name=name;
        this.constalation=constalation;
        this.evolutionStage=evolutionStage;
        this.startype=startype;
        this.absBright=absBright;
        this.age=age;
        this.coord=coord;
        this.distance=distance;
        this.photo=photo;
        this.visBrigth=visBright;
        return this.fstarCard();
    }
    fstarCard(){
        //console.log(this.photo.src);
        this.starCardDiv=document.createElement('div');
        this.starCardDiv.classList.add('starCard');

        this.heading=document.createElement('h3');
        this.headingText=document.createTextNode(this.name);
        this.heading.append(this.headingText);

        this.img=document.createElement('img');
        this.img.setAttribute('src', this.photo.src);
        this.img.setAttribute('alt', this.photo.alt);

        this.consP=document.createElement('p');
        this.consB=document.createElement('b');
        this.consBText=document.createTextNode('Žvaigždynas: ');
        this.consPText=document.createTextNode(this.constalation);
        this.consB.append(this.consBText);
        this.consP.append(this.consB,this.consPText);

        this.evoP=document.createElement('p');
        this.evoB=document.createElement('b');
        this.evoBText=document.createTextNode('Evoliucinis etapas: ');
        this.evoPText=document.createTextNode(this.evolutionStage);
        this.evoB.append(this.evoBText);
        this.evoP.append(this.evoB,this.evoPText);

        this.stypeP=document.createElement('p');
        this.stypeB=document.createElement('b');
        this.stypeBText=document.createTextNode('Žvaigždės tipas: ');
        this.stypePText=document.createTextNode(this.startype);
        this.stypeB.append(this.stypeBText);
        this.stypeP.append(this.stypeB,this.stypePText);


        this.massP=document.createElement('p');
        this.massB=document.createElement('b');
        this.massBText=document.createTextNode('Žvaigždės masė Saulėmis: ');
        this.massPText=document.createTextNode(this.mass);
        this.massB.append(this.massBText);
        this.massP.append(this.massB,this.massPText);

        this.absP=document.createElement('p');
        this.absB=document.createElement('b');
        this.absBText=document.createTextNode('Absoliutuas ryškis: ');
        this.absPText=document.createTextNode(this.absBright);
        this.absB.append(this.absBText);
        this.absP.append(this.absB,this.absPText);

        this.ageP=document.createElement('p');
        this.ageB=document.createElement('b');
        this.ageBText=document.createTextNode('Amžius milijonais metų: ');
        this.agePText=document.createTextNode(this.age);
        this.ageB.append(this.ageBText);
        this.ageP.append(this.ageB,this.agePText);

        this.distP=document.createElement('p');
        this.distB=document.createElement('b');
        this.distBText=document.createTextNode('Nuotolis šviesmečiais: ');
        this.distPText=document.createTextNode(this.distance);
        this.distB.append(this.distBText);
        this.distP.append(this.distB,this.distPText);
      
        this.visbP=document.createElement('p');
        this.visbB=document.createElement('b');
        this.visbBText=document.createTextNode('Matomas ryškumas: ');
        this.visbPText=document.createTextNode(this.visBrigth);
        this.visbB.append(this.visbBText);
        this.visbP.append(this.visbB,this.visbPText);
        
        this.coordU=document.createElement('ul');
        this.coordBU=document.createElement('b');
        this.coordL1=document.createElement('li');
        this.coordL2=document.createElement('li');
        this.coordUText=document.createTextNode('Koordinatės žvaigždėlapyje: ');
        this.coordL1Text=document.createTextNode('Rektascensija: ' + this.coord.rect);
        this.coordL2Text=document.createTextNode('Deklinacija: '+ this.coord.decl);
        this.coordBU.append(this.coordUText);
        this.coordL1.append(this.coordL1Text);
        this.coordL2.append(this.coordL2Text);
        this.coordU.append(this.coordBU,this.coordL1,this.coordL2);

        this.button=document.createElement('button');
        this.buttonText=document.createTextNode('Ištrinti!!!');
        this.button.append(this.buttonText);
        this.trinti();
        
        this.starCardDiv.append(this.heading, this.img, this.consP,this.evoP,this.stypeP,this.massP, this.absP,this.ageP,this.distP,this.visbP,this.coordU,this.button);


        return this.starCardDiv;
    }
    trinti(){
        this.button.addEventListener('click',e=>{
            this.starCardDiv.remove();
            fetch(`http://localhost:3000/stars/${this.id}`,{
            method:'DELETE'
        });
        })
    }
}