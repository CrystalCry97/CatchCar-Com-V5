import React from 'react';
import { connect } from 'react-redux';
// import { setPickupLocationFilter } from '../actions/filters';

class CarListFilters extends React.Component{
    state ={
        pickUpLocation:'',
    };

    onPickupLocationChange = (e) =>{
        const pickUpLocation= e.target.value;
        this.setState(()=> ({pickUpLocation}));
    };


    onSubmit = (e) =>{
        e.preventDefault();
        // this.props.dispatch(setPickupLocationFilter(this.state.pickUpLocation));
    };

    render(){
        return (
            <div className="carlistfilters">
                <form onSubmit={this.onSubmit}>
                    <div className="input-field">
                        <label  htmlFor="pickupLocation">Pickup Place</label>
                        <input 
                            type="text"
                            id="pickupLocation" 
                            value={this.state.pickUpLocation}
                            onChange= {this.onPickupLocationChange}
                        />
                    </div>
                    <button className="btn orange lighten-1 z-depth-0">Find cars</button>
                </form>

            </div>
        );
    }

};

const mapStatetoProps = (state) => {
    return {
        filters:state.filters
    };
};


export default connect(mapStatetoProps)(CarListFilters);