import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
const data = ['one', 'two', 'three'];

const navs = ['Home', 'About', 'Contact'];

const Button = ({ item }) => <button>{item}</button>;
const NavLink = ({ display }) => <li>{display}</li>;

import List from '../../src';

class Demo extends Component {
  render() {
    return (
      <div className="container">
        <h1>nr-react-list Demo</h1>
        <p>Utility Component to render an iterator(Array of objects) </p>
        <h3>List with an "item" prop</h3>
        <code>
          <pre>{`const data = ['one', 'two', 'three'];
const Button = ({ item }) => <button>{item}</button>;

// Use List Component
// Notice the button component has an "item' prop
// By default List component expect an item prop

<List of={Button} iterator={data} />
            `}</pre>
        </code>
        <div className="result">
          Will render: <List of={Button} iterator={data} />
        </div>
        <h3>List with a custom propname</h3>
        <code>
          <pre>{`const navs = ['Home', 'About', 'Contact'];

const NavLink = ({ display }) => <li>{display}</li>;

// just add a custom "propname" prop to List Component

<List of={NavLink} iterator={navs} propname="display" />
            `}</pre>
        </code>
        <ul className="result">
          <List of={NavLink} iterator={navs} propname="display" />
        </ul>
      </div>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
