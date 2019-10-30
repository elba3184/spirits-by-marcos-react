import React, { Component } from 'react'
import { Route, Link, NavLink, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import Vendors from '../vendors/AllVendors'
import Liquor from '../liquor/AllLiquor'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import api from '../../api'
import '../../stylesheets/navbar.scss'


class Navbar extends Component {

  handleLogoutClick(e) {
    api.logout()
  }

  render() {
    return (
      <div className="nav-bar">
        <div className="nav-links">
          <div className="nav-left">
            <NavLink to="/" exact>Home</NavLink>
            <NavLink to="/">Vendors</NavLink>
            <NavLink to="/">Liquor</NavLink>
          </div>
          <div className="nav-right">
            {!api.isLoggedIn() && <NavLink to="/signup">Signup</NavLink>}
            {!api.isLoggedIn() && <NavLink to="/login">Login</NavLink>}
            {api.isLoggedIn() && (
              <Link to="/" onClick={e => this.handleLogoutClick(e)}>
                Logout
        </Link>
            )}
          </div>
        </div>
        {/* <NavLink to="/secret">Secret</NavLink> */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/vendors" component={Vendors} />
          <Route path="/liquor" component={Liquor} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          {/* <Route path="/secret" component={Secret} /> */}
          <Route render={() => <h2>404</h2>} />
        </Switch>
      </div>
    )
  }
}

export default Navbar;