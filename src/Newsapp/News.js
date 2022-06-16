import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalPages: 1
        }

    }
    componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=967ca64b6faf49759d7e929f7ccb81ec&page=${this.state.page}`

        async function fetchText() {
            let response = await fetch(url);
            let data = await response.json();
            return data

        }

        fetchText().then(response => {
            console.log(response)
            this.setState({
                articles: response.articles,
                loading: true,
                totalPages: Math.floor(response.totalResults.length / 10)
            })

        })


    }
    render() {
        return (
            <div className='container py-3'>
                <h2 className='py-3'>Top Headlines</h2>
                <div className="row h-100 ">
                    {
                        !this.state.loading &&
                        <div className="text-center">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    }
                    {this.state.loading && this.state.articles.map((article) => {
                        return <NewsItem key={article.url} title={article.title} description={article.description} urlToImage={article.urlToImage} newsUrl={article.url} />
                    })}
                </div>

                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item"><a className="page-link" href="/">Previous</a></li>
                        <li className="page-item"><a className="page-link" href="/">1</a></li>
                        <li className="page-item"><a className="page-link" href="/">2</a></li>
                        <li className="page-item"><a className="page-link" href="/">3</a></li>
                        <li className="page-item"><a className="page-link" href="/">Next</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}
