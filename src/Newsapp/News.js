import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loader from '../components/helpers/Loader';
import { Link } from 'react-router-dom';

export default class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalPages: 1,
            pageSize : 12
        }

    }
    componentDidMount() {
        this.updateNews()
    }

    async updateNews()
    {
        this.setState({
            loading: false
        })
        const url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&apiKey=967ca64b6faf49759d7e929f7ccb81ec&page=${this.state.page}&pageSize=${this.state.pageSize}&country=us`

        async function fetchText() {
            let response = await fetch(url);
            let data = await response.json();
            return data

        }

        fetchText().then(response => {
            let pageSizen = response.totalResults > 500? 50 : 25;
            this.setState({
                articles: response.articles,
                loading: true,
                totalPages: Math.ceil(response.totalResults / pageSizen ),
                pageSize : pageSizen
            })

        })
    }

    handlePage = async (e, i) => {
        this.setState({
            page: i
        })
        this.updateNews()
    }

    handleNext = async (e) => {
        if (this.state.page < this.state.totalPages) {

            this.setState({
                page: this.state.page + 1
            })

            this.updateNews()
        }
    }
    handlePrev = async (e) => {
        if (this.state.page >= 1) {

            this.setState({
                page: this.state.page - 1
            })

            this.updateNews()
        }
    }
    render() {
        let activeStyle = {
            fontWeight : 'bold'
        }
        return (
            <div className='container py-3'>
                <h1 className='py-3 text-center'>Top Headlines</h1>
                <div className="d-flex justify-content-around py-5">
                    <Link className='text-dark text-decoration-none c-bold' style={this.props.category === 'business'? activeStyle : {}} to="/newsapp/business">Business</Link>
                    <Link className='text-dark text-decoration-none c-bold' style={this.props.category === 'entertainment'? activeStyle : {}} to="/newsapp/entertainment">Entertainment</Link>
                    <Link className='text-dark text-decoration-none c-bold' style={this.props.category === 'general'? activeStyle : {}} to="/newsapp">General</Link>
                    <Link className='text-dark text-decoration-none c-bold' style={this.props.category === 'health'? activeStyle : {}} to="/newsapp/health">Health</Link>
                    <Link className='text-dark text-decoration-none c-bold' style={this.props.category === 'science'? activeStyle : {}} to="/newsapp/science">Science</Link>
                    <Link className='text-dark text-decoration-none c-bold' style={this.props.category === 'sports'? activeStyle : {}} to="/newsapp/sports">Sports</Link>
                    <Link className='text-dark text-decoration-none c-bold' style={this.props.category === 'technology'? activeStyle : {}} to="/newsapp/technology">Technology</Link>
                </div>
                <div className="row h-120 ">

                    {
                        !this.state.loading &&
                        <Loader />


                    }
                    {
                        // Loader before displaying news items
                        this.state.loading && this.state.articles.map((article) => {
                            return <NewsItem key={article.url} title={article.title} description={article.description} urlToImage={article.urlToImage} newsUrl={article.url} author={article.author} publishedAt={article.publishedAt} />
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
