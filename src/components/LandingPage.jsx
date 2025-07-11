import React, { useEffect, useState } from 'react'

function LandingPage() {


  const [articles, setArticles] = useState([]);

  useEffect(() => {
       const fetchNews = () => {
            fetch('https://newsdata.io/api/1/news?apikey=pub_9b1a8674c077487f8091a9c06148c4ed&q=India')
            .then(response => response.json())
            .then(data => {
              console.log(data)
              setArticles(data.results)
            })
            .catch(error => {
              console.log("Error in fetching news", error)
            })
       }
       fetchNews();
  }, [])
  return (
    <div style={{padding: '0 2%'}}>
         <div className='landing-header flex'>
               <div className='flex'>
                  <img width="48" height="48" src="https://img.icons8.com/color/48/news.png" alt="news"/>
                  <h3>NewsMate</h3>
               </div>

               <div className='landing-btns'>
                   <button>Home</button>
                   <button>Login</button>
                   <button>Register</button>
               </div>
         </div>

         <div>
            <h2>| TOP NEWS</h2>
         </div>

         <div className='article-container'>
               {articles && articles.map((article, id) => (
                   <div className='news-card'> 
                       <h4>{article.title}</h4>
                       <img src={article.source_url} alt='' width={300}/>
                       <p>{article.content}</p>
                    </div>
               ))}
         </div>
    </div>
  )
}

export default LandingPage
