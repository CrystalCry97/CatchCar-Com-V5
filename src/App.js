import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import FrontPage from './components/customer/FrontPage'
import Dashboard from './components/dashboard/Dashboard'
import CompanyCarDetails from './components/company_cars/CompanyCarDetails'
import CompanySignIn from './components/auth/CompanySignIn'
import CompanySignUp from './components/auth/CompanySignUp'
import AddCompanyCar from './components/company_cars/AddCompanyCar' 

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={FrontPage} />
            <Route path='/project/:id' component={CompanyCarDetails} />
            <Route path='/company-dashboard' component={Dashboard} />
            <Route path='/company-signin' component={CompanySignIn} />
            <Route path='/company-signup' component={CompanySignUp} />
            <Route path='/company-addcar' component={AddCompanyCar} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
