import AddTask from './addtask.js';
import OperateTask from './manageTask.js';
import TaskPreData from './data.js';
window.sessionStorage.setItem('id', 0);

let run= new AddTask();
console.log('Main run:', run);
run.addEventListener('submit', new OperateTask().kuriamDiva);


let masyvasTasku=[];

for(let i=0;i<window.localStorage.length;i++){
    if (window.localStorage.key(i).includes('text')){
        masyvasTasku.push({
            id:window.localStorage.key(i).slice(4),
            task:(window.localStorage.getItem(`text${window.localStorage.key(i).slice(4)}`)),
            statusas:window.localStorage.getItem(`button${window.localStorage.key(i).slice(4)}`)});
    };
    

}
console.log('masyvasTasku:',masyvasTasku);
new TaskPreData().preData(masyvasTasku.sort((a,b)=>a.id-b.id));



