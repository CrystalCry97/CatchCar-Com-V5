import React from 'react'
import moment from 'moment'

const CompanyCarSummary = ({companyCar}) =>{
    return(
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{companyCar.carName}</span>
                <img className="car-img" src={companyCar.carImageURL} alt="Car"/>
                <p>{companyCar.companyName}</p>
                <p className="grey-text">Posted on {moment(companyCar.createdAt.toDate()).calendar()}</p>
            </div>
        </div>
    )
}

export default CompanyCarSummary