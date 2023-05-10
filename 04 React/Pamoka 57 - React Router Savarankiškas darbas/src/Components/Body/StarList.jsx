import { useContext } from "react";
import StartListContext from "../Contexts/StarListContext";
import StarCard from "../Atom/StarCard";
import styled from "styled-components";

const StarListCSS=styled.main`
    padding: 10px;
    >div{
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
    }
    
 `;

const StarList = () => {
    const {starsM}=useContext(StartListContext);
    console.log('starsM: ', starsM);
    return ( 
        <StarListCSS>
            <h1>Žvaidždžių sąrašas</h1>
            <div>
                {
                    starsM.map(starCard=>
                        <StarCard
                            key={starCard.id}
                            starData={starCard}
                        />)
                }
            </div>
        </StarListCSS>
     );
}
 
export default StarList;