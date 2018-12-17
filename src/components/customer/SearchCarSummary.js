import React from 'react'
import moment from 'moment'

const SearchCarSummary = ({companyCar}) =>{
    return(
        <div className="card_center">
            <div className="card-content card_box grey-text text-darken-1">
                <span className="inline">
                    <img className="car-img" src={companyCar.carImageURL} alt="Car"></img>
                </span>
                <span className="inline">
                    {companyCar.carPricePerDay ? <h4>RM {companyCar.carPricePerDay}<sub>per day</sub></h4>: null} 
                    <h5>{companyCar.carName}</h5>
                    <p>{companyCar.companyName}</p>
                    <p>Pickup Location: {companyCar.locationArea}</p>
                    <p>Posted on {moment(companyCar.createdAt.toDate()).calendar()}</p>
                </span>
            </div>
        </div>
    )
}

export default SearchCarSummary