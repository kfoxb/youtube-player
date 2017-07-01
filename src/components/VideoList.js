import React, { Component } from 'react'
import VideoListEntry from './VideoListEntry'

class VideoList extends Component {
  componentDidMount () {
    console.log('typeof searchResults', typeof this.props.searchResults)
  }
  render () {
    // let searchResults = this.props.searchResults.map((value) => {
    //   return (
    //     <VideoListEntry title={value.snippet.title} thumbnail={value.snippet.thumbnails.default.url} />
    //   )
    // })
    return (
      <div>
        {this.props.searchResults.map((value) => {
          return <VideoListEntry title={value.snippet.title} thumbnail={value.snippet.thumbnails.default.url} />
        })}
      </div>
    )
  }
}

export default VideoList
