import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../../stylesheets/index.scss'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Navbar />
        </header>
        <Footer />
      </div>
    )
  }
}

export default App;
