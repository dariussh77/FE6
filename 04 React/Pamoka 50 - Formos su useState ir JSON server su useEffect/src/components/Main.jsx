import AllCards from "./AllCards";

const Main = ({articles,changeArticleStatus,deleteArticle}) => {
    return ( 
        <main>
            <section id='form'>

            </section>
            <section id='allCards'>
                <AllCards
                    articles={articles}
                    changeArticleStatus={changeArticleStatus}
                    deleteArticle={deleteArticle}
                />
            </section>
        </main>
     );
}
 
export default Main;