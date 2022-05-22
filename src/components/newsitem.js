import React, { Component } from 'react';

export class newsitem extends Component {

    
    
  render() {
        let {title, description,url, Newsurl} = this.props;
    return (
         <div>
            <div className="card" style={{width: "18rem"}}>
            <img src={url} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                                 <p className="text-left">{description}...</p>
                 <div className="d-flex  flex-row">
                <a href={Newsurl} className="btn btn-dark">Read News</a>
                </div>
            </div>
            </div>
           
          </div>
         
    )
  }
}

export default newsitem