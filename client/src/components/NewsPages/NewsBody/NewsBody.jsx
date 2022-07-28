import React from 'react'
import './NewsBody.css'

const NewsBody = () =>{
    return(
        <div className="NewsBody">
            <div class="row">
                <div class="column">
                    <div className='searchBox'>
                        <h4>Narrow Your Results</h4>
                        <input type="text" id="fname" name="fname" placeholder='Enter term...'></input>
                    </div>
                    <br/>
                    <div className="list">

                        <ul className='mainList'>
                            <li><a href='#'>About Us</a></li>
                            <li><a href="">Academic</a></li>
                            <li><a href="">Schools & Divisions</a></li>
                            <li className='testList'><a href="">Admissions & Aid</a> 
                                <ul className='subList'>
                                    <li><a href="">Undergraduate</a></li>
                                    <li><a href="">Graduate Admissions</a> </li>
                                    <li><a href="">Plan a Visit</a></li>
                                </ul>
                            </li>
                            <li><a href=""> Research & Faculty</a></li>
                            <li><a href=""> Campus Life</a></li>

                        </ul>


                    </div>
                </div>
                <div class="column">
                    <h1>News & Events</h1>
                    <p>The VNUK Institute faculty and students study, teach, and learn across more than 400 programs in the computer and biology, the social and natural sciences, engineering, international studies, education, business, and the health professions.
                        Use the interactive program explorer to browse the programs that JHU offers. Sort by division and/or degree type, or use the keyword search to get started.</p>
                    <div className='post'>
                        <h1>Announcement About Online Teaching From Tuesday, 04/05/2021</h1>
                        <p>VNUK Academic Affairs Office has sent an email notification of the tuition fee in Semester 2 to your email. 
                            Students please check your email to read the tuition information. In case you cannot find the email in your Inbox, please check in Spam or Junk mail and select "Report not spam" to move to Inbox. </p>
                        <button type="button" className='more'><h3>MORE ABOUT ANNOUNCEMENT</h3></button>
                    </div>
                    <div className='post'>
                        <h1>Announcement About Online Teaching From Tuesday, 04/05/2021</h1>
                        <p>VNUK Academic Affairs Office has sent an email notification of the tuition fee in Semester 2 to your email. 
                            Students please check your email to read the tuition information. In case you cannot find the email in your Inbox, please check in Spam or Junk mail and select "Report not spam" to move to Inbox. </p>
                        <button type="button" className='more'><h3>MORE ABOUT ANNOUNCEMENT</h3></button>
                    </div>
                    <div className='post'> 
                        <h1>Announcement About Online Teaching From Tuesday, 04/05/2021</h1>
                        <p>VNUK Academic Affairs Office has sent an email notification of the tuition fee in Semester 2 to your email. 
                            Students please check your email to read the tuition information. In case you cannot find the email in your Inbox, please check in Spam or Junk mail and select "Report not spam" to move to Inbox. </p>
                        <button type="button" className='more'><h3>MORE ABOUT ANNOUNCEMENT</h3></button>
                    </div>
                    <a type="button" className='full' href='#'><h3>SEE MORE</h3></a>            
                </div>
            </div>
        </div>
    )
}

export default NewsBody
