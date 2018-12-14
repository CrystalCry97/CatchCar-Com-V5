import React from 'react';
import { connect } from 'react-redux';
import { setPickupLocationFilter } from '../../store/actions/carFiltersActions';

class CarListFilters extends React.Component{
    constructor (props){
        super(props);
        this.state ={
            pickUpLocation:props.pickup
        };
    }
    

    onPickupLocationChange = (e) =>{
        const pickUpLocation= e.target.value;
        this.setState(()=> ({pickUpLocation}));
    };


    onSubmit = (e) =>{
        e.preventDefault();
        this.props.setPickupLocationFilter(this.state.pickUpLocation);
    };


    render(){
        return (
            <div className="carlistfilters">
                <form onSubmit={this.onSubmit} >
                    <div className="row">
                        <div className="col s12">
                            <div className="input-field inline">
                                <input 
                                    type="text"
                                    id="pickupLocation" 
                                    className="text-white"
                                    value={this.state.pickUpLocation}
                                    onChange= {this.onPickupLocationChange}
                                    placeholder="Pickup Place"
                                />
                            </div>
                        <button className="btn orange lighten-1 z-depth-0 ">Find cars</button>
                        </div>
                    </div>
                    
                </form>
            </div>
        );
    }

};


const mapDispatchToProps = (dispatch) => {
    return {
        setPickupLocationFilter: (pickUpLocation) => dispatch(setPickupLocationFilter(pickUpLocation))
    }
}

const mapStateToProps = (state) => {
    return {
        pickup: state.carFilters.pickupLocation
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CarListFilters);