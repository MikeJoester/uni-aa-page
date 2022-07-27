import React from 'react'
import {images} from '../../constants'
import './Footer.css'

const Footer = () =>{
    return(
        <div className="Footer">
            <div className="center">
                <div className="footer__content footer__col">
                    <div className="footer__intro">
                        <div className="footer__logo">
                            <img className="footer__logo-large" src={images.logoLage} alt="logo" />
                            <img className="footer__logo-md" src={images.logoMed} alt="logo" />
                            <img className="footer__logo-verti" src={images.verlogo1} alt="logo" />
                            <img className="footer__logo-verti2" src={images.verlogo2} alt="logo" />
                        </div>
                        <div className="footer__details">
                            <ul>
                                <li className="footer__name-uni">Institute for Research & Executive Education, Da Nang University</li>
                                <li>158A Le Loi, Hai Chau Dist, Danang city</li>
                                <li>(0236)3.738.399</li>
                                <li>contact@vnuk.edu.vn</li>
                                <li className="footer__copyright">©2022 Copyright: K20 CSE</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__search">
                        <ul>
                            <li className="footer__name-uni">VNUK - Credit registration page</li>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">Announcement</a></li>
                            <li><a href="/SchoolCurriculum">School Curriculum</a></li>
                            <li><a href="/">Rules & Regulations</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Footer