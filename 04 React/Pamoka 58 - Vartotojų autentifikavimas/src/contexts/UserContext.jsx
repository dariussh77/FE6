import { createContext,useReducer,useEffect, useState, Children } from "react";

const UserContext=createContext();
const UsersActionTypes={
    get: 'get_all_users'
}
const reducer = (state, action) => {
    switch(action.type){
      case UsersActionTypes.get:
        return action.data;
      default:
        return state;
    }
  };
const UserProvider = ({children}) => {
    const [users, setUsers]=useReducer(reducer,[]);
    const [currentUser, setCurrentUser]=useState(null);
    useEffect(()=>{
        fetch(`http://localhost:7777/users`)
            .then(res=>res.json())
            .then(data=>setUsers({
                type:UsersActionTypes.get,
                data:data
            }));
    },[])
    return ( 
        <UserContext.Provider
            value={{
                users,
                setUsers,
                UsersActionTypes,
                currentUser,
                setCurrentUser
            }}
        >
            {children}
        </UserContext.Provider>
     );
}
 export {UserProvider};
export default UserContext;