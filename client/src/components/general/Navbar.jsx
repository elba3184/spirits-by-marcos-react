import React, { Component } from 'react'
import { Switch, Route, NavLink, Link } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import api from '../../api'
import '../../stylesheets/navbar.scss'

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null
    }
  }
  componentDidMount() {
    this.checkLogin()
  }

  checkLogin = () => {
    api.checkLogin().then(user => {
      console.log("the user", user)
      this.setState({ user })
    })
  }

  handleLogoutClick(e) {
    api.logout().then(this.checkLogin)
  }

  render() {
    return (
      <div className="nav-bar">
        <div className="nav-links">
          <div className="nav-left">
            <NavLink to="/" exact>Home</NavLink>
            <NavLink to="/vendors">Vendors</NavLink>
            <NavLink to="/liquor">Liquor</NavLink>
          </div>

          <div className="nav-right">
            {!api.isLoggedIn() && <Link className="nav-link" to="/signup">
              <li className="nav-item active">Signup</li>
            </Link>}
            {!api.isLoggedIn() && <Link className="nav-link" to="/login">
              <li className="nav-item">Login</li>
            </Link>}
            {api.isLoggedIn() && <Link className="nav-link" to="/" onClick={e => this.handleLogoutClick(e)}>
              <li className="nav-item active">Logout</li>
            </Link>}
          </div>
        </div>

        <Switch>
          <Route path="/" exact component={(props) => <Home {...props} />} />
          <Route path="/signup" component={(props) => <Signup checkLogin={this.checkLogin} {...props} />} />
          <Route path="/login" component={(props) => < Login checkLogin={this.checkLogin} {...props} />} />
          {/* <Route render={() => <h2>404</h2>} /> */}
        </Switch>
      </div>
    )
  }
}

export default Navbar;