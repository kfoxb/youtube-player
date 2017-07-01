import React, { Component } from 'react'

class Search extends Component {
  render () {
    return (
      <form onSubmit={this.props.updateSearchResults}>
        <input value={this.props.searchTerm} onChange={this.props.updateSearchTerm} />
        <input type='submit' value='Search' />
      </form>
    )
  }
}

export default Search
