import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { companySignOut } from '../../store/actions/companyAuthActions'

const SignedInLinks = (props) => {
    return (
        <div>
                <li><NavLink to="/company-dashboard">Dashboard</NavLink></li>
                <li><NavLink to="/company-addcar">Add New Car</NavLink></li>
                <li><NavLink to="/company-profile">Company Profile</NavLink></li>
                {/* eslint-disable-next-line */}
                <li><a href="/company-signin" onClick={props.companySignOut}>Log Out</a></li>
        </div>        
    )
}

const mapDispatchToProps = (dispatch) => {
    return  {
        companySignOut: () => dispatch(companySignOut())
    }
}

export default connect(null,mapDispatchToProps)(SignedInLinks)