import React from 'react'
import './InformContent.css'
import {InformTable} from '../../index'

const InformContent = () =>{
    return(
        <div className="Inform__Content">
            <div className="Inform__wrap">
                <div className="Inform__nav-place">
                    <a href="/" className="Back__home">Home</a>
                    <span className="crumsep">{">"}</span>
                    <span class="Inform__current-place">Notification to Student</span>
                    <p className="Inform__Name">
                        Notification from lecturer
                    </p>
                </div>

                <InformTable/>
            </div>
        </div>
    )
}

export default InformContent