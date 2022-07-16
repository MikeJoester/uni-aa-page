import React from 'react'
import {HomeHeader,HomeContent,} from '../../components'
import './Home.css'

const Home = () =>{
    return(
        <div className="web__homepage">
            <HomeHeader />
            <HomeContent />
        </div>
    )
}

export default Home