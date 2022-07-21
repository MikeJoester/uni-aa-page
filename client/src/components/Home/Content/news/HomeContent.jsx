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
                        <div className="new__block">
                            <img className="new__img" src={images.Nig} alt="" />
                            <p className="new__title">
                                ANTI-BACKPACK DAY FINALLY COMES TO VN-UK!!!!!
                            </p>
                        </div>
                        <div className="new__block">
                            <img className="new__img" src={images.Nig} alt="" />
                            <p className="new__title">
                                ANTI-BACKPACK DAY FINALLY COMES TO VN-UK!!!!!
                            </p>
                        </div>
                        <div className="new__block">
                            <img className="new__img" src={images.Nig} alt="" />
                            <p className="new__title">
                                ANTI-BACKPACK DAY FINALLY COMES TO VN-UK!!!!!
                            </p>
                        </div>
                        {/* {news.newspost.map((newspost) =>(
                            <NewsPost 
                            link={newspost.link}
                            image={newspost.image} 
                            tittle={newspost.tittle} 
                            />
                            ))} */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeContent