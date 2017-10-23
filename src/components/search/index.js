import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <form>
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Search for..." aria-label="Search for..." />
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
