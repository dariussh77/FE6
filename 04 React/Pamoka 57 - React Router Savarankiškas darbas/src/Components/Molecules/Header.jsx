import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
const HeaderCSS=styled.header`
    display: flex;
    justify-content: space-around;
    background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdnT9VvLTxghPztWTeIU-SaGM8yaU8W1KQBA&usqp=CAU');
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 30%;
    >img{
        height: 100px;
        width: 100px;
        border-radius: 50px;
    };
    >nav{
        >ul{
            >li>a{
                color: white;
            }
            list-style-type: none;
            display: flex;
            gap:20px;
        }
    }
`;
const Header = () => {
    return ( 
        <HeaderCSS>
            <img src="https://forkast.news/wp-content/uploads/2021/11/Cosmos-1260x709.jpg" alt="Cosmos" />
            <nav>
                <ul>
                    <li><NavLink to='/'>Pagrindinis</NavLink></li>
                    <li><NavLink to='/starList'>Žvaigždžių sąrašas</NavLink></li>
                </ul>
            </nav>
        </HeaderCSS>
     );
}
 
export default Header;