import { useContext } from "react";
import CardContext from "./contexts/CardContext";
const Card = ({card}) => {
    const { statusChanger } = useContext(CardContext);
    return ( 
        <div className="card">
            <h1>{card.title}</h1>
            <p onClick={()=>statusChanger(card.id)}>Gauname:{card.status.toString()}</p>
        </div>
     );
}
 
export default Card;