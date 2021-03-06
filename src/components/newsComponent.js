import React, { Component } from 'react'
import NewsItem from './newsitem'
 

export default class newsComponent extends Component {
     
     articles =   [
        { 
         "source": {
         "id": null,
         "name": "CNET"
         },
         "author": "Dan Avery",
         "title": "Verizon Wireless Customers Report Outages Across US - CNET",
         "description": "Restarting phones appears to restore the ability to make and receive calls.",
         "url": "https://www.cnet.com/tech/mobile/verizon-wireless-customers-report-outages-across-us/",
         "urlToImage": "https://www.cnet.com/a/img/resize/33b9b9bf5b46059575008f88e005a876b0c45267/2020/03/27/fe99c6e7-094f-417e-9910-e200c54b78f2/verizon-logo-american-flag-9763.jpg?auto=webp&fit=crop&height=630&width=1200",
         "publishedAt": "2022-04-20T22:39:00Z",
         "content": "Verizon wireless customers across the US reported they were unable to make or receive phone calls Wednesday afternoon.\r\nVerizon\r\nVerizon customers across the US are reporting their mobile service is … [+1131 chars]"
         },
        {
         "source": {
         "id": "reuters",
         "name": "Reuters"
         },
         "author": null,
         "title": "Nasdaq drops as Netflix subscriber numbers weigh on tech - Reuters",
         "description": "The tech-heavy Nasdaq dropped on Wednesday as Netflix's surprise decline in subscribers weighed on both the streaming giant and other high-growth companies, which investors feared may face similar post-pandemic performance issues.",
         "url": "https://www.reuters.com/business/nasdaq-futures-slip-netflix-earnings-shock-2022-04-20/",
         "urlToImage": "https://www.reuters.com/resizer/gWKxJwKHq9zSQyy-iIUn3BkIKzI=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/JD3GNWBLZRNOJKZFSK563IHUII.jpg",
         "publishedAt": "2022-04-20T22:26:00Z",
         "content": "April 20 (Reuters) - The tech-heavy Nasdaq dropped on Wednesday as Netflix's surprise decline in subscribers weighed on both the streaming giant and other high-growth companies, which investors feare… [+4372 chars]"
         },
        {
         "source": {
         "id": "google-news",
         "name": "Google News"
         },
         "author": null,
         "title": "Dow Jones Futures: Tesla Jumps On Accelerating Earnings Growth After Netflix, Facebook Slam Nasdaq - Investor's Business Daily",
         "description": null,
         "url": "https://news.google.com/__i/rss/rd/articles/CBMikwFodHRwczovL3d3dy5pbnZlc3RvcnMuY29tL21hcmtldC10cmVuZC9zdG9jay1tYXJrZXQtdG9kYXkvZG93LWpvbmVzLWZ1dHVyZXMtdGVzbGEtanVtcHMtb24tYWNjZWxlcmF0aW5nLWVhcm5pbmdzLWdyb3d0aC1hZnRlci1uZXRmbGl4LXNsYW1zLW5hc2RhcS_SAQA?oc=5",
         "urlToImage": null,
         "publishedAt": "2022-04-20T22:22:00Z",
         "content": null
         },
        {
         "source": {
         "id": null,
         "name": "Yahoo Entertainment"
         },
         "author": "David Hollerith",
         "title": "Why Bitcoin could be poised to fall further - Yahoo Finance",
         "description": "Under tightening monetary pressures from central banks, Bitcoin is trading like “an overpriced tech stock,” as one analyst noted. That could potentially mean...",
         "url": "https://finance.yahoo.com/news/why-bitcoin-could-be-poised-to-fall-further-204052656.html",
         "urlToImage": "https://s.yimg.com/ny/api/res/1.2/rko2mTOchifK0UOAJlapPg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2022-04/e9770ce0-bf13-11ec-bff0-2c7cf9aac9c9",
         "publishedAt": "2022-04-20T20:44:40Z",
         "content": "Under tightening monetary pressures from central banks, Bitcoin (BTC-USD) is trading like an overpriced tech stock, as one analyst noted. That could potentially mean poor performance for the next few… [+5301 chars]"
         } 
         ]
    constructor(){
        super();
        this.state = {
            articles :this.articles,
            isLoading:false
        }
    }

    async componentDidMount(){

         this.state.page = 1;
            console.log("cdm");
        let url = "https://newsapi.org/v2/top-headlines?country=in&apikey=9de23d6e10174145907326f1ffda723b";
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({ articles: parsedData.articles })
        

    }
     handleNext = async ()=>{
        console.log("Next");

        console.log("cdm");
        let url = `https://newsapi.org/v2/top-headlines?country=in&apikey=9de23d6e10174145907326f1ffda723b&page=${this.state.page +1}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        console.log(url);
        this.setState(
            {
                page: this.state.page +1,
                articles: parsedData.articles
            }
        )
    }
    handlePrevious = async ()=>{
        console.log("Prev",this.state.page);
        console.log(this.state.page)

        console.log("cdm");
        let url = `https://newsapi.org/v2/top-headlines?country=in&apikey=9de23d6e10174145907326f1ffda723b&page${this.state.page -1}`;
        console.log(url);
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
 
        this.setState(
            {   
                page: this.state.page -1,
                articles: parsedData.articles
            }
        )
        console.log(this.state.page)
    }
  render() {
    return (
      <div className='container my-3'>
          
        

            <h2></h2><br></br>
                <div className="row cards">
                    {this.state.articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}>
                        <NewsItem title={element.title?element.title.slice(0, 45):""}
                            description={element.description?element.description.slice(0, 100):""} url={element.urlToImage}
                            Newsurl={element.url} />
                            <br />
                    </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                <button disavled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevious}>
                Previous
                </button>
                <button className="btn btn-dark" onClick={this.handleNext}>
                Next
                </button>
            </div>
   

      </div>
      
    )
  }
}
