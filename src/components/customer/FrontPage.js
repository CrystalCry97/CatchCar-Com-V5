import React, { Component } from 'react'
import FrontSearchCar from './FrontSearchCar'

class FrontPage extends Component {
    render(){
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 ">
                        <FrontSearchCar />
                    </div>
                </div>
            </div>
        )
    }
}

export default FrontPage