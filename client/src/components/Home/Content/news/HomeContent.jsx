import React from 'react'
import news from '../../../../constants/news'
import NewsPost from './NewsPost/NewsPost'
import images from '../../../../constants/images'
import './HomeContent.css'

const HomeContent = () =>{
    return(
        <div className="Home__content">
            <div className="content__news layout__divided">
                <div className="bg__news center">
                    <div className="content__news-row">
                        {news.news.map((news) =>(
                            <NewsPost 
                            link={news.link}
                            image={news.image} 
                            title={news.title} 
                            />
                            ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeContent