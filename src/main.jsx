import React from 'react';
import ReactDOM from 'react-dom';
import Head from './head.jsx';
import Body from './body.jsx';
import { Provider, inject, observer } from 'mobx-react';
import State from './store.js';
import 'pepjs';
import style from './style.scss';

const stores = {
  state: new State()
};

class UnbreraPaint extends React.Component {
  componentDidMount() {
    style.use();
  }
  componentWillUnmount() {
    style.unuse();
  }
  render() {
    return (
      <Provider {...stores}>
        <React.Fragment>
          <Head />
          <Body />
        </React.Fragment>
      </Provider>
    );
  }
}

ReactDOM.render(<UnbreraPaint />, document.getElementById('root'));
