import './App.css';
import Hero from './components/Pages/Hero';
import Header from './components/Organisms/Header';
import Footer from './components/Organisms/Footer';
import PrekesCards from './components/Pages/PrekesCards';
import CountriesCards from './components/Pages/CountriesCards';
import { Routes, Route } from 'react-router-dom'; //React Route

const App = () => {
  return (
    <>
      <section id='teorija'>
      <h1><a href="https://reactrouter.com/en/main">React router - npm i react-router-dom</a> </h1>
      <ol>
        <li>Suinstaliuoti</li>
        <li>import ir apgaubti index.js</li>
        <li>import Routes ir Route - App.jsx</li>
        <li>Routes viduje sudeda Route su kortel4mis</li>
        <li>menu suinportuojame Link - a tagus pekeocia me į Link to="/nuoroda"</li>
      </ol>
    </section>
    <hr />
      <Header />

      <Routes>
        <Route
          path='/'
          element={<Hero />}
        />
        <Route
          path='/prekes'
          element={<PrekesCards />}
        />
        <Route
          path='/countries'
          element={<CountriesCards />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;