import './App.css';
import CardPage from './components/CardPage';

const App=()=>{
  return (
    <>
        <section id='teorija'>
          <h1>Context vs redux - globalios būsenos valdymas</h1>
          <ul>
            <li>Redux labiau tinka dideliems projektams</li>
          </ul>
          <h1>Reducer - panašus š switchą- paturbintas useState</h1>
        </section>

        <CardPage/>

    </>
  );
}

export default App;
