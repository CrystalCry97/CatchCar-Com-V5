import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const CompanyProfile = (props) => {
    const { companyAuth, companyProfile } = props;

    if(!companyAuth.uid)
        return <Redirect to='/company-signin' />
    
    return (
        <div className="container profile center">
            <h5>Company Profile</h5>
            <div>
                <p className="font-bold">Company Name: </p>
                <p>{companyProfile.companyName}</p>
            </div>
            <div>
                <p className="font-bold">Headquarters Location: </p>
                <p>{companyProfile.headquartersLocation}</p>
            </div>
            <div>
                <p className="font-bold">Business License No: </p>
                <p>{companyProfile.businessLicenseNo}</p>
            </div>
            <div>
                <p className="font-bold">Telephone Number: </p>
                <p>{companyProfile.telephoneNumber}</p>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        companyAuth: state.firebase.auth,
        companyProfile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(CompanyProfile)