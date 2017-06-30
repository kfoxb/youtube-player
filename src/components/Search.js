import React, { Component } from 'react'

class Search extends Component {
  render () {
    return (
      <input value={this.props.searchTerm} onChange={this.props.updateSearchTerm} />
    )
  }
}

export default Search
