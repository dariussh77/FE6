import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import UserContext from '../../contexts/UserContext';
const StyledHeader=styled.header`
    width:100%;
    height: 60px;
    padding: 0 30px;
    border-bottom:2px solid black;
    display: flex;
    justify-content:space-between;
    align-items: center;
    >div.userInfo{
        display: flex;
        >a{
            display: flex;
            gap:10px;
        }
        img{
            width: 50px;
            height: 50px;
            border-radius: 50%;
        }
    }
`;


const Header = () => {
    const {currentUser,setCurrentUser}=useContext(UserContext);
    const navigate=useNavigate();
    return ( 
        <StyledHeader>
        <div>
            logo
        </div>
        <div className="userInfo">
            {
                !currentUser?
                <>
                <Link to="/login">
                    <button>Login</button>
                </Link>
                <Link to="/register">
                    <button>Register</button>
                </Link>
                </>:
                <>
                    {
                        currentUser.role === "admin" &&
                        <Link to="/manageUsers">Manage Users</Link>
                    }
                    <Link to='/userPage'>
                        <img src={currentUser.avatarURL} alt="User Avatar" />
                        <p>{currentUser.userName}</p>
                    </Link>
                    <button
                        onClick={()=>{
                            setCurrentUser(null);
                            navigate('/posts');
                        }}
                    >
                        Logout
                    </button>
                </>
            }

        </div>
        </StyledHeader>
     );
}
 
export default Header;