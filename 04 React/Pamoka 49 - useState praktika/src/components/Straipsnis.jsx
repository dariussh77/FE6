const Straipsnis = ({id,url,alt,pazymeta,fPazymeti}) => {

    return ( 
        <>
            <div className={pazymeta?'raudona':'zalia'}>
                <h3>{alt}</h3>
                <img src={url} alt={alt}/>
                {pazymeta
                    ?<input  onClick={()=>fPazymeti(id)} type="checkbox" defaultChecked/> 
                    :<input onClick={()=>fPazymeti(id)} type="checkbox"/>}
            </div>
        </>
     );
}
 
export default Straipsnis;