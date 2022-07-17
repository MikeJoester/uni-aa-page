import React from 'react'
import {HomeHeader,HomeContent,HomeBrand} from '../../components'
import './Home.css'

const Home = () =>{
    return(
        <div className="web__homepage">
            <HomeHeader />
            <HomeContent />
            <HomeBrand />
        </div>
    )
}

export default Home