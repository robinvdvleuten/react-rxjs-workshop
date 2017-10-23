import React, { Component } from 'react';

const Result = () => (
  <li className="card mb-3">
    <div class="card-body">
      <h4 class="card-title">
        Card title
      </h4>
      <p class="card-text">
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </p>
    </div>
  </li>
);

class Results extends Component {
  render() {
    return (
      <ul className="list-unstyled">
        <Result />
      </ul>
    );
  }
}

export default Results;
