import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
const StyledHeader = styled.header`
  height: 100px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid black;

  > nav > ul{
    list-style-type: none;
    display: flex;
    gap: 10px;
    a{
      text-decoration: none;
      font-size: 1.3rem;
      font-weight: bold;
    }
    a.active{
      color: green;
    }
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
                    <li><NavLink to='/'>Homes</NavLink></li>
                    <li><NavLink to='/books'>Books</NavLink></li>
                </ul>
            </nav>
        </StyledHeader>
     );
}
 
export default Header;