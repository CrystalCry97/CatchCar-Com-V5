import React, { Component } from 'react'
import { connect } from 'react-redux'
import FrontSearchCar from './FrontSearchCar'
import { setPickupLocationFilter } from '../../store/actions/carFiltersActions';

class FrontPage extends Component {
    render(){
        return (
            <div className="dashboard container frontpage">
                <FrontSearchCar onSubmit={(data)=>{
                    this.props.setPickupLocationFilter(data.pickupLocation);
                    this.props.history.push('/searchresult');
                }}/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPickupLocationFilter: (pickUpLocation) => dispatch(setPickupLocationFilter(pickUpLocation))
    }
}

export default connect(null,mapDispatchToProps)(FrontPage);