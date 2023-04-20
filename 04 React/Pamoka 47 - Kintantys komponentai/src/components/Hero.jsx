const Hero = (props) => {

    return ( 
        <>
        <h2>{props.texts.hero.heroHeader}</h2>
        <p>{props.texts.hero.heroP}</p>
        <a href={props.texts.hero.href} target='_blank'>
            <button>{props.texts.hero.heroButton}</button>
        </a>
        </>
     );
}
 
export default Hero;