import React from 'react'

class FrontSearchCar extends React.Component{
    state= {
        pickupLocation: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    onSubmit= (e) => {
        e.preventDefault();
        console.log("Submit");
    }

    render(){
        return(
            <div className="">
                <div  className="">
                    <img className="circular_img" src="/img/catchcar.png" alt="CatchCar Main Logo"/>
                </div>
                <div className="">
                    <form onSubmit={this.onSubmit}>
                        <div className="input-field">
                            <label  htmlFor="pickupLocation">Pickup Place</label>
                            <input type="text" id="pickupLocation" onChange={this.handleChange}/>
                        </div>
                        <button className="btn orange lighten-1 z-depth-0">Find a car</button>
                    </form>
                </div> 
            </div>  
        )
    }
}

export default FrontSearchCar