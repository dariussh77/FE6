import Straipsnis from "./Straipsnis";

const Main = ({straipsniuMasyvas, fPazymeti,setFormaUrl,formaUrl,formaAlt, setFormaAlt,setStraipsniuMasyvas}) => {
    
    
    const fSubmit=(el)=>{
        el.preventDefault();
        setStraipsniuMasyvas([...straipsniuMasyvas,
             {id:Date.now(), url:formaUrl,alt:formaAlt,pazymeta:false}]);
        setFormaUrl('');
        setFormaAlt('');
    }
    return ( 
        <>
            <main>
                <section id="forma">
                    <form onSubmit={fSubmit}>
                        <input 
                            value={formaUrl} 
                            type="text" 
                            placeholder="...url" 
                            onChange={e=>setFormaUrl(e.target.value)}
                        />
                        <input 
                            value={formaAlt} 
                            type="text" 
                            placeholder="...alt"
                            onChange={e=>setFormaAlt(e.target.value)}
                        />
                        <input type="submit" value="Įvesti" />                        
                    </form>
                </section>
                <section id="straipsniai">
                    {straipsniuMasyvas.map((e)=> {
                        return <Straipsnis
                            key={e.id}
                            id={e.id}
                            url={e.url}
                            alt={e.alt}
                            pazymeta={e.pazymeta}
                            fPazymeti={fPazymeti}
                        />    
                    })}
                </section>
            </main>
        </>
     );
}
 
export default Main;