import React, { Component } from 'react';
import {Router, Route} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import AppStyle from 'layout/AppStyle';
import './App.css';

const hist  = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router history={hist}>
        <Route path='/' component={AppStyle}/>
      </Router>
      
    );
  }
}

export default App;
