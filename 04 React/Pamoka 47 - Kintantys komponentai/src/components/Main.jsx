import Section from "./Section";

const Main = (props) => {
    return ( 
            <main>
                <Section
                    kort={props.kort}
                    texts={props.texts}
                    klases={props.klases}
                />
            </main>
     )
}
 
export default Main;