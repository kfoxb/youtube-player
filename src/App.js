import React, { Component } from 'react'
import './App.css'
import Search from './components/Search'
import CurrentVideo from './components/CurrentVideo'
import VideoList from './components/VideoList'

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
      <div>
        <Search searchTerm={this.state.searchTerm} updateSearchTerm={this.updateSearchTerm} />
        <CurrentVideo />
        <VideoList />
      </div>
    )
  }
}

export default App
