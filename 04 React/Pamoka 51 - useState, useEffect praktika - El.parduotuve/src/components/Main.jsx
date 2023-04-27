import Cards from "./Cards";

const Main = ({prekes,prisijungta, setOrder,setPrekes}) => {
    return ( 
        <>
            <main>
                <section id='cards'>
                    {
                      prisijungta
                            ?<Cards
                                prekes={prekes}
                                setOrder={setOrder}
                                setPrekes={setPrekes}
                            />
                            :<img src="https://www.mahamconsultants.com/wp-content/uploads/2014/05/login1.jpg" alt='Prisijungimas'></img>
                    }
                        
                    
                </section>
            </main>
        </>
     );
}
 
export default Main;