import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = (props) => {
    return (
        <div>
            <li><NavLink to="/"><img className="searchIcon" src="/img/search.png" alt="Search"/></NavLink></li>
            <li><NavLink to="/company-signup">Company Sign Up</NavLink></li>
            <li><NavLink to="/company-signin">Company Login</NavLink></li>
        </div>
    )
}

export default (SignedOutLinks)