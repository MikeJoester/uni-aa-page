import React from 'react'
import './CurriDetailsContent.css'
import { Link } from 'react-router-dom'
import {images} from '../../../../constants'

const CurriDetailsContent = () =>{
    return(
        <div className="CurriDetails__Content">
            <div className="CurriDetails__wrap">
                <div className="Curridetails__col-content">
                    <div className="Curridetails__nav-place">
                            <a href="/" className="Back__home">Home</a>
                            <span className="crumsep">{">"}</span>
                            <span class="Curritails__text-place">Explore our Programs</span>
                            <span className="crumsep">{">"}</span>
                            <span class="Curritails__text-course">Accounting and Financial Management, Minor</span>
                        </div>
                        <p className="Curridetails__Course-Name">
                            Accounting and Financial Management, Minor
                        </p>

                        <div className="Course__content">
                            <p className="Course__content-title">overview</p>
                            <p className="Course__decs-text">
                                The Accounting & Financial Management program offers VNUK Arts & Sciences, 
                                Engineering, and Peabody students a focused, quantitative minor that will 
                                prepare them more effectively for careers in small companies, major corporations, 
                                and consultancies as well as acceptance into graduate programs in accountancy.<br/><br/>

                                The objective of the Minor in Accounting and Financial Management is to enable students 
                                in all disciplines to complement their major fields of study with academic training that 
                                will help them prepare for and compete within this expanding marketplace. The minor is 
                                not only relevant for students who plan to seek employment but critical for those who plan 
                                to attend graduate programs in accounting immediately after graduation. The Accounting and 
                                Financial Management Minor will help the CLE’s graduates prepare for career opportunities in 
                                several fields that have high salaries and are predicted to grow substantially.
                            </p>
                            <p className="Course__content-title">Requirements</p>
                            <p className="Course__decs-text text__gray-color">
                            Previous course: ( Object Oriented Programming - CSB25017 ) and ( Introduction to Computer Science and Programming - CSB13054 )
                            </p>
                        </div>
                    </div>
                    
                <div className="Curridetails__col-nav">
                    <div className="tag__catalogue">
                        CATALOGUE HOME
                    </div>

                </div>
                
            </div>
        </div>
    )
}

export default CurriDetailsContent
