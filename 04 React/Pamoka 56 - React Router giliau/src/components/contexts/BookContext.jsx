import { createContext,useEffect,useReducer } from "react";
const BooksContext=createContext();
const BooksActionTypes={
    get: 'get_all_books'
};
const reducer = (state, action)=>{
    switch(action.type){
        case BooksActionTypes.get: return action.data;
        default: return state;
    }
}
const BooksProvider = ({children}) => {
    const [books, setBooks]=useReducer(reducer,[]);
    useEffect(()=>{
        fetch ('http://localhost:7777/books')
        .then (res=>res.json())
        .then (data=>setBooks({
            type: BooksActionTypes.get,
            data: data
        }))
    },[])
    return ( 
        <BooksContext.Provider
            value={{
                books
            }}
        >
            {children}
        </BooksContext.Provider>
     );
}
 
export {BooksProvider};
export default BooksContext;