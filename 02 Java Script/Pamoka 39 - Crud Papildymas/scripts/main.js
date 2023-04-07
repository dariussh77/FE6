import StarCard from './starcard.js'
// Užkrauti is stars.json
const sectionIs=document.querySelector('#isvedimas');
const allStarsDiv=document.createElement('div');
allStarsDiv.classList.add('allStars');
sectionIs.append(allStarsDiv);

fetch('http://localhost:3000/stars')
    .then(res=>res.json())
    .then(stars=>{
        //console.log(stars);
        stars.forEach(e => {
            //console.log(e);
            const starCard= new StarCard(e);
            allStarsDiv.append(starCard);
        });
    })

    // Įvesti per input

document.querySelector('#forma>form')
    .addEventListener('submit', e=>{
        e.preventDefault();
        const elm=e.target.elements;
        //console.log(elm);
        const fData={
            id:Date.now(),
            name:elm.name.value,
            constalation: elm.constalation.value,
            evolutionStage:elm.evolutionStage.value,
            mass:elm.mass.valueAsNumber,
            startype:elm.startype.value,
            absBright:elm.absBright.valueAsNumber,
            age:elm.age.valueAsNumber,
            distance:elm.distance.valueAsNumber,
            visBright:elm.visBright.valueAsNumber,
            coord:{
                rect:elm.rect.value, 
                decl:elm.decl.value
            },
            photo:{
                src:elm.src.value,
                alt:elm.alt.value
            }
        };
        console.log(fData);
        const allStarsDiv=document.querySelector('#isvedimas>div');
       let fCard= new StarCard(fData);
       allStarsDiv.append(fCard);
       fetch('http://localhost:3000/stars',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(fData)
        });
        e.target.reset();
    });

//Filtravimas

document.querySelector('#sectionFilter>form')
    .addEventListener('submit', e=>{
        e.preventDefault();
        const tempE =e.target.elements;
        console.log(tempE);
        fetch('http://localhost:3000/stars')
            .then(res=>res.json())
            .then(filterD=> {
                document.querySelector('#isvedimas>div').remove();
                const allStarsDiv=document.createElement('div');
                allStarsDiv.classList.add('allStars');
                sectionIs.append(allStarsDiv);
                console.log(filterD);
                let  filtered=null;
                if(tempE.evolutionStageF.value==='...Pasirinkti visas...'){
                    filtered=filterD;
                }else{
                    filtered=filterD.filter(ev=>ev.evolutionStage===tempE.evolutionStageF.value);
                }
                
                console.log(filtered);
                filtered.forEach(evnt => {
                    //console.log(e);
                    const starCardF= new StarCard(evnt);
                    allStarsDiv.append(starCardF);
                });
            })
    })

