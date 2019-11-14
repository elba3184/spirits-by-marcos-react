import React, { Component } from 'react'
import '../../stylesheets/home.scss'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <h2>Welcome to Spirits by Marcos</h2>
        <p>Check out our wide range of liquors</p>
        <p>Or view the vendors in the area</p>
        <button>Liquor</button>
        <button>Vendors</button>
      </div>
    )
  }
}

export default Home;