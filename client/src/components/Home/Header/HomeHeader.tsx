import React from 'react'
import './HomeHeader.css'

const HomeHeader = () =>{
    return(
        <div className="Home__header">
            <div className="row">
                <h1 className="logo">VN-UK</h1>
                <div className="border"></div>
                <div className="col">
                    <p className="name-logo">Institute for Research</p>
                    <p className="name-logo"> & Executive Education</p>
                </div>
            </div>
        </div>
    )
}

export default HomeHeader