import React, { Component } from 'react'

class VideoListEntry extends Component {
  render () {
    return (
      <div>
        <h4>{this.props.title}</h4>
        <img src={this.props.thumbnail} />
      </div>
    )
  }
}

export default VideoListEntry
