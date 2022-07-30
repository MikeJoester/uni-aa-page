import React from 'react'
import './NewsBody.css'

const NewsBody = () =>{
    return(
        <div className="NewsBody">
            <div className="Announcements__wrap">
                <div className="Announcements__nav-place">
                    <a href="/" className="Back__home">Home</a>
                    <span className="crumsep">{">"}</span>
                    <span class="AnnouncementsContent__current-place">Announcements</span>
                    <div className="Announcements__row">
                        <p className="Announcements__Name">
                            Announcements
                            <span><p>All information is constantly updated for students</p></span>
                        </p>
                    </div>
                </div>
                <div className="Announcements__contents">
                    <div className="Announcements__box">
                        <p className="Announ__name">Announcement About Online Teaching From Tuesday, 04/05/2021</p>
                        <p className="Announ__substance">
                            Dear VNUK students,<br/>
                            VNUK Academic Affairs Office would like to inform you that ALL module classes will continue to study online from Tuesday 04/05/2021 until further notice.<br/>
                            To limit the spread of the epidemic and ensure the safety of general health, students note the following issues:<br/>
                            - Strictly complying with the "5K" principle, in which it is mandatory to wear masks in public places ...<br/>
                            - Make online medical declarations as prescribed.<br/>
                            - Students do not come to school while in isolation to prevent and fight against Covid-19 epidemics at the request of the authorities.<br/>
                            - If contact with an infected / suspected Covid-19 infection or if there are signs of suspicion of Covid-19 infection themselves, to immediately notify the medical authority for prompt advice and guidance.<br/><br/>
                            Thanks,<br/>
                            Best regards.<br/>
                        </p>
                    </div>
                    <div className="Announcements__box">
                        <p className="Announ__name">Announcement about tuition fee of Semester II, 2020 - 2021</p>
                        <p className="Announ__substance">
                            Dear VNUK students,<br/>
                            VNUK Academic Affairs Office has sent an email notification of the tuition fee in Semester 2 to your email. Students please check your email to read the tuition information. In case you cannot find the email in your Inbox, please check in Spam or Junk mail and select "Report not spam" to move to Inbox. <br/>
                            Duration: From Wednesday, 04/05/2021 to Wednesday, 11/05/2021<br/><br/>
                            Thanks,<br/>
                            Best regards.<br/>
                        </p>
                    </div>
                    <div className="Announcements__box">
                        <p className="Announ__name">Announcement of annual holiday</p>
                        <p className="Announ__substance">
                            Dear VNUK students,<br/>
                            The Academic Affairs Office would like to inform you about the schedule of annual holiday for VNUK students.<br/>
                            - All classes will be temporarily stopped on April 21st 2021 due to Hung King holiday.<br/>
                            - All classes will be temporarily stopped from April 30th 2021 to May 03rd 2021 due to 30/04 - 01/05 holiday.<br/><br/>
                            Best regards.<br/>
                        </p>
                    </div>
                    
                    <div className="Announ__btn-view">
                        <a href="/">
                            <p>View more Announcements</p>
                        </a>
                    </div>
                </div>
            </div>
                {/* <div class="column">
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
                </div> */}
        </div>
    )
}

export default NewsBody
