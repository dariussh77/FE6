import Task from './Task.js';

document.querySelector('#newTask > form').addEventListener('submit', e => {
  e.preventDefault();
  const value = e.target.elements.task.value;
  const newTask = new Task({
    title:value
  });

  document.querySelector('#tasks > ul').appendChild(newTask);

  e.target.reset();
});