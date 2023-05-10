import { createContext,useReducer } from "react";
const TheameContext=createContext();
const ThemeActionTypesRed={
    diena:'set_day',
    naktis:'set_night'
};
const ColorTheames = {
    diena: 
    {
      theame: 'diena',
      text: '#000000',
      lightText: '#3C3C3C',
      darkText: '#000000',
      background: '#D9DFE0',
      lightBackground: '#EEF1F2',
      darkBackground: '#C8CBCB',
      notActiveLink: '#9e0000',
      activeLink: '#0a7600'
    }, 
    naktis: 
    {
      theame: 'naktis',
      text: '#FFFFFF',
      lightText: '#FFFFFF',
      darkText: '#E4E4E4',
      background: '#181A1A',
      lightBackground: '#2C2D2E',
      darkBackground: '#0D0E0E',
      notActiveLink: '#ff5252',
      activeLink: '#15d703'
    }
  };
  const reducer = (state, action) => {
    switch(action.type){
      case ThemeActionTypesRed.day:
        window.localStorage.setItem('theme','diena');
        return ThemeActionTypesRed.day
      case ThemeActionTypesRed.night:
        window.localStorage.setItem('theme','naktis');
        return ThemeActionTypesRed.night
      default:
        return state;
    }
  }

const TheameProvider= ({children}) => {
    let theame=window.localStorage.getItem('theame');
    theame='naktis';
    const [spalvuPalete, setSpalvuPalete]=useReducer(reducer, theame?ColorTheames[theame]: ColorTheames.day);
    return ( 
        <TheameContext.Provider
            value={{
                spalvuPalete,
                setSpalvuPalete,
                ThemeActionTypesRed
            }}
        >
            {children}
        </TheameContext.Provider>
        
     );
}
export {TheameProvider};
export default TheameContext;