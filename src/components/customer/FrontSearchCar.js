import React from 'react';

export default class FrontSearchCar extends React.Component{
    state= {

        pickupLocation: ''
    }

    onPickupLocationChange= (e) => {
        const pickupLocation= e.target.value;
        this.setState(() => ({pickupLocation}));
    }

    onSubmit= (e) => {
        e.preventDefault();
        this.props.onSubmit({
            pickupLocation: this.state.pickupLocation
        });
        // console.log("Submit");
    }

    render(){
        return(
            <div className="center">
                <form onSubmit={this.onSubmit} >
                    <div  className="center">
                        <img className="circular_img" src="/img/catchcar.png" alt="CatchCar Main Logo"/>
                    </div>
                    <div className="input-field">
                        <label  htmlFor="pickupLocation">Pickup Place</label>
                        <input type="text" id="pickupLocation" className="text-white" onChange={this.onPickupLocationChange}/>
                    </div>
                    <button className="btn orange lighten-1 z-depth-0">Find cars</button>
                </form>
            </div>  
        )
    }
}

