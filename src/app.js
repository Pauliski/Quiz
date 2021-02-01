import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Quiz} from './Quiz'
import { Submit, Timer} from './Answer';
import {Welcome} from './WelcomePage'


class App extends Component {
  render() {
    return (
      <Router>
        <Route path='/' exact component={Welcome} />
        <Route path='/home' exact component={Welcome} />
        <Route path='/test' exact component={Quiz} />
        <Route path='/submit' exact component={Timer} />
        <Route path='/submit' exact component={Submit} />
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));