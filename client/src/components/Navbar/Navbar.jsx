import React from 'react'
import './Navbar.css'


const Navbar = ({ toggleMenu, setToggleMenu }) =>{
    return(
        // <div className="nav">
        //     <ul className="tablist">
        //         <li className="tab">
        //             <p>Menu</p>
        //             <ul class="hidden">
        //                 <li>TK-421</li>
        //                 <li>why aren't </li>
        //                 <li>you at </li>
        //                 <li>your post?</li>
        //             </ul>
        //         </li>
        //         <li className="tab">
        //             <p>News & Events</p>
        //             <ul class="hidden">
        //                 <li>TK-421</li>
        //                 <li>why aren't </li>
        //                 <li>you at </li>
        //                 <li>your post?</li>
        //             </ul>
        //         </li>
        //         <li className="tab">
        //             <p>Login</p>
        //             <ul class="hidden">
        //                 <li>TK-421</li>
        //                 <li>why aren't </li>
        //                 <li>you at </li>
        //                 <li>your post?</li>
        //             </ul>
        //         </li>
        //     </ul>
            
        // </div>
        <nav class="sidenav">
            <ul class="main-buttons">
                <li>
                    {/* <i class="fa fa-circle fa-2x"></i> */}
                    <p>Menu</p> 
                    <ul class="hidden">
                        <li>Announcement</li>
                        <li className="curriculum">
                            <p>School Curriculum</p> 
                            <ul class="sub__hidden">
                                <li>Computer Science & Engineering</li>
                                <li>Data Science</li>
                                <li>Biomedical Science</li>
                                <li>International Business & Management</li>
                                <li>Tourism & Hospitality Management</li>
                            </ul>    
                        </li>
                        <li>Rules & Regulations</li>
                        <li>
                            <p className="btn__close">Close Menu</p>
                        </li>
                    </ul>
                </li>
                <li>
                    {/* <i class="fa fa-circle fa-2x"></i> */}
                    <p>News & events</p> 
                    <ul class="hidden ">
                        <ul className="ul__center">
                            <li>
                                <p className="heading_type">Recent News</p>
                            </li>
                            <li className="box__events">
                                <p>VNUK announces to receive early admission applications</p>
                                <p className="box__events-date">6 days</p>
                            </li>
                            <li className="box__events">
                                <p>The solemn and cozy graduation ceremony of VNUK new graduates in 2022</p>
                                <p className="box__events-date">03/07/2022</p>
                            </li>
                            <li className="box__events">
                                <p>Following in the footsteps of the lecturers of the Vietnam - UK Institute of Research and Training on a business trip to the UK</p>
                                <p className="box__events-date">26/6/20222</p>
                            </li>
                            <li>
                                <p className="btn__view-more">More news</p>
                            </li>
                        </ul>
                        <ul className="ul__center">
                            <li>
                                <p className="heading_type">Upcoming Events</p>
                            </li>
                            <li className="box__events">
                                <p>STEM SUMMER CAMP 2022 – INTERNATIONAL SCIENCE CAMP</p>
                                <p className="box__events-date">July 14, 7:30 am - 11:00 am</p>
                            </li>
                            <li className="box__events">
                                <p>Graduation ceremony for VNUK students in 2022</p>
                                <p className="box__events-date">July 14, 7:30 am - 11:00 am</p>
                            </li>
                            <li>
                                <p className="btn__view-more">More events</p>
                            </li>
                        </ul>
                        <li>
                            <p className="btn__close">Close News & Events</p>
                        </li>
                    </ul>
                </li>
                <li>
                    {/* <i class="fa fa-circle fa-2x"></i> */}
                    <p>login</p>
                    <ul class="hidden">
                        <li class="login__heading">Sign In</li>
                        <li>
                            <button type="submit" class="btn__login login">Sign In With Google</button>
                        </li>
                        <li>
                            <button type="submit" class="btn__login admin">Sign In With admin</button>
                        </li>
                        <li >
                            <p className="btn__close">Close Login</p>
                        </li>
                    </ul>
                </li>
            </ul>
            
        </nav>
    )
}

export default Navbar 