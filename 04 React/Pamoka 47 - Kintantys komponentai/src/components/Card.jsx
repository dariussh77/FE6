import Image from "./Image";

const Card = (props) => {
    return ( 
        <div className='kortele'>
            <Image
                source={props.image.source}
                alternativeText={props.image.alternativeText}
                CSS_class={props.image.CSS_class}
            />
            <h2>{props.heading}</h2>
            <p>{props.paragraph}</p>
            <h3>{props.id}</h3>
        </div>
     )
}
 
export default Card;