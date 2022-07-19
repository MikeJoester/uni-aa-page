import React from 'react'
import {
        HomeHeader,
        HomeContent,
        HomeBrand,
        HomeExplore,
        HomeEvents,
        HomeSearch,
        } from '../../components'
import './Home.css'

const Home = () =>{
    return(
        <div className="web__homepage">
            <HomeHeader />
            <HomeContent />
            <HomeBrand />
            <HomeExplore />
            <HomeEvents/>
            <HomeSearch/>
        </div>
    )
}

export default Home