import React from 'react'
import {
        HomeHeader,
        HomeContent,
        HomeBrand,
        HomeExplore,
        HomeEvents,
        HomeMemory,
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
            <HomeMemory/>
        </div>
    )
}

export default Home