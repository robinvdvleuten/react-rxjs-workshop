import React, { Component } from 'react';
import Results from '../results';
import Search from '../search';
import Suggestions from '../suggestions';

class Application extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-lg-center mt-5">
          <div className="col-lg-4">
            <Search />
          </div>
        </div>

        <div className="row justify-content-lg-center mt-2">
          <div className="col-lg-4">
            <Suggestions />
          </div>
        </div>

        <div className="row justify-content-lg-center mt-5">
          <div className="col-lg-4">
            <Results />
          </div>
        </div>
      </div>
    );
  }
}

export default Application;
