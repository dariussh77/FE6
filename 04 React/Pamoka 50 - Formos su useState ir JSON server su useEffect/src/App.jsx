import { useState,useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

const App=()=>{
  const [articles,setArticles]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:3000/countries')
      .then(res=>res.json())
      .then(data=>setArticles(data))
  },[]);
  const changeArticleStatus= (id)=>{
    setArticles(articles.map(article=>{
      
      if (article.id===id){
        fetch(`http://localhost:3000/countries/${id}`, {
          method:'PATCH',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify({status:article.status==='lankyta'?'nelankyta':'lankyta'})
        });
        return {
          ...article,
          status:article.status==='lankyta'?'nelankyta':'lankyta'
        }
      }else{return article}
    }));
    
  };
  const deleteArticle=(id)=>{
    setArticles(articles.filter(article=>article.id!==id));
    fetch(`http://localhost:3000/countries/${id}`, {
          method:'DELETE'
        });
  };
  const [loggedIn, setLoggedIn]= useState(true)

  return (
    <>
      <Header
        visitedCountries={(articles.filter((article)=> article.status==='lankyta').length)}
        loggedIn={loggedIn}
      />
      <Main
        articles={articles}
        changeArticleStatus={changeArticleStatus}
        deleteArticle={deleteArticle}
      />
    </>
  );
}

export default App;
