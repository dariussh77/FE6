import Card from "./Card";

const AllCards = ({articles,changeArticleStatus,deleteArticle}) => {
    return ( 
        <>
            <div >
                <h1>Šalys</h1>
                <div className="cardsWrapper">
                   {articles.map(article=>{
                        return <Card
                                key={article.id}
                                article={article}
                                changeArticleStatus={changeArticleStatus}
                                deleteArticle={deleteArticle}
                            />
                    })} 
                </div>
            </div>
            
        </>
     );
}
 
export default AllCards;