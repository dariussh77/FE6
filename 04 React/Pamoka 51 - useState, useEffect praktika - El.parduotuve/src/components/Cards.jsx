import Card from "./Card";

const Cards = ({prekes,setOrder,setPrekes}) => {
    return ( 
        <>
            <div className="korteles">
                {prekes.map(preke=>{
                    return <Card
                                key={preke.id}
                                preke={preke}
                                setOrder={setOrder}
                                setPrekes={setPrekes}
                                prekes={prekes}
                            />
                })}
            </div>
        </>
     );
}
 
export default Cards;