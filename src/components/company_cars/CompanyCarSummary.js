import React from 'react'
import moment from 'moment'

const CompanyCarSummary = ({companyCar}) =>{
    return(
        <div className="card_content">
            <div className="card-content card_box grey-text text-darken-1">
                <div >
                    <img className="car-img" src={companyCar.carImageURL} alt="Car"/>
                </div>
                <div >
                    <h4>{companyCar.carName}</h4>
                    <p>{companyCar.companyName}</p>
                    <p>Posted on {moment(companyCar.createdAt.toDate()).calendar()}</p>
                </div>
            </div>
        </div>
    )
}

export default CompanyCarSummary