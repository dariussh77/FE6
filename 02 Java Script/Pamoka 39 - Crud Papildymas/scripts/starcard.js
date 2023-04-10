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
        this.iMasyvas=[];
        //console.log(this.photo.src);
        this.starCardDiv=document.createElement('div');
        this.starCardDiv.classList.add('starCard');

        this.buttonE=document.createElement('button');
        this.buttonE.classList.add('edit');
        this.buttonEI=document.createElement('i');
        this.buttonEI.classList.add('bi' , 'bi-pen');
        this.buttonE.appendChild(this.buttonEI);
        


        this.heading=document.createElement('h3');
        this.headingB=document.createElement('b');
        this.headingI=document.createElement('i');
        this.headingIText=document.createTextNode(this.name);
        this.headingI.appendChild(this.headingIText)
        this.heading.append(this.headingB, this.headingI);
        this.iMasyvas.push(this.headingI);

        this.img=document.createElement('img');
        this.img.setAttribute('src', this.photo.src);
        this.img.setAttribute('alt', this.photo.alt);

        this.consP=document.createElement('p');
        this.consB=document.createElement('b');
        this.consI=document.createElement('i');
        this.consBText=document.createTextNode('Žvaigždynas: ');
        this.consIText=document.createTextNode(this.constalation);
        this.consB.append(this.consBText);
        this.consI.append(this.consIText);
        this.consP.append(this.consB,this.consI);
        this.iMasyvas.push(this.consI);

        this.evoP=document.createElement('p');
        this.evoB=document.createElement('b');
        this.evoI=document.createElement('i');
        this.evoBText=document.createTextNode('Evoliucinis etapas: ');
        this.evoIText=document.createTextNode(this.evolutionStage);
        this.evoB.append(this.evoBText);
        this.evoI.append(this.evoIText);
        this.evoP.append(this.evoB,this.evoI);
        this.iMasyvas.push(this.evoI);

        this.stypeP=document.createElement('p');
        this.stypeB=document.createElement('b');
        this.stypeI=document.createElement('i');
        this.stypeBText=document.createTextNode('Žvaigždės tipas: ');
        this.stypeIText=document.createTextNode(this.startype);
        this.stypeB.append(this.stypeBText);
        this.stypeI.append(this.stypeIText);
        this.stypeP.append(this.stypeB,this.stypeI);
        this.iMasyvas.push(this.stypeI);


        this.massP=document.createElement('p');
        this.massB=document.createElement('b');
        this.massI=document.createElement('i');
        this.massBText=document.createTextNode('Žvaigždės masė Saulėmis: ');
        this.massIText=document.createTextNode(this.mass);
        this.massB.append(this.massBText);
        this.massI.append(this.massIText);
        this.massP.append(this.massB,this.massI);
        this.iMasyvas.push(this.massI);

        this.absP=document.createElement('p');
        this.absB=document.createElement('b');
        this.absI=document.createElement('i');
        this.absBText=document.createTextNode('Absoliutus ryškis: ');
        this.absIText=document.createTextNode(this.absBright);
        this.absB.append(this.absBText);
        this.absI.append(this.absIText);
        this.absP.append(this.absB,this.absI);
        this.iMasyvas.push(this.absI);

        this.ageP=document.createElement('p');
        this.ageB=document.createElement('b');
        this.ageI=document.createElement('I');
        this.ageBText=document.createTextNode('Amžius milijonais metų: ');
        this.ageIText=document.createTextNode(this.age);
        this.ageB.append(this.ageBText);
        this.ageI.append(this.ageIText);
        this.ageP.append(this.ageB,this.ageI);
        this.iMasyvas.push(this.ageI);

        this.distP=document.createElement('p');
        this.distB=document.createElement('b');
        this.distI=document.createElement('I');
        this.distBText=document.createTextNode('Nuotolis šviesmečiais: ');
        this.distIText=document.createTextNode(this.distance);
        this.distB.append(this.distBText);
        this.distI.append(this.distIText);
        this.distP.append(this.distB,this.distI);
        this.iMasyvas.push(this.distI);
      
        this.visbP=document.createElement('p');
        this.visbB=document.createElement('b');
        this.visbI=document.createElement('i');
        this.visbBText=document.createTextNode('Matomas ryškumas: ');
        this.visbIText=document.createTextNode(this.visBrigth);
        this.visbB.append(this.visbBText);
        this.visbI.append(this.visbIText);
        this.visbP.append(this.visbB,this.visbI);
        this.iMasyvas.push(this.visbI);
        
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
        
        this.starCardDiv.append(this.buttonE,this.heading, this.img, this.consP,this.evoP,this.stypeP,this.massP, this.absP,this.ageP,this.distP,this.visbP,this.coordU,this.button);

        this.editMain();
        

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
    editMain(){
        this. eventas=this.buttonE.addEventListener('click',this.f=e=>{
            console.log(e);
            console.log('Paspaustas Edit Main', this.name);
            console.log(this.iMasyvas);
            this.buttonS=document.createElement('button');
            this.buttonS.classList.add('save');
            this.buttonSI=document.createElement('i');
            this.buttonSI.classList.add('bi' , 'bi-save-fill');
            this.buttonS.appendChild(this.buttonSI);
            this.starCardDiv.append(this.buttonS);
            this.iInputMasyvas=this.iMasyvas.map(el => {
                this.input=document.createElement('input');
                this.input.setAttribute('value', el.textContent);
                this.newI=el.appendChild(this.input);
                el.removeChild(el.firstChild); 
                return el;         
            });
            this.buttonE.removeEventListener('click',this.f);
            console.log(this.iInputMasyvas);
            this.keys=['name','constalation','evolutionStage','startype','mass','absBright','age','distance', 'visBright'];
            this.i=0;
            this.buttonS.addEventListener('click',this.f2=()=>{
                this.iInputMasyvas.forEach(elmn=>{
                    this.newIText=document.createTextNode(elmn.childNodes[0].value);
                    this.key=this.keys[this.i];
                    elmn.append(this.newIText);
                    this.newdata={[this.key]:elmn.childNodes[0].value};
                    console.log(this.newdata);
                    elmn.removeChild(elmn.firstChild);
                    this.buttonE.addEventListener('click',this.f);
                    fetch(`http://localhost:3000/stars/${this.id}`,{
                        method:"PATCH",
                        headers:{"Content-Type":"application/json"},
                        body: JSON.stringify(this.newdata)
                    });
                    this.buttonS.remove();
                    this.i++;
                });
                
                this.buttonS.removeEventListener('click',this.f2);
            });
            });

        };
        
    }
