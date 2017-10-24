import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import Welcome from './Welcome'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Welcome />
        <Footer />
      </div>
    );
  }
}

export default App
