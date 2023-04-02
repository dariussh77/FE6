import AddTask from './addtask.js';
import ManageTask from './manageTask.js';

let run= new AddTask();

console.log(run);
run.addEventListener('click', new ManageTask(run));