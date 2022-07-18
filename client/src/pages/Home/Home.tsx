import React from 'react'
import {
        HomeHeader,
        HomeContent,
        HomeBrand,
        HomeEvents
        } from '../../components'
import './Home.css'

const Home = () =>{
    return(
        <div className="web__homepage">
            <HomeHeader />
            <HomeContent />
            <HomeBrand />
            <HomeEvents/>
        </div>
    )
}

export default Home