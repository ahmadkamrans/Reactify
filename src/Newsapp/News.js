import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loader from '../components/helpers/Loader';
import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
export default class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            pageSize: 9,
            totalResults: 0,
        }

    }
    componentDidMount() {
        console.log('Component did mount')
        this.updateNews()
    }

    async updateNews() {
        this.setState({
            loading: false
        })
        console.log('Page In Update:', this.state.page)
        const url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&apiKey=967ca64b6faf49759d7e929f7ccb81ec&page=${this.state.page}&pageSize=${this.state.pageSize}&country=us`

        async function fetchText() {
            let response = await fetch(url);
            let data = await response.json();
            return data

        }
        fetchText().then(response => {
            this.setState({
                articles: response.articles,
                loading: true,
                totalResults: response.totalResults,
                page: this.state.page + 1
            })

        })
    }

    fetchData = async () => {
        console.log('Now Page:', this.state.page)

        const url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&apiKey=967ca64b6faf49759d7e929f7ccb81ec&page=${this.state.page}&pageSize=${this.state.pageSize}&country=us`

        async function fetchText() {
            let response = await fetch(url);
            let data = await response.json();
            return data

        }

        fetchText().then(response => {
            this.setState({
                articles: this.state.articles.concat(response.articles),
                loading: true,
                page: this.state.page + 1
            })

        })
    }


    handleHasMore = () => {
        if (this.state.articles.length !== this.state.totalResults) {
            console.log('Articles', this.state.articles.length, 'Total', this.state.totalResults)
            return true;
        }
        else {
            console.log('Articles', this.state.articles.length, 'Total', this.state.totalResults)
            return false
        }
    }

    render() {
        let activeStyle = {
            fontWeight: 'bold'
        }


        return (
            <div className='container py-3'>
                <h1 className='py-3 text-center'>Top Headlines</h1>
                <div className="d-flex justify-content-around py-5">
                    <Link className='text-dark text-decoration-none c-bold' style={this.props.category === 'business' ? activeStyle : {}} to="/newsapp/business">Business</Link>
                    <Link className='text-dark text-decoration-none c-bold' style={this.props.category === 'entertainment' ? activeStyle : {}} to="/newsapp/entertainment">Entertainment</Link>
                    <Link className='text-dark text-decoration-none c-bold' style={this.props.category === 'general' ? activeStyle : {}} to="/newsapp">General</Link>
                    <Link className='text-dark text-decoration-none c-bold' style={this.props.category === 'health' ? activeStyle : {}} to="/newsapp/health">Health</Link>
                    <Link className='text-dark text-decoration-none c-bold' style={this.props.category === 'science' ? activeStyle : {}} to="/newsapp/science">Science</Link>
                    <Link className='text-dark text-decoration-none c-bold' style={this.props.category === 'sports' ? activeStyle : {}} to="/newsapp/sports">Sports</Link>
                    <Link className='text-dark text-decoration-none c-bold' style={this.props.category === 'technology' ? activeStyle : {}} to="/newsapp/technology">Technology</Link>
                </div>
                <InfiniteScroll
                    style={{ overflow: 'hidden' }}
                    dataLength={this.state.articles.length} //This is important field to render the next data
                    next={this.fetchData}
                    hasMore={this.handleHasMore()}
                    loader={<Loader />}
                    endMessage={
                        <h3 className='text-muted p-2'>&#8593; You have seen all the news for today :-) </h3>
                    }
                >
                    {
                        !this.state.loading && <Loader />
                    }
                    <div className="row ">
                        {
                            // Loader before displaying news items
                            this.state.articles.map((article) => {
                                return <NewsItem key={article.url} title={article.title} description={article.description} urlToImage={article.urlToImage} newsUrl={article.url} author={article.author} publishedAt={article.publishedAt} />
                            })
                        }
                    </div>
                </InfiniteScroll>
            </div>
        )
    }
}
