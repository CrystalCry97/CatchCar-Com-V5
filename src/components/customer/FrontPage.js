import React, { Component } from 'react'
import FrontSearchCar from './FrontSearchCar'

class FrontPage extends Component {
    render(){
        return (
            <div className="dashboard container frontpage">
                <FrontSearchCar />
            </div>
        )
    }
}

export default FrontPage