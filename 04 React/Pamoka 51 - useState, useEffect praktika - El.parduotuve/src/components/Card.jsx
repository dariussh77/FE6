import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const Card = ({preke,setOrder,setPrekes,prekes}) => {
    const [nkiekis, setnKiekis]=useState(0);
    const mazinti=()=>{
        nkiekis>0&&setnKiekis(nkiekis-1);
    };
    const didinti=()=>{
        setnKiekis(nkiekis+1);
    };
    const forder=(id)=>{
            setOrder(prevOrder=>[...prevOrder,{id:uuidv4(),pavadinimas:preke.pavadinimas,nkiekis:nkiekis, suma:(nkiekis*preke.kaina),likutis:(preke.kiekis-nkiekis)}]);
            setPrekes(prekes.map(e=>{
                return e.id===id
                    ?{...e,kiekis:e.kiekis-nkiekis}
                    :e;
            }));
            setnKiekis(0);
    }
    return ( 
        <>
            <div className="preke">
                <img src={preke.nuotrauka} alt={preke.pavadinimas} />
                <h3>{preke.pavadinimas}</h3>
                <p>
                    <b>Specificacija:</b> <br />
                    <i>{preke.specifikacija}</i>
                </p>
                <span>Kiekis sandėlyje: {preke.kiekis}</span>
                <h4>{preke.kaina} &euro;</h4>
                <h5>
                    <button onClick={()=>mazinti()}>-</button>
                    <i onClick={()=>forder(preke.id)} className="bi bi-cart4"></i> {nkiekis}
                    <button onClick={()=>didinti()}>+</button>
                </h5>
            </div>
        </>
     );
}
export default Card;