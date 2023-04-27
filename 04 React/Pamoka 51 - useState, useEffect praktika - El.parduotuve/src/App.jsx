import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import './App.css';
import Main from './components/Main';
import Header from './components/Header';

const App=()=>{
  const [prekes,setPrekes]=useState([]);
  useEffect(()=>{
          fetch('http://localhost:3000/prekes')
              .then(res=>res.json())
              .then(data=>setPrekes(data));
  },[]);
  const [vartotojai,setVartotojai]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:3000/vartotojai')
        .then(res=>res.json())
        .then(data=>setVartotojai(data));
  },[]); 
  const [prisijungta, setPrisijungta]=useState(false);
  const [order,setOrder]=useState([{id:0,pavadinimas:'',nkiekis:0, suma:0,likutis:0}]);

  return (
    <>
      <Header
        prisijungta={prisijungta}
        setPrisijungta={setPrisijungta}
        vartotojai={vartotojai}
        order={order}
        setOrder={setOrder}
        prekes={prekes}
        setPrekes={setPrekes}
      />
      <Main
        prekes={prekes}
        prisijungta={prisijungta}
        setOrder={setOrder}
        setPrekes={setPrekes}
      />
    </>
  );
}

export default App;
