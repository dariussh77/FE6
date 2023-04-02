import TaskOperate from "./taskOperate.js";
export default class OperateTask{
    constructor(){}
    kuriamDiva(e){
        let taskList=document.querySelector('#taskList');
        let id=(window.sessionStorage.getItem('id'));
        console.log('!!!!!!!!',id);
        console.dir(e);
        e.preventDefault();
        let taskDiv=document.createElement('div');
        taskDiv.setAttribute('id',`dtbutton${id}`);
        let taskCheck=document.createElement('span');
        let taskChekI=document.createElement('i');
        taskChekI.setAttribute('id',`cbutton${id}`);
        taskChekI.classList.add('bi', 'bi-circle');
        taskCheck.append(taskChekI);
        let taskHeading=document.createElement('h3');
        taskHeading.setAttribute('id',`button${id}`);
        taskHeading.classList.add('brbi-circle');
        let taskHeadingText=document.createTextNode(e.target.elements.addInput.value);
        
        window.localStorage.setItem(`text${id}`,e.target.elements.addInput.value);
        window.localStorage.setItem(`button${id}`,'bi-circle');

        taskHeading.append(taskHeadingText);
        let taskTrash=document.createElement('span');
        let taskTrashIcon=document.createElement('i');
        taskTrashIcon.setAttribute('id',`tbutton${id}`);
        taskTrashIcon.classList.add('bi', 'bi-trash3-fill');
        taskTrash.append(taskTrashIcon);
        taskDiv.append(taskCheck,taskHeading,taskTrash);
        taskList.append(taskDiv);
        console.log(taskDiv);
        
        let trinti=document.querySelector(`#tbutton${id}`);
        trinti.addEventListener('click',new TaskOperate().fTrinti);
        let padaryta=document.querySelector(`#button${id}`);
        padaryta.addEventListener('click',new TaskOperate().fPadaryta);
        id++;
        window.sessionStorage.setItem('id',id);
        return taskDiv;
   }
}