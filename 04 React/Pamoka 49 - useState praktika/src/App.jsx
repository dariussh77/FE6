import Header from './components/Header';
import Main from './components/Main';
import './App.css';
import { useState } from 'react';

const App=()=>{
  const [straipsniuMasyvas,setStraipsniuMasyvas]=useState([
    {id:0,url:"https://picsum.photos/id/777/600/400",alt:"Upė", pazymeta:true},
    {id:1,url:"https://picsum.photos/id/700/600/400",alt:"Žuvis", pazymeta:false},
    {id:2,url:"https://picsum.photos/id/701/600/400",alt:"Lubinai", pazymeta:true},
    {id:3,url:"https://picsum.photos/id/702/600/400",alt:"Kalnų ežeras", pazymeta:false},
    {id:4,url:"https://picsum.photos/id/703/600/400",alt:"Vaivorykštė", pazymeta:true},
    {id:5,url:"https://picsum.photos/id/704/600/400",alt:"Bambukai", pazymeta:false},
    {id:6,url:"https://picsum.photos/id/705/600/400",alt:"Raudonas dangus", pazymeta:false},
  ]);
  const [pazymetiKiekis, setPazymetiKiekis]=useState(straipsniuMasyvas.filter(e=>e.pazymeta===true).length);

  const [formaUrl, setFormaUrl]=useState('');
  const [formaAlt, setFormaAlt]=useState('');

  const fPazymeti=(id)=>{
    setStraipsniuMasyvas(straipsniuMasyvas.map(m=>{
      if (m.pazymeta===false && m.id===id){
        setPazymetiKiekis(pazymetiKiekis+1);
        return {
          ...m,
          pazymeta:true
        }
      }else if(m.pazymeta===true && m.id===id){
        setPazymetiKiekis(pazymetiKiekis-1);
        return {
          ...m,
          pazymeta:false
        }
      }else{ return m}
    }));
  };

  return (
    <>
      <Header
        pazymetiKiekis={pazymetiKiekis}
      />
      <Main
        straipsniuMasyvas={straipsniuMasyvas}
        fPazymeti={fPazymeti}
        setFormaUrl={setFormaUrl}
        formaUrl={formaUrl}
        setFormaAlt={setFormaAlt}
        formaAlt={formaAlt}
        setStraipsniuMasyvas={setStraipsniuMasyvas}
        
      />
    </>
  );
}

export default App;
