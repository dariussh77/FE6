import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
const StyledHeader =styled.header`
    height: 100px;
    justify-content: space-between;
    align-items: center;
    >nav>ul{
        list-style-type:none;
        display: flex;
        gap:10px;
        
    }
`;
const Header = () => {
    return ( 
        <StyledHeader>
            <div>
                Logos
            </div>
            <nav>
                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                </ul>
            </nav>

        </StyledHeader>
     );
}
 
export default Header;