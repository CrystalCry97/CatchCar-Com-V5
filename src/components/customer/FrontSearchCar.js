import React from 'react'
// import { firestoreConnect } from 'react-redux-firebase'

class FrontSearchCar extends React.Component{
    state= {
        pickupLocation: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit= (e) => {
        e.preventDefault();
        console.log(this.state.pickupLocation);
    }

    render(){
        return(
            <div className="center">
                <form onSubmit={this.handleSubmit} >
                    <div  className="center">
                        <img className="circular_img" src="/img/catchcar.png" alt="CatchCar Main Logo"/>
                    </div>
                    <div className="input-field">
                        <label  htmlFor="pickupLocation">Pickup Place</label>
                        <input type="text" id="pickupLocation" onChange={this.handleChange}/>
                    </div>
                    <button className="btn orange lighten-1 z-depth-0">Find cars</button>
                </form>
            </div>  
        )
    }
}



export default (FrontSearchCar) 