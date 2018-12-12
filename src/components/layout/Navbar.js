import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navbar = (props) => {
    return (
        <nav className="nav-wrapper yellow darken-3">
            <div className="container">
                <Link to='/' className="brand-logo"><img src="/img/logoHeader.png" alt="CatchCar.com Navbar Logo"></img></Link>
                <SignedInLinks />
                <SignedOutLinks />
            </div>
        </nav>
    )
}

export default (Navbar)