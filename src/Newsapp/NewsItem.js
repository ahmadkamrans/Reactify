import React, { Component } from 'react'

export default class NewsItem extends Component {

    render() {
        let { title, description, urlToImage, newsUrl, author, publishedAt } = this.props;
        return (
           urlToImage && <div className="col-md-4 my-2 align-items-stretch d-flex">
                <div className="card">
                    <div className="card-header">
                        <img src={urlToImage} alt="" className='w-100' srcSet="" style={{height: "250px"}} />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {author} on {new Date(publishedAt).toUTCString()}</small></p>
                    </div>
                    <div className="card-footer text-center bg-white">   
                    <a href={`${newsUrl}`} target="_blank" className="btn btn-primary" rel="noopener noreferrer" >Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
