import React, { Component } from 'react';

const Result = props => (
  <li className="card mb-3">
    <div className="card-body">
      <h4 className="card-title">
        {props.result.title}
      </h4>
      <p className="card-text">
        {props.result.text}
      </p>
    </div>
  </li>
);

class Results extends Component {
  render() {
    const { results } = this.props;

    return (
      <ul className="list-unstyled">
        {results.map((result, i) => <Result key={i} result={result} />)}
      </ul>
    );
  }
}

export default Results;
