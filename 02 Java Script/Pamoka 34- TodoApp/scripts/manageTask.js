export default class KuriamDiva{
    constructor(run){
        this.run=run;
       return this.kuriamDiva(run);
    }
    kuriamDiva(e){
    
    let taskList=document.querySelector('#taskList');
    let i=window.sessionStorage.getItem('i');
    console.log(i);
    console.log(e);
    
    let taskDiv=document.createElement('div');
    taskDiv.setAttribute('id',`dtbutton${i}`);
    let taskCheck=document.createElement('span');
    let taskChekI=document.createElement('i');
    taskChekI.setAttribute('id',`cbutton${i}`);
    taskChekI.classList.add('bi', 'bi-circle');
    taskCheck.append(taskChekI);
    let taskHeading=document.createElement('h3');
    taskHeading.setAttribute('id',`button${i}`);
    taskHeading.classList.add('neperbraukta');
    let taskHeadingText=document.createTextNode(e.target.elements.addInput.value);
    taskHeading.append(taskHeadingText);
    let taskTrash=document.createElement('span');
    let taskTrashIcon=document.createElement('i');
    taskTrashIcon.setAttribute('id',`tbutton${i}`);
    taskTrashIcon.classList.add('bi', 'bi-trash3-fill');
    taskTrash.append(taskTrashIcon);
    taskDiv.append(taskCheck,taskHeading,taskTrash);
    taskList.append(taskDiv);
    console.log(taskDiv);
    
    let trinti=document.querySelector(`#tbutton${i}`);
    trinti.addEventListener('click',fTrinti);
    let padaryta=document.querySelector(`#button${i}`);
    padaryta.addEventListener('click',fpadaryta);
    i++;
    window.sessionStorage.removeItem('i');
    window.sessionStorage.setItem('i',i);
    (e).preventDefault();
   }
}