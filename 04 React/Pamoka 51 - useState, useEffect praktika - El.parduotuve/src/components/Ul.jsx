const Ul = ({e, trintiUz}) => {
    console.log(',eeeeeeeeeeeee',e);
    return ( 

        <li>
            <button onClick={()=>trintiUz(e.id,e.pavadinimas,e.nkiekis)}>x</button> {e.pavadinimas} - {e.nkiekis} vnt. = {e.suma} &euro;
        </li>

     );
}
 
export default Ul;