import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'


const Navbar = (props) => {
    const { companyAuth } = props;
    // console.log(companyAuth);
    const links =  companyAuth.uid ? <SignedInLinks /> : <SignedOutLinks/>
    return (
        <div>
            <nav className="nav-wrapper yellow darken-3">
                <div className="container">
                    <Link to='/' className="brand-logo hide-on-med-and-down"><img src="/img/logoHeader.png" alt="CatchCar.com Navbar Logo"></img></Link>
                    <ul className="right ">{links}</ul>
                </div>
            </nav>         
        </div>
    )
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        companyAuth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar)