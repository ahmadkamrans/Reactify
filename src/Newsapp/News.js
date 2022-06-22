import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Loader from '../components/helpers/Loader';
import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';


export default function News(props) {
    const { category, apiKey } = props

    const [articles, setArticles] = useState([])
    const [loading, setloading] = useState(false)
    const [page, setpage] = useState(1)
    const pageSize  = 9
    const [totalResults, settotalResults] = useState(0)
    useEffect(() => {
        console.log('Component did mount');
        updateNews();
    });


   const updateNews = async () => {
        setloading(false)
        console.log('Page In Update:', page)
        const url = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}&country=us`

        async function fetchText() {
            let response = await fetch(url);
            let data = await response.json();
            return data

        }
        fetchText().then(response => {
            setArticles(response.articles)
            setloading(true)
            settotalResults(response.totalResults)
            setpage(page + 1)

        })
    }

   const fetchData = async () => {
        console.log('Now Page:', this.state.page)

        const url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.state.pageSize}&country=us`

        async function fetchText() {
            let response = await fetch(url);
            let data = await response.json();
            return data

        }

        fetchText().then(response => {
            setArticles(articles.concat(response.articles))
            setloading(true)
            setpage(page + 1)
        })
    }


 const handleHasMore = () => {
        if (articles.length !== totalResults) {
            console.log('Articles', articles.length, 'Total', totalResults)
            return true;
        }
        else {
            console.log('Articles', articles.length, 'Total', totalResults)
            return false
        }
    }


    let activeStyle = {
        fontWeight: 'bold'
    }


    return (
        <div className='container py-3'>
            <h1 className='py-3 text-center'>Top Headlines</h1>
            <div className="d-flex justify-content-around py-5">
                <Link className='text-dark text-decoration-none c-bold' style={category === 'business' ? activeStyle : {}} to="/newsapp/business">Business</Link>
                <Link className='text-dark text-decoration-none c-bold' style={category === 'entertainment' ? activeStyle : {}} to="/newsapp/entertainment">Entertainment</Link>
                <Link className='text-dark text-decoration-none c-bold' style={category === 'general' ? activeStyle : {}} to="/newsapp">General</Link>
                <Link className='text-dark text-decoration-none c-bold' style={category === 'health' ? activeStyle : {}} to="/newsapp/health">Health</Link>
                <Link className='text-dark text-decoration-none c-bold' style={category === 'science' ? activeStyle : {}} to="/newsapp/science">Science</Link>
                <Link className='text-dark text-decoration-none c-bold' style={category === 'sports' ? activeStyle : {}} to="/newsapp/sports">Sports</Link>
                <Link className='text-dark text-decoration-none c-bold' style={category === 'technology' ? activeStyle : {}} to="/newsapp/technology">Technology</Link>
            </div>
            <InfiniteScroll
                style={{ overflow: 'hidden' }}
                dataLength={articles.length} //This is important field to render the next data
                next={fetchData}
                hasMore={handleHasMore()}
                loader={<Loader />}
                endMessage={
                    <h3 className='text-muted p-2'>&#8593; You have seen all the news for today :-) </h3>
                }
            >
                {
                    !loading && <Loader />
                }
                <div className="row ">
                    {
                        // Loader before displaying news items
                        articles.map((article) => {
                            return <NewsItem key={article.url} title={article.title} description={article.description} urlToImage={article.urlToImage} newsUrl={article.url} author={article.author} publishedAt={article.publishedAt} />
                        })
                    }
                </div>
            </InfiniteScroll>
        </div>
    )
}
