import React, { Component } from 'react';
import { render } from 'react-dom';

const data = ['one', 'two', 'three'];

const Button = ({ item }) => <button>{item}</button>;

import List from '../../src';

class Demo extends Component {
  render() {
    return (
      <div>
        <h1>nr-react-list Demo</h1>
        <List of={Button} iterator={data} />
      </div>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
