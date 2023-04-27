import Ul from "./Ul";
import User from "./User";
import { v4 as uuidv4 } from 'uuid';

const Header = ({vartotojai, prisijungta, setPrisijungta,order,setOrder,prekes,setPrekes}) => {

    const changeUserStatus=(e)=>{
        if(prisijungta){
            setPrisijungta(!prisijungta);
        }else{
            e.preventDefault();
            let userFiltered=vartotojai.filter((userFilter)=>
                userFilter.vardas===e.target.elements.vartotojas.value
            );
            userFiltered[0].slaptazodis===e.target.elements.password.value&&setPrisijungta(!prisijungta);
        };       
    };
    const trintiUz=(id,pavadinimas,nkiekis)=>{
        setOrder(order.filter((e)=>e.id!==id));
    console.log(order);
        setPrekes(prekes.map(el=>{
           return el.pavadinimas===pavadinimas
            ?{...el, kiekis:el.kiekis+nkiekis}
            :el;
        }));

    };
    const atnaujintiSandeli=()=>{
        setOrder([{id: 0, pavadinimas: '', nkiekis: 0, suma: 0, likutis: 0}]);
        prekes.forEach(prekeP=>{
            fetch(`http://localhost:3000/prekes/${prekeP.id}`, {
                method: 'PATCH',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify({kiekis: prekeP.kiekis})
                })
                return {...prekeP,kiekis: prekeP.kiekis};
        })
//Su PUT - pakeiciamas visas elem
/*         prekes.forEach(prekeP=>{
            setOrder([{id: 0, pavadinimas: '', nkiekis: 0, suma: 0, likutis: 0}]);
            fetch(`http://localhost:3000/prekes/${prekeP.id}`, {
                method: 'PUT',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(prekeP)
                })
                return prekeP;
        }) */
    }
    return ( 
        <>
            <header>
                <img src="https://picsum.photos/id/555/100/100" alt="" />
                <div className="vartotojai">
                    <i className="bi bi-person-square"></i>
                    <form onSubmit={(e)=>changeUserStatus(e)}>
                        <select name="vartotojas" id="vartotojas">
                            {vartotojai.map(user=>{
                                return <User
                                        key={user.id}
                                        user={user}
                                        />
                        })}
                        </select>
                        <input type="text" name="password" id="password" placeholder="...įveskite slaptažodį" />
                        {prisijungta
                            ?<button onClick={(e)=>changeUserStatus(e)}>Atsijungti</button>
                            :<input type="submit" value='Prisijungti'/>
                        }
                    </form> 
                </div>
                <div className="uzsakymas">
                        <ul>
                            {
                                order.map(e=>{
                                    return <Ul
                                                key={e.id}
                                                e={e}
                                                trintiUz={trintiUz}
                                            />
                                })
                            }
                            <p>Viso: {order.reduce((a,b)=>a+b.suma,0)} &euro;</p>
                            <button onClick={()=>atnaujintiSandeli()}>Pirkti</button>
                        </ul>
                </div>
            </header>
        </>
     );
}
 
export default Header;