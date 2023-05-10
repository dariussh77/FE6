import './App.css';
import {Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Register from './components/Register';

const App=()=>{
  return (
    <>
      <Header/>
      <Routes>
        <Route index element={<h1>Home</h1> }/>
        <Route path='/register' element={<Register/>}/>
      </Routes>


      <ul>
        <li><a href="https://formik.org/docs/overview"> Formik bibliotekos paketas formoms kurti</a></li>
        <li><a href="https://regexr.com/">Regex - tikrinimo sintaksė</a></li>
        <li><a href="https://www.npmjs.com/package/yup">YUP - tikrinimo metodai</a></li>
        <li>reacthookform - mažiau populiari formu validacija</li>
      
      </ul>
    </>
  );
}

export default App;
