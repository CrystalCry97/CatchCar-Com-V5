import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import FrontPage from './components/customer/FrontPage'
import Dashboard from './components/dashboard/Dashboard'
import CompanyProfile from './components/dashboard/CompanyProfile'
import CompanyCarDetails from './components/company_cars/CompanyCarDetails'
import CompanySignIn from './components/auth/CompanySignIn'
import CompanySignUp from './components/auth/CompanySignUp'
import AddCompanyCar from './components/company_cars/AddCompanyCar'
import SearchResultPage from './components/customer/SearchResultPage' 
import SearchCarDetails from './components/customer/SearchCarDetails'
import BookingPage from './components/booking/BookingPage';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={FrontPage} />
            <Route path='/companyCar/:id' component={CompanyCarDetails} />
            <Route exact path='/searchresult/:id' component={SearchCarDetails} />
            <Route path='/company-dashboard' component={Dashboard} />
            <Route path='/company-signin' component={CompanySignIn} />
            <Route path='/company-signup' component={CompanySignUp} />
            <Route path='/company-profile' component={CompanyProfile} />
            <Route path='/company-addcar' component={AddCompanyCar} />
            <Route path='/searchresult' component={SearchResultPage} />
            <Route path='/searchresult/:id/booking' component={BookingPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
