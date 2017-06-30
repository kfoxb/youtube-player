import React, { Component } from 'react'
import './App.css'
import Search from './components/Search'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: 'cats',
      currentVideo: 'https://www.youtube.com/watch?v=f21UCwIfgZk'
    }
    this.updateSearchTerm = this.updateSearchTerm.bind(this)
  }

  updateSearchTerm (event) {
    this.setState({
      searchTerm: event.target.value
    })
  }
  render () {
    return (
      <Search searchTerm={this.state.searchTerm} updateSearchTerm={this.updateSearchTerm} />
    )
  }
}

export default App
