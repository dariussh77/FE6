import './App.css';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import { useState } from 'react';

const App=()=>{
  const [formInput,setFormInput]= useState('');
  const [toDos,setToDos]=useState([
    {id:1,completed:false,title:'Patobulinti aplikaciją'},
    {id:2,completed:false,title:'Pamiegoti'},
    {id:3,completed:true,title:'Bėgti'}
  ]);
  const trintiToDo=(id)=>{
    setToDos(toDos.filter(toDo=>toDo.id!==id));
  };
  const keistiStatusa=(id)=>{
    setToDos(toDos.map(toDo=>{
      if(toDo.id===id){
        return {
          ...toDo,
          completed:!toDo.completed,
        }
      }else{return toDo};
    }))};
  return (
    <>
      <ToDoForm
        taskInput={formInput}
        changeTaskInput={setFormInput}
        tasks={toDos}
        changeTasks={setToDos}
      />
      <ToDoList
        toDosData={toDos}
        trinimoFunkcija={trintiToDo}
        statusoKeitimoFunkcija={keistiStatusa}
      />
    </>
  );
}

export default App;
