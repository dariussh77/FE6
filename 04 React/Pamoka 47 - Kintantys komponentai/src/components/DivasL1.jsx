import CardsBlock from "./CardsBlock";

const DivasL1 = (props) => {

    console.log('props: ', props);
    return ( 
        <>
            <div className={props.klases.klDivL1}>
                <h1>{props.texts.porfolio.porfolioHeader}</h1>
                <p>{props.texts.porfolio.porfolioP}</p>
            </div>
            <div className={props.klases.klCards}>
                <CardsBlock
                    kort={props.kort}
                /> 
            </div>
        </>
        
     );
}
 
export default DivasL1;