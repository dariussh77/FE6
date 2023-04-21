import './App.css';
import Main from './components/Main';

const App=()=>{
  const korteles=[
    {
      imageData:{
        source:'https://picsum.photos/id/1077/600/400',
        alternativeText:'Dviratininkai',
        CSS_class:'img-med'},
      heading:'Nestinimas',
      paragraph:'App ima iš cards, Cards is image: duomenys pateikiami is APP'
    },{
      imageData:{
        source:'https://picsum.photos/id/1071/600/400',
        alternativeText:'Dviratininkai',
        CSS_class:'img-med'},
      heading:'Nestinimas',
      paragraph:'App ima iš cards, Cards is image: duomenys pateikiami is APP'
    },{
      imageData:{
        source:'https://picsum.photos/id/999/600/400',
        alternativeText:'Dviratininkai',
        CSS_class:'img-med'},
      heading:'Nestinimas',
      paragraph:'App ima iš cards, Cards is image: duomenys pateikiami is APP'
    },{
      imageData:{
        source:'https://picsum.photos/id/1077/600/400',
        alternativeText:'Dviratininkai',
        CSS_class:'img-med'},
      heading:'Nestinimas',
      paragraph:'App ima iš cards, Cards is image: duomenys pateikiami is APP'
    },{
      imageData:{
        source:'https://picsum.photos/id/1071/600/400',
        alternativeText:'Dviratininkai',
        CSS_class:'img-med'},
      heading:'Nestinimas',
      paragraph:'App ima iš cards, Cards is image: duomenys pateikiami is APP'
    },{
      imageData:{
        source:'https://picsum.photos/id/999/600/400',
        alternativeText:'Dviratininkai',
        CSS_class:'img-med'},
      heading:'Nestinimas',
      paragraph:'App ima iš cards, Cards is image: duomenys pateikiami is APP'
    }
  ];
  const texts = {
    porfolio:{porfolioHeader:'Porfolio',porfolioP:"    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ipsa aut temporibus quam molestiae voluptate, error vitae illo earum, enim, at est nihil exercitationem? Reprehenderit ipsam repudiandae culpa reiciendis animi."},
    hero:{heroHeader:'Title', heroP:"Aprašymas, \n kokie buna kalnai", heroButton:"Važiuojam", href:"https://www.google.com/maps"}
  }
  const klases={klDivL1:'divL1', klCards:'cards'}
  return (
    <>
    <pre>haha hihi
      po eilutes luzio
    </pre>
          <Main
            kort={korteles}
            texts={texts}
            klases={klases}
          />
    </>
  )
}

export default App;
