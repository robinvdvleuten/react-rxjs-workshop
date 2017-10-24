import React, { Component } from 'react';
import Results from '../results';
import Search from '../search';
import Suggestions from '../suggestions';

class Application extends Component {
  render() {
    const { isLoading, results } = this.props;

    return (
      <div className="container">
        <div className="row justify-content-lg-center mt-5">
          <div className="col-lg-4">
            <Search onSearch={this.props.searchQuery} />
          </div>
        </div>

        <div className="row justify-content-lg-center mt-2">
          <div className="col-lg-4">
            {isLoading && 'Loading results...'}
          </div>
        </div>

        <div className="row justify-content-lg-center mt-5">
          <div className="col-lg-4">
            <Results results={results} />
          </div>
        </div>
      </div>
    );
  }
}

export default Application;
