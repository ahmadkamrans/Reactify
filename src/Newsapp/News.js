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
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=967ca64b6faf49759d7e929f7ccb81ec&page=${this.state.page}&pagesize=12`

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
                totalPages: Math.ceil(response.totalResults / 12)
            })

        })
    }

    handlePage = async (e, i) => {
        this.setState({
            page: i,
            loading : false
        })

        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=967ca64b6faf49759d7e929f7ccb81ec&page=${this.state.page}&pagesize=12`

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
            })

        })



    }

    handleNext = async (e) => {
        if (this.state.page < this.state.totalPages) {



            let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=967ca64b6faf49759d7e929f7ccb81ec&page=${this.state.page + 1}&pagesize=12`

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
                    
                })

            })

            this.setState({
                page: this.state.page + 1,
                loading: false
            })
        }
    }
    handlePrev = async (e) => {
        if (this.state.page >= 1) {



            let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=967ca64b6faf49759d7e929f7ccb81ec&page=${this.state.page - 1}&pagesize=12`

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
                })
    
            })

            this.setState({
                page: this.state.page - 1,
                loading: false
            })
        }
    }
    render() {
        let activeStyle = {
            fontWeight : 'bold'
        }
        return (
            <div className='container py-3'>
                <h2 className='py-3'>Top Headlines</h2>
                <div className="row h-120 ">

                    {
                        !this.state.loading &&
                        <div className="text-center">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>


                    }
                    {
                        // Loader before displaying news items
                        this.state.loading && this.state.articles.map((article) => {
                            return <NewsItem key={article.url} title={article.title} description={article.description} urlToImage={article.urlToImage} newsUrl={article.url} />
                        })
                    }
                </div>
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item"><button onClick={this.handlePrev} className="page-link">Previous</button></li>
                        {
                            [...Array(this.state.totalPages)].map((elementInArray, index) => (


                                <li key={index} className="page-item"><button onClick={(e) => this.handlePage(e, index + 1)} className="page-link" style={(this.state.page === index + 1)? activeStyle : {} }>{index + 1}</button></li>

                            )
                            )
                        }
                        <li className="page-item"><button onClick={this.handleNext} className="page-link">Next</button></li>
                    </ul>
                </nav>
            </div>
        )
    }
}
