import React from 'react'
import moment from 'moment'

const SearchCarSummary = ({companyCar}) =>{
    return(
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <img className="car-img" src={companyCar.carImageURL} alt="Car"></img>
                <span className="card-title">{companyCar.carName}</span>
                <p>{companyCar.companyName}</p>
                <p>Pickup Location: {companyCar.locationArea}</p>
                <p className="grey-text">Posted on {moment(companyCar.createdAt.toDate()).calendar()}</p>
            </div>
        </div>
    )
}

export default SearchCarSummary