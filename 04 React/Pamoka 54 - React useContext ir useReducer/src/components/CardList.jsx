import { useContext, useState } from "react";
import Card from "./Card";
import CardContext from "./contexts/CardContext";


const CardList = () => {
    const {cards}=useContext(CardContext);
    console.log('cards: ', cards);

    return ( 
        <>
            <div className="cardList">
                {
                    cards.map(card=>{ return  <Card
                            key={card.id}
                            card={card}
                        />
                    })
                }
            </div>
        </>
     );
}
 
export default CardList;