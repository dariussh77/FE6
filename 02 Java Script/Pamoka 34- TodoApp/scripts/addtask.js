export default class AddTask{
    constructor(){
        return this.addTask();
    }
    addTask(){
        this.sectionAddTask=document.querySelector('#addTask');
        this.addHeading=document.createElement('h2');
        console.log(this.addHeading);
        this.headingText=document.createTextNode('Your tasks');
        this.addHeading.appendChild(this.headingText);
        this.addForm=document.createElement('form');
        this.addInputT=document.createElement('input');
        this.addInputT.setAttribute('type', 'text')
        this.addInputT.setAttribute('placeholder', 'e.g wash dishes');
        this.addInputT.setAttribute('id','addInput');
        this.addInputT.setAttribute('name','addInput');
        this.addInputS=document.createElement('input');
        this.addInputS.setAttribute('type', 'submit');
        this.addInputS.setAttribute('value', 'Add');
        this.addForm.append(this.addInputT, this.addInputS);
        this.sectionAddTask.append(this.addHeading, this.addForm);
        console.log('Class Addtask:',this.sectionAddTask);
        return this.sectionAddTask;
    }
}