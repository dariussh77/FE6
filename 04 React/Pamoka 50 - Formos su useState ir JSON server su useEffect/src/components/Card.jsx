import { useEffect } from "react";

const Card = ({article,changeArticleStatus,deleteArticle}) => {
    useEffect(()=>{
        console.log('article: ', article);
    },[])
    
    return ( 
        <>
            <div className={`card ${article.status==='lankyta'?'visited':'not-visited'}`}>
                <h1>{article.name}</h1>
                <img 
                    src={article.image} 
                    alt={article.name} 
                />
                <p>{article.description}</p>
                <span onClick={()=>changeArticleStatus(article.id)}>{article.status}</span>
                <button onClick={()=>deleteArticle(article.id)}>Trinti</button>
            </div>
        </>
     );
}
 
export default Card;