import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCompanyCar } from '../../store/actions/companyCarActions'


class AddCompanyCar extends Component {
    state={
        carName:'',
        carSeater: '',
        carTransmission:'',
        carOtherFeatures: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit=(e) => {
        e.preventDefault();
        //console.log(this.state)
        this.props.addCompanyCar(this.state)
    }
    
    render() {
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Add New Car</h5>
                    <div class="file-field input-field">
                        <div class="btn orange lighten-1 z-depth-0">
                            <span>Upload Car Image</span>
                            <input type="file" accept="image/*" />
                        </div>
                        <div class="file-path-wrapper">
                            <input class="file-path validate" type="text"/>
                        </div>
                    </div>
                    <div className="input-field">
                        <label  htmlFor="carName">Car Name</label>
                        <input type="text" id="carName" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label  htmlFor="carSeater">No of Car Seats</label>
                        <input type="text" id="carSeater" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label  htmlFor="carTransmission">Car Transmission</label>
                        <input type="text" id="carTransmission" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label  htmlFor="carOtherFeatures">Other Features</label>
                        <textarea id="carOtherFeatures" className="materialize-textarea" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn orange lighten-1 z-depth-0">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCompanyCar: (companyCar) => dispatch(addCompanyCar(companyCar))
    }
}

export default connect(null,mapDispatchToProps)(AddCompanyCar) 