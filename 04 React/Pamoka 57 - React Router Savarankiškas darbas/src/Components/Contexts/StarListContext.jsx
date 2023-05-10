import { createContext,useEffect,useReducer } from "react"; 
const StartListContext=createContext();
//console.log('StartListContext: ', StartListContext);

const StarListActionTypes={
    get:'get_stars',
    edit:'edit_star'
};
const reducer=(currentState,action)=>{
    switch (action.typeF) {
        case StarListActionTypes.get: return action.starsData;
        case StarListActionTypes.edit:
            fetch(`http://localhost:7777/stars`,{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(action.data)            
            });
            return [...currentState, action.data];
        default: return currentState;
    };
};


const StartListProvider = ({children}) => {
    const [starsM, setStarsM]=useReducer(reducer, []);
    useEffect(()=>{
        fetch(`http://localhost:7777/stars`)
            .then (res=>res.json())
            .then (data=>setStarsM({
                typeF: StarListActionTypes.get,
                starsData:data
                })
            )
    },[]);

    
   
    return ( 
            <StartListContext.Provider value={{starsM, setStarsM, StarListActionTypes}}>
                {children}
            </StartListContext.Provider>
     );
};
export {StartListProvider};
export default StartListContext;