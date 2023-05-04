import { createContext,useState,useReducer } from "react";

const CardContext=createContext();
const reducer =(state,action)=>{
    switch(action.type){
        case 'triname': 
            return state.filter(el=>el.id !==action.id);
        case 'keiciame_statusa':
            return state.map(el=>{
                if (el===action.id){
                    return {...el, status:!el.status}
                }else {return card};
            })
    }
}


const CardProvider = ({children}) => {
    const [korteles,korteliuRedagavimas]=useReducer(reducer,[
        {id:0, title:'Nesmone', status:true},
        {id:1, title:'smone', status:false},
        {id:2, title:'Beveik smone', status:false}
    ])
/*     const [cards,setCards]=useState([
        {id:0, title:'Nesmone', status:true},
        {id:1, title:'smone', status:false},
        {id:2, title:'Beveik smone', status:false}
    ]); */
/*     const statusChanger=(id)=>{
    setCards(cards.map(card=>
        card.id===id
            ? {...card, status:!card.status}
            :card));
    } */
    return ( 
        <CardContext.Provider
            value={{korteles, korteliuRedagavimas}}
        >
            {children}
        </CardContext.Provider>
     );
}
 
export {CardProvider};
export default CardContext; //pagrindinis exportas Contexts