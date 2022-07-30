import React from 'react'
import './PersonalContent.css'

const PersonalContent = () =>{
    return(
        <div className="Personal__Content">
            <div className="Personal__wrap">
                <div className="Personal__nav-place">
                    <a href="/" className="Back__home">Home</a>
                    <span className="crumsep">{">"}</span>
                    <span class="Personal__current-place">Profile</span>
                    <span className="crumsep">{">"}</span>
                    <span class="Personal__current-place">Personal Information</span>
                    <p className="Personal__Name">
                        Personal Information
                    </p>
                </div>
                <p className="student__information-title">
                    Student Information
                </p>
                <div className="student__information">
                    <div className="student__info-col1">
                        <div className="student__info-row">
                            <div className="student__info-name">
                                <p>Full Name</p>
                                <input type="text" disabled placeholder="Cuong Xuan Lee"/>
                            </div>
                            <div className="student__info-gender">
                                <p>Male</p>
                                <input type="text" disabled placeholder="Male"/>
                            </div>
                        </div>
                        <div className="student__national">
                            <p>National</p>
                            <input type="text" disabled placeholder="Viet Nam"/>
                        </div>
                        <div className="student__Birthday">
                            <p>Birth Day</p>
                            <input type="text" disabled placeholder="03/02/2002"/>
                        </div>
                        <div className="student__Birthplace">
                            <p>Birth Place</p>
                            <input type="text" disabled placeholder="DaNang city"/>
                        </div>
                    </div>
                    <div className="student__info-col1">
                        <div className="student__info-ID">
                            <p>Identity card</p>
                            <input type="text" disabled placeholder="20192123910"/>
                        </div>
                        <div className="student__Major">
                            <p>Major</p>
                            <input type="text" disabled placeholder="Computer Science & Engineering"/>
                        </div>
                        <div className="student__Class">
                            <p>Class</p>
                            <input type="text" disabled placeholder="20CSE"/>
                        </div>
                        <div className="student__ID">
                            <p>Student ID</p>
                            <input type="text" disabled placeholder="20020022"/>
                        </div>
                    </div>
                </div>
                <p className="student__information-title">
                    Contact Infomation
                </p>
                <div className="student__information">
                    <div className="student__info-col1">
                        <div className="student__email">
                            <p>Email</p>
                            <input type="text" disabled placeholder="cuong.le200222@vnuk.edu.vn"/>
                        </div>
                        <div className="student__phone">
                            <p>phone</p>
                            <input type="text"  placeholder="0904607915"/>
                        </div>
                    </div>
                    <div className="student__info-col1">
                        <div className="student__address">
                            <p>Address</p>
                            <input type="text"  placeholder="81A Le Loi Street"/>
                        </div>
                    </div>
                </div>
                <div className="button__save">
                    <button className="btn__profile"type="submit">Change & save</button>
                </div>
            </div>
        </div>
    )
}

export default PersonalContent