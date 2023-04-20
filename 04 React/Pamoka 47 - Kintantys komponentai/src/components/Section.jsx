import DivasL1 from "./DivasL1";
import Hero from "./Hero";

const Section = (props) => {
    
    return ( 
        <>
            <section id='hero'>
                <Hero
                    texts={props.texts}
                    klases={props.klases}
                />
            </section>
            <section id='content'>
                <DivasL1
                    kort={props.kort}
                    texts={props.texts}
                    klases={props.klases}
                />
            </section>
        </>
     )
}
 
export default Section;