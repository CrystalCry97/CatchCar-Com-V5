import React from 'react'

const CompanyCarSummary = ({companyCar}) =>{
    return(
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{companyCar.carName}</span>
                <p>{companyCar.companyName}</p>
                <p className="grey-text">Posted on 3rd Sept, 2pm</p>
            </div>
        </div>
    )
}

export default CompanyCarSummary