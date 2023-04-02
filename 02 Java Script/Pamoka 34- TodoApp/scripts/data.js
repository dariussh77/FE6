import TaskOperate from "./taskOperate.js";
export default class TaskPreData{
    constructor(){
       

    }
    preData(evn){
        let predata=[];
        predata=evn;
        console.log('Predata:', predata);
        predata.forEach(e=>new TaskPreData().preDataOperate(e));
    }
    preDataOperate(e){
        
        let id=(window.sessionStorage.getItem('id'));
       // window.localStorage.setItem(`nr${id}`,id)
        console.log('!!!!!!!!',id);
        console.log('Data preDataOperate:',e);
        let taskList=document.querySelector('#taskList');
        let taskDiv=document.createElement('div');
        taskDiv.setAttribute('id',`dtbutton${e.id}`);
        let taskCheck=document.createElement('span');
        let taskChekI=document.createElement('i');
        taskChekI.setAttribute('id',`cbutton${e.id}`);
        taskChekI.classList.add('bi', e.statusas);
        taskCheck.append(taskChekI);
        let taskHeading=document.createElement('h3');
        taskHeading.setAttribute('id',`button${e.id}`);
        taskHeading.classList.add(`br${e.statusas}`);
        let taskHeadingText=document.createTextNode(e.task);

        window.localStorage.setItem(`text${id}`,e.task);
        window.localStorage.setItem(`button${id}`,e.statusas);

        taskHeading.append(taskHeadingText);
        let taskTrash=document.createElement('span');
        let taskTrashIcon=document.createElement('i');
        taskTrashIcon.setAttribute('id',`tbutton${e.id}`);
        taskTrashIcon.classList.add('bi', 'bi-trash3-fill');
        taskTrash.append(taskTrashIcon);
        taskDiv.append(taskCheck,taskHeading,taskTrash);
        taskList.append(taskDiv);
        console.log(taskDiv);
        id++;
        window.sessionStorage.setItem('id',id);
        let trinti=document.querySelector(`#tbutton${e.id}`);
        trinti.addEventListener('click',new TaskOperate().fTrinti);
        let padaryta=document.querySelector(`#button${e.id}`);
        padaryta.addEventListener('click',new TaskOperate().fPadaryta);
    }
}