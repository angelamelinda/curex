import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux';

import Store from './redux/Store';
import Homepage from './containers/Homepage';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <Router>
          <div className="App">
            <Route exact path="/" component={Homepage} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
