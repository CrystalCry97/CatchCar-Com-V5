import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = (props) => {
    return (
        <ul className="right">
            <li><NavLink to="/company-signup">Company Sign Up</NavLink></li>
            <li><NavLink to="/company-signin">Company Login</NavLink></li>
        </ul>
    )
}

export default (SignedOutLinks)