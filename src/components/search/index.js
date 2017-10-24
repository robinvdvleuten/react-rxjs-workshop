import React, { Component } from 'react';
import linkstate from 'linkstate';

class Search extends Component {
  state = {
    query: ''
  }

  handleFormSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.state.query);
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div className="input-group">
          <input value={this.state.query} onChange={linkstate(this, 'query')} type="text" className="form-control" placeholder="Search for..." aria-label="Search for..." />
          <span className="input-group-btn">
            <button className="btn btn-secondary" type="submit">
              Search
            </button>
          </span>
        </div>
      </form>
    );
  }
}

export default Search;
