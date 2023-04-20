import Card from "./Card";

const CardsBlock = (props) => {
    return ( 
        <>
                {props.kort.map((kortele,i)=>{
                        return <Card
                            key={i}
                            id={i}
                            image={{
                                source:kortele.imageData.source,
                                alternativeText:kortele.imageData.alternativeText,
                                CSS_class:kortele.imageData.CSS_class
                            }}
                            heading={kortele.heading}
                            paragraph={kortele.paragraph}
                        />
                })}
        </>
     )
}
 
export default CardsBlock;