import React from 'react'
import './SurveyBody.css'

const SurveyBody = () =>{
    return(
        <div className="surveyBody">
            <div class="row">
                <div class="column">
                    <div className='searchBox'>
                        <h4>Narrow Your Results</h4>
                        <input type="text" id="fname" name="fname" placeholder='Enter term...'></input>
                    </div>
                    <br/>
                    <div className="list">

                        <ul className='mainList'>
                            <li><a href='#'>Management and International Business</a></li>
                            <li><a href="">International Hotel & Tourism Management</a></li>
                            <li><a href="">Digital Business Administration</a></li>
                            <li><a href=""> Computer Science & Engineering</a></li>
                            <li><a href=""> Data Science</a></li>
                            <li><a href="">Biomedical Science</a></li>
                            <li><a href="">Nanotechnology</a></li>

                        </ul>


                    </div>
                </div>
                <div class="column">
                    <h1>Survey</h1>
                    <h5>The VNUK Institute faculty and students study, teach, and learn across more than 400 programs in the computer and biology, the social and natural sciences, engineering, international studies, education, business, and the health professions.
                        Use the interactive program explorer to browse the programs that JHU offers. Sort by division and/or degree type, or use the keyword search to get started.</h5>       
                    <div class="postRow">
                        <div class="postCol left" >
                            <h5>Teacher</h5>
                        </div>
                        <div class="postCol middle" >
                            <a href=''><h5>How smart is Vu?</h5></a>
                        </div>
                        <div class="postCol right" >
                            <h5>15/10/1696</h5>
                        </div>
                    </div>
                    <div class="postRow">
                        <div class="postCol left" >
                            <h5>Teacher</h5>
                        </div>
                        <div class="postCol middle" >
                            <a href=''><h5>How smart is Vu?</h5></a>
                        </div>
                        <div class="postCol right" >
                            <h5>15/10/1696</h5>
                        </div>
                    </div>
                    <div class="postRow">
                        <div class="postCol left" >
                            <h5>Teacher</h5>
                        </div>
                        <div class="postCol middle" >
                            <a href=''><h5>How smart is Vu?</h5></a>
                        </div>
                        <div class="postCol right" >
                            <h5>15/10/1696</h5>
                        </div>
                    </div>
                    <div class="postRow">
                        <div class="postCol left" >
                            <h5>Teacher</h5>
                        </div>
                        <div class="postCol middle" >
                            <a href=''><h5>How smart is Vu?</h5></a>
                        </div>
                        <div class="postCol right" >
                            <h5>15/10/1696</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SurveyBody
