import React, { Component } from 'react'

class CurrentVideo extends Component {
  render () {
    let youtubeURL = `http://www.youtube.com/embed/${this.props.video.id.videoId}?enablejsapi=1&origin=http://localhost`
    // for (let key in this.props.video) {
    //   console.log('this is a key', key)
    // }
    return (
      <div>
        <iframe id='player' type='text/html' width='640' height='390' src={youtubeURL} frameborder='0' />
      </div>
    )
  }
}

export default CurrentVideo
