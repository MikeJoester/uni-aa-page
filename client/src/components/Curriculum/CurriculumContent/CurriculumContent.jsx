import React from 'react'
import './CurriculumContent.css'
// import {images} from '../../../constants'
import { Link } from 'react-router-dom'

const CurriculumContent = () =>{
    return(
        <div className="Curriculum__Content">
            <div className="Curriculum__wrap">
                <div className="Curriculum__col-nav">
                    <div id="filters">
                        <p>Narrow Your Results</p>
                        <form>
                            <fieldset className="filters__search">
                                <legend>Search</legend>
                                <label class="search__only" for="filters-search">Enter term</label>
                                <input type="text" name="filters-search" id="filters-search" placeholder="Enter terms..."></input>
                            </fieldset>
                            {/* Program level */}
                            <fieldset class="filters__group" data-filter-group="cat1">
                                <legend class="filters__cat--title">Program Level</legend>
                                <div class="filters__filters" id="cat1list">
                                    <div class="filters__filter filters__filter--filter_1">
                                        <input type="checkbox" id="filter_1" class="filter-cb" value=".filter_1"></input>
                                        <label for="filter_1">Bachelor's</label>
                                    </div>
                                    <div class="filters__filter filters__filter--filter_20">
                                        <input type="checkbox" id="filter_20" class="filter-cb" value=".filter_20"></input>
                                        <label for="filter_20">Minors</label>
                                    </div>
                                    <div class="filters__filter filters__filter--filter_4">
                                        <input type="checkbox" id="filter_4" class="filter-cb" value=".filter_4"></input>
                                            <label for="filter_4">Master's</label>
                                    </div>
                                    <div class="filters__filter filters__filter--filter_3">
                                        <input type="checkbox" id="filter_3" class="filter-cb" value=".filter_3"></input>
                                        <label for="filter_3">Doctoral</label>
                                    </div>
                                    <div class="filters__filter filters__filter--filter_2">
                                        <input type="checkbox" id="filter_2" class="filter-cb" value=".filter_2"></input>
                                        <label for="filter_2">Certificate</label>
                                    </div>
                                    <div class="filters__filter filters__filter--filter_22">
                                        <input type="checkbox" id="filter_22" class="filter-cb" value=".filter_22"></input>
                                        <label for="filter_22">Post-Master's Certificate (Graduate Certificate)</label>
                                    </div>
                                    <div class="filters__filter filters__filter--filter_23">
                                        <input type="checkbox" id="filter_23" class="filter-cb" value=".filter_23"></input>
                                            <label for="filter_23">Non Degree Program</label>
                                    </div>
                                </div>
                            </fieldset>
                            {/* Divisions */}
                            <fieldset class="filters__group" data-filter-group="cat7">
                                <legend class="filters__cat--title">Divisions</legend>
                                <div class="filters__filters" id="cat7list">
                                    <div class="filters__filter filters__filter--filter_7">
                                        <input type="checkbox" id="filter_7" class="filter-cb" value=".filter_7"></input>
                                        <label for="filter_7">Bloomberg School of Public Health</label>
                                    </div>
                                    <div class="filters__filter filters__filter--filter_8">
                                        <input type="checkbox" id="filter_8" class="filter-cb" value=".filter_8"></input>
                                        <label for="filter_8">Carey Business School</label>
                                    </div>
                                    <div class="filters__filter filters__filter--filter_9">
                                        <input type="checkbox" id="filter_9" class="filter-cb" value=".filter_9"></input>
                                        <label for="filter_9">Krieger School of Arts and Sciences (Full Time, On Campus Programs)</label>
                                    </div>
                                    <div class="filters__filter filters__filter--filter_10">
                                        <input type="checkbox" id="filter_10" class="filter-cb" value=".filter_10"></input>
                                        <label for="filter_10">Peabody Institute</label>
                                    </div>
                                    <div class="filters__filter filters__filter--filter_11">
                                        <input type="checkbox" id="filter_11" class="filter-cb" value=".filter_11"></input>
                                        <label for="filter_11">School of Advanced International Studies</label>
                                    </div>
                                    <div class="filters__filter filters__filter--filter_12">
                                        <input type="checkbox" id="filter_12" class="filter-cb" value=".filter_12"></input>
                                        <label for="filter_12">School of Education</label>
                                    </div>
                                    <div class="filters__filter filters__filter--filter_13">
                                        <input type="checkbox" id="filter_13" class="filter-cb" value=".filter_13"></input>
                                        <label for="filter_13">School of Medicine</label>
                                    </div>
                                    <div class="filters__filter filters__filter--filter_14">
                                        <input type="checkbox" id="filter_14" class="filter-cb" value=".filter_14"></input>
                                        <label for="filter_14">School of Nursing</label>
                                    </div>
                                    <div class="filters__filter filters__filter--filter_15">
                                        <input type="checkbox" id="filter_15" class="filter-cb" value=".filter_15"></input>
                                        <label for="filter_15">Whiting School of Engineering (Full Time, On Campus Programs)</label>
                                    </div>
                                    <div class="filters__filter filters__filter--filter_25">
                                        <input type="checkbox" id="filter_25" class="filter-cb" value=".filter_25"></input>
                                        <label for="filter_25">Krieger School of Arts and Sciences (Advanced Academic Programs)</label>
                                    </div>
                                    <div class="filters__filter filters__filter--filter_24">
                                        <input type="checkbox" id="filter_24" class="filter-cb" value=".filter_24"></input>
                                        <label for="filter_24">Whiting School of Engineering (Engineering For Professionals)</label>
                                    </div>
                                </div>
                            </fieldset>   
                            {/* Format */}
                            <fieldset class="filters__group" data-filter-group="cat17">
                                <legend class="filters__cat--title">Format</legend>
                                <div class="filters__filters" id="cat17list">
                                    <div class="filters__filter filters__filter--filter_17">
                                        <input type="checkbox" id="filter_17" class="filter-cb" value=".filter_17"></input>
                                        <label for="filter_17">Hybrid</label>
                                    </div>
                                    <div class="filters__filter filters__filter--filter_18">
                                        <input type="checkbox" id="filter_18" class="filter-cb" value=".filter_18"></input>
                                        <label for="filter_18">In-person</label>
                                    </div>
                                    <div class="filters__filter filters__filter--filter_19">
                                        <input type="checkbox" id="filter_19" class="filter-cb" value=".filter_19"></input>
                                        <label for="filter_19">Online</label>
                                    </div>
                                </div>
                            </fieldset>
                            {/* Frequency */}
                            <fieldset class="filters__group" data-filter-group="cat5">
                                <legend class="filters__cat--title">Frequency</legend>
                                <div class="filters__filters" id="cat5list">
                                    <div class="filters__filter filters__filter--filter_5">
                                        <input type="checkbox" id="filter_5" class="filter-cb" value=".filter_5"></input>
                                        <label for="filter_5">Full-time</label>
                                    </div>
                                    <div class="filters__filter filters__filter--filter_6">
                                        <input type="checkbox" id="filter_6" class="filter-cb" value=".filter_6"></input>
                                        <label for="filter_6">Part-time</label>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
                <div className="Curriculum__col-content">
                    <div className="Curriculum__nav-place">
                        <a href="/" className="Back__home">Home</a>
                        <span className="crumsep">{">"}</span>
                        <span class="Curriculum__text-place">Explore our Programs</span>
                    </div>
                    <div className="Curriculum__credits">
                        <div className="Curriculum__credits-text">
                            <h1 className="Curriculum__text-heading">Explore our programs</h1>
                            <p>The VNUK Institute faculty and students study, teach, and learn across more than 400 
                                programs in the computer and biology, the social and natural sciences, engineering, 
                                international studies, education, business, and the health professions.</p>
                            <p>
                                Use the interactive program explorer to browse the programs that VNUK offers. Sort by division and/or degree type, or use the keyword search to get started.
                            </p>    
                            {/* <div id="noresults"
                            // style="display: none;"
                            >
                                <p>No results found, please try again. 
                                    <a href="#" class="filters-reset">Reset selections</a>.
                                </p>
                            </div> */}
                            <div class="filter-items filter-items--grid">
                                <ul class="isotope">
                                    <Link to="/SchoolCurriculum/details" >
                                        <li class="red">
                                            <div class="bordertop__top-red"></div>
                                            <a href="/SchoolCurriculum/details">
                                                <div class="item-container">
                                                    <span class="title">Accounting and Financial Management, Minor</span>
                                                    <ul class="divisions">
                                                        <li>Whiting School of Engineering</li>
                                                    </ul>
                                                </div>
                                            </a>
                                        </li>
                                    </Link>
                                    <Link to="/SchoolCurriculum/details" >
                                        <li class="yellow">
                                            <div class="bordertop__top-yellow"></div>
                                            <a href="/SchoolCurriculum/details">
                                                <div class="item-container">
                                                    <span class="title">Adolescent Health, Certificate</span>
                                                    <ul class="divisions">
                                                        <li>Bloomberg School of Public Health</li>
                                                    </ul>
                                                </div>
                                            </a>
                                        </li>
                                    </Link>
                                    <Link to="/SchoolCurriculum/details" >
                                        <li class="purple">
                                            <div class="bordertop__top-purple"></div>
                                            <a href="/SchoolCurriculum/details">
                                                <div class="item-container">
                                                    <span class="title">Adult-Gerontological Acute Care Nurse Practitioner</span>
                                                    <ul class="divisions">
                                                        <li>School of Nursing</li>
                                                    </ul>
                                                </div>
                                            </a>
                                        </li>
                                    </Link>
                                    <Link to="/SchoolCurriculum/details" >
                                        <li class="green">
                                            <div class="bordertop__top-green"></div>
                                            <a href="/SchoolCurriculum/details">
                                                <div class="item-container">
                                                    <span class="title">Applied Biomedical Engineering, Master of Science</span>
                                                    <ul class="divisions">
                                                        <li>Whiting School of Engineering </li>
                                                    </ul>
                                                </div>
                                            </a>
                                        </li>
                                    </Link>
                                    <Link to="/SchoolCurriculum/details" >
                                        <li class="purple">
                                            <div class="bordertop__top-purple"></div>
                                            <a href="/SchoolCurriculum/details">
                                                <div class="item-container">
                                                    <span class="title">Accounting and Financial Management, Minor</span>
                                                    <ul class="divisions">
                                                        <li>Whiting School of Engineering </li>
                                                    </ul>
                                                </div>
                                            </a>
                                        </li>
                                    </Link>
                                    <Link to="/SchoolCurriculum/details" >
                                        <li class="red">
                                            <div class="bordertop__top-red"></div>
                                            <a href="/SchoolCurriculum/details">
                                                <div class="item-container">
                                                    <span class="title">Accounting and Financial Management, Minor</span>
                                                    <ul class="divisions">
                                                        <li>Whiting School of Engineering </li>
                                                    </ul>
                                                </div>
                                            </a>
                                        </li>
                                    </Link>
                                    <Link to="/SchoolCurriculum/details" >
                                        <li class="yellow">
                                            <div class="bordertop__top-yellow"></div>
                                            <a href="/SchoolCurriculum/details">
                                                <div class="item-container">
                                                    <span class="title">Accounting and Financial Management, Minor</span>
                                                    <ul class="divisions">
                                                        <li>Whiting School of Engineering</li>
                                                    </ul>
                                                </div>
                                            </a>
                                        </li>
                                    </Link>
                                    <Link to="/SchoolCurriculum/details" >
                                        <li class="green">
                                            <div class="bordertop__top-green"></div>
                                            <a href="/SchoolCurriculum/details">
                                                <div class="item-container">
                                                    <span class="title">Accounting and Financial Management, Minor</span>
                                                    <ul class="divisions">
                                                        <li>Whiting School of Engineering </li>
                                                    </ul>
                                                </div>
                                            </a>
                                        </li>
                                    </Link>
                                    <Link to="/SchoolCurriculum/details" >
                                        <li class="red">
                                            <div class="bordertop__top-red"></div>
                                            <a href="/SchoolCurriculum/details">
                                                <div class="item-container">
                                                    <span class="title">Accounting and Financial Management, Minor</span>
                                                    <ul class="divisions">
                                                        <li>Whiting School of Engineering</li>
                                                    </ul>
                                                </div>
                                            </a>
                                        </li>
                                    </Link>
                                    <Link to="/SchoolCurriculum/details" >
                                        <li class="purple">
                                            <div class="bordertop__top-purple"></div>
                                            <a href="/SchoolCurriculum/details">
                                                <div class="item-container">
                                                    <span class="title">Accounting and Financial Management, Minor</span>
                                                    <ul class="divisions">
                                                        <li>Whiting School of Engineering </li>
                                                    </ul>
                                                </div>
                                            </a>
                                        </li>
                                    </Link>
                                    <Link to="/SchoolCurriculum/details" >
                                        <li class="purple">
                                            <div class="bordertop__top-purple"></div>
                                            <a href="/SchoolCurriculum/details">
                                                <div class="item-container">
                                                    <span class="title">Accounting and Financial Management, Minor</span>
                                                    <ul class="divisions">
                                                        <li>Whiting School of Engineering </li>
                                                    </ul>
                                                </div>
                                            </a>
                                        </li>
                                    </Link>
                                    <Link to="/SchoolCurriculum/details" >
                                        <li class="purple">
                                            <div class="bordertop__top-purple"></div>
                                            <a href="/SchoolCurriculum/details">
                                                <div class="item-container">
                                                    <span class="title">Accounting and Financial Management, Minor</span>
                                                    <ul class="divisions">
                                                        <li>Whiting School of Engineering </li>
                                                    </ul>
                                                </div>
                                            </a>
                                        </li>
                                    </Link>
                                    <Link to="/SchoolCurriculum/details" >
                                        <li class="purple">
                                            <div class="bordertop__top-purple"></div>
                                            <a href="/SchoolCurriculum/details">
                                                <div class="item-container">
                                                    <span class="title">Accounting and Financial Management, Minor</span>
                                                    <ul class="divisions">
                                                        <li>Whiting School of Engineering </li>
                                                    </ul>
                                                </div>
                                            </a>
                                        </li>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurriculumContent