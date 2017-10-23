import React, { Component } from 'react';

const Suggestion = () => (
  <button type="button" className="list-group-item list-group-item-action">
    Cras justo odio
  </button>
);

class Suggestions extends Component {
  render() {
    return (
      <div className="list-group">
        <Suggestion />
      </div>
    );
  }
}

export default Suggestions;
