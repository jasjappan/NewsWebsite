 import React,{useState,useEffect,setState} from 'react';
 

import NewsItem from './newsitem'

const News = () => {
    const [articles, setArticles] = useState([""]);
    const url = "https://https://newsapi.org/v2/top-headlines?country=in&apikey=dbe57b028aeb41e285a226a94865f7a7.adviceslip.com/advice";

    useEffect(() => {
        const fetchData = async () => {

            try{
                console.log("cdm");
            let url = "https://newsapi.org/v2/top-headlines?country=in&apikey=dbe57b028aeb41e285a226a94865f7a7";
            let data = await fetch(url);
            let parsedData = await data.json()
            console.log(parsedData);
            this.setState({ articles: parsedData.articles })
            }
            catch(err){
        console.log(err);
    }
            

        }
        
    }, []);


    return (
        <div className='container my-3'> 
               <h2>News Latest</h2>
            {/* <div className="row">
                {this.state.articles.map((e)=>{
                return <div className="col-md-4" key={e.url}>
                    <NewsItem title={e.title}
                        description={e.description } url={e.urlToImage}
                        Newsurl={e.url} />
                </div>
                })}
            </div> */}
        </div>
            
     
    );
};

export default News;
