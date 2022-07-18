import React from 'react'
import {
        HomeHeader,
        HomeContent,
        HomeBrand,
        HomeExplore,
        HomeEvents,
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
        </div>
    )
}

export default Home