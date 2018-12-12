import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = (props) => {
    return (
        <ul className="right">
            <li><NavLink to="/company-dashboard">Dashboard</NavLink></li>
            <li><NavLink to="/company-addcar">Add New Car</NavLink></li>
            <li><NavLink to="/">Log Out</NavLink></li>
            <li><NavLink to="/" className="btn btn-floating grey lighten-1">CC</NavLink></li>
        </ul>
    )
}

export default (SignedInLinks)