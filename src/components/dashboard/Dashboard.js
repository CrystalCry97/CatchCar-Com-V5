import React, { Component } from 'react'
import CompanyCarList from '../company_cars/CompanyCarList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
    render(){
        const { companyCars, companyAuth }=this.props;

        if(!companyAuth.uid)
            return <Redirect to='/company-signin' />

        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 ">
                        <CompanyCarList companyCars= {companyCars}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {    
    return {
        companyCars: state.firestore.ordered.companyCars,
        companyAuth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { 
            collection: 'companyCars'
        }
    ])
)(Dashboard)