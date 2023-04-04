// 1.Užduotis - Generuoti vartotoją

export default class RandomAsmuo{
    constructor(){
        return this.randomAsmuo();
    }
    randomAsmuo(){
    fetch('https://randomuser.me/api/')
    .then (e=>e.json())
    .then (data=>{
        console.groupCollapsed('1.Užduotis');
        console.log(data);
        const section=document.querySelector('#generuoti');
        const div=document.createElement('div');
        const spanV=document.createElement('span');
        const spanP=document.createElement('span');
        const spanA=document.createElement('span');
        const spanS=document.createElement('span');
        const spanE=document.createElement('span');
        const imgN=document.createElement('img');
        const spanVText=document.createTextNode('Name: '+ data.results[0].name.first);
        const spanPText=document.createTextNode('Surname: '+ data.results[0].name.last);
        const spanAText=document.createTextNode('Age: '+ data.results[0].dob.age);
        const spanSText=document.createTextNode('Country: '+ data.results[0].location.state);
        const spanEText=document.createTextNode('email: '+ data.results[0].email);
        imgN.setAttribute('src',data.results[0].picture.large)
        imgN.setAttribute('alt','Medium photo')
        spanV.append(spanVText);
        spanP.append(spanPText);
        spanA.append(spanAText);
        spanS.append(spanSText);
        spanE.append(spanEText);
        div.append(spanV,spanP,spanA,imgN,spanS,spanE);
        const button=document.createElement('input');
        button.setAttribute('type','button');
        button.setAttribute('id','paleisti');
        button.setAttribute('name','paleisti');
        button.setAttribute('value','Generuoti vartotoją');
        section.append(div,button)
        console.log(section);
        const paleisti=document.querySelector('#paleisti');
        paleisti.addEventListener('click',(e=>location.reload()));
        console.groupEnd('1.Užduotis');
        });
    }
}

