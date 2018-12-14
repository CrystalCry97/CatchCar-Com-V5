import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import moment from 'moment'

class SearchCarDetails extends Component {
    handleBookNow= () =>{
        this.props.history.push('/');
    }
    render(){
        const { companyCar } = this.props;

        if ( companyCar) {
            return(
                <div className="container section project-details">
                    <div className="card z-depth-0">
                        <div className="card-content">
                            <img className="car-img" src="/img/saga.jpg" alt="Car image"></img>
                            <span className="card-title">{ companyCar.carName }</span>
                            <p>Number of Seats: {companyCar.carSeater}</p>
                            <p>Transmission   : {companyCar.carTransmission}</p>
                            <p>Other features : {companyCar.carOtherFeatures}</p>
                            <button onClick={this.handleBookNow}>Book Now!</button>
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