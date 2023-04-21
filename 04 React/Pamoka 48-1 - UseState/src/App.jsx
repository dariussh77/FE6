import Heading from './components/Heading';
import './App.css';
import {useState} from 'react';

const App=()=>{
/*   let skaicius=10;
  const skaicius=useState(10);
  const skaiciausKeitimas=useState(10[1]); */
  const [skaicius,setSkaicius]=useState(10);
  const mazintiSkaiciu=()=>{
    setSkaicius(skaicius-1);
    console.log('skaicius-: ', skaicius);
  };
  const didintiSkaiciu=()=>{
    setSkaicius(skaicius+1);
    console.log('skaicius+: ', skaicius);
  };
  //let arPrisijunges=true;
  const [arPrisijunges,setArprisijuges]=useState(false);
  const atsijungti=()=>{setArprisijuges(false)};
  const prisijungti=()=>{setArprisijuges(true)};
  return (
    <>
    <header>
      {
        arPrisijunges
          ?<button onClick={()=>atsijungti()}>Logout</button>
          :<><button onClick={()=>prisijungti()}>Login</button><button>SignIn</button></>
      }
    </header>
      <div>
        <p>Skaičius:{skaicius}</p>
        <button onClick={()=>mazintiSkaiciu()}>Mažinti skaičių</button> {/* //negalima kreiptis tiesiogiai į funkciją */}
        <button onClick={()=>didintiSkaiciu()}>Didinti skaičių</button>
      </div>
      <div>
        <ul>
          <li>negalima kreiptis tiesiogiai į funkciją - '( )=&gt;mazintiSkaiciu( )'</li>
          <li>useState - 1.import &#123;useState&#125; from 'react'; 2.const [skaicius,setSkaicius]=useState(10); 3.setSkaicius(skaicius+1);</li>
        </ul>
      </div>
      <Heading
        size={2}
        text='H2 gautas'
      />
      <Heading
        size={1}
        text='H1  gautas'
      />

    </>
  );
}

export default App;
