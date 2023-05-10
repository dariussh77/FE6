import './App.css';
import Hero from './Components/Body/Hero';
import StarList from './Components/Body/StarList';
import Header from './Components/Molecules/Header';
import {Route,Routes} from 'react-router-dom'

const App=()=>{
  return (
    <>
      <Header/>
      <Routes>
        <Route index element={<Hero/>}/>
        <Route path='/starList' element={<StarList/>}/>
      </Routes>
    </>
  );
}

export default App;
