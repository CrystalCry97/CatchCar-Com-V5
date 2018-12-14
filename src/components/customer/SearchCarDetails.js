import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import {Button, Modal} from 'react-materialize'
import moment from 'moment'

class SearchCarDetails extends Component {
    render(){
        const { companyCar } = this.props;

        if ( companyCar) {
            return(
                <div className="container section project-details">
                    <div className="card z-depth-0">
                        <div className="card-content">
                            <img className="car-img" src={companyCar.carImageURL} alt="Car"/>
                            <span className="card-title">{ companyCar.carName }</span>
                            <p>Number of Seats: {companyCar.carSeater}</p>
                            <p>Transmission   : {companyCar.carTransmission}</p>
                            <p>Other features : {companyCar.carOtherFeatures}</p>
                            <Modal
                                header='Booking Information'
                                trigger={<Button>BOOK NOW !</Button>}>
                                <div className="input-field">
                                    <label  htmlFor="customerName">Your Name</label>
                                    <input type="text" id="customerName"/>
                                </div>
                                <div className="input-field">
                                    <label  htmlFor="customerContact">Contact No</label>
                                    <input type="text" id="customerContact"/>
                                </div>
                                <div className="input-field">
                                    <label  htmlFor="customerEmail">Email</label>
                                    <input type="text" id="customerEmail"/>
                                </div>
                                <div className="input-field">
                                    <label  htmlFor="customerPickupDate">Pickup Date</label>
                                    <input type="text" id="customerPickupDate"/>
                                </div>
                                <div className="input-field">
                                    <label  htmlFor="customerPickupTime">Pickup Time</label>
                                    <input type="text" id="customerPickupTime"/>
                                </div>
                                <div className="input-field">
                                    <label  htmlFor="customerReturnDate">Return Date</label>
                                    <input type="text" id="customerReturnDate"/>
                                </div>
                                <div className="input-field">
                                    <label  htmlFor="customerReturnTime">Return Time</label>
                                    <input type="text" id="customerReturnTime"/>
                                </div>
                                <a href='/' className="btn orange lighten-1 z-depth-0">Submit</a>
                            </Modal>
                        </div>
                        <div className="card-action grey lighten-4 grey-text">
                            <div>By {companyCar.companyName}</div>
                            <div>Posted on {moment(companyCar.createdAt.toDate()).calendar()}</div>
                        </div>
                    </div>
                </div>
            )
        }else{
            return (
                <div className="container center">
                    <p>Loading Company Cars. . .</p>
                </div>
            )
        }  
    }
}

const mapStateToProps = (state, ownProps) => {
    const id= ownProps.match.params.id;
    const companyCars= state.firestore.data.companyCars;
    const companyCar = companyCars ? companyCars[id]: null
    return {
        companyCar: companyCar
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'companyCars' }
    ])
)(SearchCarDetails)