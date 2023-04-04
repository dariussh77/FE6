import Zmogus from './zmogus.js';
/* const duomenys={
    asmenys:[
        {id: 1,vardas: 'Rokas', pavarde:'Banaitis' },
        {id: 2,vardas: 'Darius', pavarde:'Šilinskas' }
    ],      
    auto:[
        {id: 1,pavadinimas:'Audi',modelis:'A4'},
        {id: 2,pavadinimas:'Skoda',modelis:'K5'}
    ]
};
let jsondata=JSON.stringify(duomenys);
console.log(jsondata); */

//Get metodas

/* fetch('http://localhost:3000/auto')
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
    })

//Get specific metodas

fetch('http://localhost:3000/auto/2') //id2
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
    }) */

//Delete metodas

/* fetch('http://localhost:3000/auto/2', {method:'DELETE'}) //deletiname id2
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
    }) */

//POST metodas

/* fetch('http://localhost:3000/auto/', {
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({
        id:2,
        pavadinimas:'ZAZAS',
        modelis: 'Kurmis'
    })        
})
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
    }) */

//Atvaizduoti iš data.json
console.groupCollapsed('1.Iš Json');
fetch('http://localhost:3000/asmenys/')
  .then(res => res.json())
  .then(zmones => {
    //console.log(zmones);
    const allCards = document.querySelector('#allCards');
    zmones.forEach(zmogus => {
        //console.log(zmogus);
      const zmogusDiv = new Zmogus(zmogus);
      allCards.appendChild(zmogusDiv);
    });
  });
  console.groupEnd('1.Iš Json');
  //        Įkelti iš Formos

  document.querySelector('#newCard')
    .addEventListener('submit',e=>{
        e.preventDefault();
        console.log(e);
        const elementai=e.target.elements;
        console.log(elementai);
        const zmogus = {
            vardas: elementai.vardas.value,
            pavarde: elementai.pavarde.value,
            amzius: elementai.amzius.valueAsNumber,
            vedes: elementai.vedes.checked,
            lytis: elementai.lytis.value,
            profileImage: elementai.profileImage.value,
            id: Date.now()
          };
          console.log(zmogus);
        const asmuoDiv=new Zmogus(zmogus);
        document.querySelector('#allCards').appendChild(asmuoDiv);
        fetch('http://localhost:3000/asmenys/',
            {
                'method': 'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(zmogus)
        });
        e.target.reset();
    })

