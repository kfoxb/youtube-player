import React, { Component } from 'react'
import './App.css'
import Search from './components/Search'
import CurrentVideo from './components/CurrentVideo'
import VideoList from './components/VideoList'
import axios from 'axios'
import { youtubeApiKey } from './keys.js'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: 'cats',
      currentVideo: {
        kind: '',
        etag: '',
        id: {
          videoId: ''
        },
        snippet: {}
      },
      searchResults: []
    }
    this.updateSearchTerm = this.updateSearchTerm.bind(this)
    this.updateSearchResults = this.updateSearchResults.bind(this)
  }

  componentDidMount () {
    this.executeSearch()
    .then(() => {
      this.setState({
        currentVideo: this.state.searchResults[0]
      })
    })
  }

  executeSearch () {
    return axios({
      method: 'get',
      params: {
        key: youtubeApiKey,
        maxResults: 6,
        part: 'snippet',
        q: this.state.searchTerm
      },
      url: 'https://www.googleapis.com/youtube/v3/search'
    })
    .then((results) => {
      console.log(results)
      this.setState({
        searchResults: results.data.items
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }

  updateSearchResults (event) {
    event.preventDefault()
    console.log('executing search')
    this.executeSearch()
  }

  updateSearchTerm (event) {
    this.setState({
      searchTerm: event.target.value
    })
  }
  render () {
    return (
      <div>
        <Search searchTerm={this.state.searchTerm} updateSearchTerm={this.updateSearchTerm} updateSearchResults={this.updateSearchResults} />
        <CurrentVideo video={this.state.currentVideo} />
        <VideoList searchResults={this.state.searchResults} />
      </div>
    )
  }
}

export default App
