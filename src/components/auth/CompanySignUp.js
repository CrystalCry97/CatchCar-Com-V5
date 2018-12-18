import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { companySignUp } from '../../store/actions/companyAuthActions'

class CompanySignUp extends Component {
    state={
        email:'',
        password: '',
        companyName:'',
        headquartersLocation:'',
        telephoneNumber:'',
        businessLicenseNo:''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit=(e) => {
        e.preventDefault();
        this.props.companySignUp(this.state);
    }
    
    render() {
        const { companyAuth, companyAuthError } = this.props;

        if(companyAuth.uid)
            return <Redirect to='/company-dashboard' />

        return(
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <label  htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label  htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label  htmlFor="companyName">Company Name</label>
                        <input type="text" id="companyName" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label  htmlFor="headquartersLocation">Headquarters Location City (e.g Gelugor)</label>
                        <input type="text" id="headquartersLocation" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label  htmlFor="telephoneNumber">Telephone Number</label>
                        <input type="text" id="telephoneNumber" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label  htmlFor="businessLicenseNo">Business License No</label>
                        <input type="text" id="businessLicenseNo" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn orange lighten-1 z-depth-0">Signup</button>
                        <div className="red-text center">
                            { companyAuthError ? <p>{companyAuthError}</p>: null}
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        companyAuth: state.firebase.auth,
        companyAuthError: state.companyAuth.companyAuthError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        companySignUp: (newCompany) => dispatch(companySignUp(newCompany))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CompanySignUp) 