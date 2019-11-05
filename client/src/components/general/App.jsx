import React, { Component } from 'react'
import Navbar from './Navbar'
import '../../stylesheets/index.scss'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Navbar />
        </header>
        <footer>
          designed by elba
        </footer>
      </div>
    )
  }
}

export default App;
