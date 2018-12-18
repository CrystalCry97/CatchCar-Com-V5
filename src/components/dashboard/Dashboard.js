import React, { Component } from 'react'
import CompanyCarList from '../company_cars/CompanyCarList'
import Notifications from './Notifications'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
    render(){
        const { carBooked,companyCars, companyAuth }=this.props;

        if(!companyAuth.uid)
            return <Redirect to='/company-signin' />

        console.log(companyCars);

        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m8">
                        <CompanyCarList companyCars= {companyCars}/>
                    </div>
                    <div className="col s12 m3 offset-m1 ">
                        <Notifications carBooked= {carBooked}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {    
    return {
        companyCars: state.firestore.ordered.companyCars,
        carBooked: state.firestore.ordered.carBooked,
        companyAuth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect(getState => [
        { 
            collection: 'companyCars',
            where:[
                ['companyID', '==', getState.companyAuth.uid]
            ]
        },
        {
            collection: 'carBooked',
            where:[
                ['bookingCompanyEmail', '==', getState.companyAuth.email]
            ]
        }
    ])
)(Dashboard)