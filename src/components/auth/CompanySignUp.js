import React, { Component } from 'react'


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
        console.log(this.state)
    }
    
    render() {
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
                        <label  htmlFor="headquartersLocation">Headquarters Location</label>
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
                        <button className="btn orange lighten-1 z-depth-0">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}


export default CompanySignUp 