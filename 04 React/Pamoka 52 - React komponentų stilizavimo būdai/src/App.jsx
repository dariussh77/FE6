import styles from './App.css';
import styles3 from 'styled-components'

const Labas=styles3.li`
  color: blue;
`;

//import style1 from './All.module.css'

const App=()=>{
  return (
    <>
      <ul className={styles.ul}>
        <li >Atomic design - žr. katalogu struktura</li>
        <li></li>
        <li>CSS rašymo būdai:
          <ol>
            <li className={Labas}>Importovimas CSS ir SCCS</li>
            <li>Inline CSS rašymas - &#60;div class='' style=&#123;&#123;color: 'red', borderRadius: 5px&#125;&#125;&#62; - rašyti camel case</li>
            <li>css modulių naudojimas</li>
            <li>npm i styled-component: import styles3 from 'styled-components' const pavizdys=</li>
          </ol>
        </li>
        <li></li>
      </ul>
    </>
  );
}

export default App;
