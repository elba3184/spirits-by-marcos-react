import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import api from '../../api'
import '../../stylesheets/login.scss'

export default class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      message: null,
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleClick(e) {
    e.preventDefault()
    api
      .login(this.state.username, this.state.password)
      .then(result => {
        console.log('SUCCESS!')
        this.props.checkLogin()
        this.props.history.push('/')
      })
      .catch(err => this.setState({ message: err.toString() }))
  }

  render() {
    return (

      <div className="login-page">
             <div className="login-box">
                <div className="login-content">
                 <h2>Login</h2>
                <form>
                  <h3>Username{' '}</h3>
                  <br/>
               <input
                      className="login-username"
                      type="text"
                      value={this.state.username}
                      name="username"
                      onChange={this.handleInputChange}
                    />{' '}
                    <br />
                    <h3>Password{' '}</h3>
                    <br/>
                    <input
                      className="login-password"
                      type="password"
                      value={this.state.password}
                      name="password"
                      onChange={this.handleInputChange}
                    />{' '}
                    <br />
                    <button onClick={e => this.handleClick(e)}>Login</button>
                  </form>
                  {this.state.message && (
                    <div className="info info-danger">{this.state.message}</div>
                  )}
                </div>
              </div>
            </div>
    )
  }
}