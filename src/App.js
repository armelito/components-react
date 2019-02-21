import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import logo from './logo.svg';
import './App.css';

import Home from './pages/Home'
import About from './pages/Home'

class App extends Component {
  render() {
    return (
      
      <div className="App">
        <Route render={({location}) => (
          <Switch location={location}>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
          </Switch>
      )} />
      </div>

    );
  }
}

export default App;
