import styled from 'styled-components';
import { useState, useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import {compareSync} from 'bcryptjs';

const StyledMain=styled.main`
    >form {
        width: 50%;
        margin: 0 auto;
        display: flex;
        align-items:center;
        gap:5px;
    }
`;


const Login = () => {
    const [formInputs, setFormInputs]=useState({
        userName:'',
        password:''
    });
    
    const [failedLogin, setFailedLogin]=useState(false);
    const navigate = useNavigate();
    const {users, setCurrentUser}=useContext(UserContext);

    const inputHandler = e=>{
        setFormInputs({
            ...formInputs,
            [e.target.name]:e.target.value
        });
        setFailedLogin(false);
    };
    const formSubmit = e=>{
        e.preventDefault();
        const loggedInUser= users.find(user=>user.userName===formInputs.userName&& compareSync(formInputs.password,user.password) );
        if (loggedInUser){
            setCurrentUser(loggedInUser);
            navigate('/posts')
        }else{
            setFailedLogin(true);
        };
    };
  
    return ( 
        <>
            <StyledMain>
                <form onSubmit={(e)=>{formSubmit(e)}}> 
                    <div>
                        <label htmlFor="userName">User name</label>
                        <input 
                            type="text"
                            name='userName' id='username'
                            value={formInputs.userName}
                            onChange={(e)=>{inputHandler(e)}}
                         />
                    </div>
                    <div>
                        <label htmlFor="password">Login</label>
                        <input 
                            type="password"
                            name='password' id='password'
                            value={formInputs.password}
                            onChange={e=>{inputHandler(e)}}
                         />
                    </div>
                   <input type="submit" value='Login'/>
                </form>
                    {
                        failedLogin &&<h1 style={{color:'red'}}>Neteisingi prisijungimo duomenys</h1>
                    }
            </StyledMain>
        </>
        
     );
}
 
export default Login;