import React from 'react'
import './RegisterCreditContent.css'

const RegisterCreditContent = () =>{
    return(
        <div className="RegisterCredit__Content">
            <div className="RegisterCredit__wrap">
                <div className="RegisterCredit__nav-place">
                    <a href="/" className="Back__home">Home</a>
                    <span className="crumsep">{">"}</span>
                    <span class="RegisterCreditContent__current-place">About the course</span>
                    <span className="crumsep">{">"}</span> 
                    <span class="RegisterCreditContent__current-place">Credit Register</span>
                    <p className="RegisterCredit__Name">
                        Credit Register
                    </p>
                </div>

                <div className="no__credits">
                    <p>There are currently no registrations available. Please check back later and often for credit application times.</p>
                </div>
            </div>
        </div>
    )
}

export default RegisterCreditContent
