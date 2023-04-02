let a=suvedimas();
console.log('a:',a);
//AddTask
function suvedimas(){
    window.sessionStorage.setItem('i', 0);
    let sectionAddTask=document.querySelector('#addTask');
    let addHeading=document.createElement('h2');
    let headingText=document.createTextNode('Your  tasks be Klasių');
    addHeading.appendChild(headingText);
    let addForm=document.createElement('form');
    let addInputT=document.createElement('input');
    addInputT.setAttribute('type', 'text')
    addInputT.setAttribute('placeholder', 'e.g wash dishes');
    addInputT.setAttribute('id','addInput');
    addInputT.setAttribute('name','addInput');
    let addInputS=document.createElement('input');
    addInputS.setAttribute('type', 'submit');
    addInputS.setAttribute('value', 'Add');
    addForm.append(addInputT, addInputS);
    sectionAddTask.append(addHeading, addForm);
    console.log(sectionAddTask);
    sectionAddTask.addEventListener('submit', kuriamDiva);
    return sectionAddTask;
}
//${i}


//taskList

function kuriamDiva(event){
    let taskList=document.querySelector('#taskList');
    let i=window.sessionStorage.getItem('i');
    console.log(i);
    console.log(event);
    event.preventDefault();
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
    let taskHeadingText=document.createTextNode(event.target.elements.addInput.value);
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
    window.sessionStorage.setItem('i',i)
};
//sectionAddTask.addEventListener('submit', kuriamDiva);

//Padaryta
function fpadaryta(event){
    //let fTrash=document.querySelector(`#t${event.target.id}`)
    let fCheck=document.querySelector(`#c${event.target.id}`)
    let fH3=document.querySelector(`#${event.target.id}`);
    console.log(fH3);
    console.log(event);
    if (event.target.classList.value==='neperbraukta'){
        fH3.classList.remove('neperbraukta');
        fH3.classList.add('perbraukta');
        fCheck.classList.remove('bi', 'bi-circle');
        fCheck.classList.add('bi', 'bi-check-circle');

    }else{
        fH3.classList.remove('perbraukta');
        fH3.classList.add('neperbraukta');
        fCheck.classList.remove('bi', 'bi-check-circle');
        fCheck.classList.add('bi', 'bi-circle');
    }; 
};
function fTrinti(event){
    let fTrash=document.querySelector(`#d${event.target.id}`);
    console.log(event);
    fTrash.remove('div');
}



