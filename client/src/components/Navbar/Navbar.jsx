import React from 'react'
import './Navbar.css'


const Navbar = () =>{
    return(
        <div className="nav">
            <ul className="tablist">
                <li className="tab">
                    <a href="/">Menu</a>
                </li>
                <li className="tab">
                    <a href="/">News & Events</a>
                </li>
                <li className="tab">
                    <a href="/">Login</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar