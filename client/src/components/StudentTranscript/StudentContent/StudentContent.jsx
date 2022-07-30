import React from 'react'
import './StudentContent.css'
import {StudentResult} from '../../index'

const StudentContent = () =>{
    return(
        <div className="Student__Content">
            <div className="Student__wrap">
                <div className="Student__nav-place">
                    <a href="/" className="Back__home">Home</a>
                    <span className="crumsep">{">"}</span>
                    <span class="Student__current-place">Student's Grade</span>
                    <p className="Student__Name">
                        Student's Grade
                    </p>
                </div>

                <StudentResult/>
            </div>
        </div>
    )
}

export default StudentContent