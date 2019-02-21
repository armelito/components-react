import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import './App.css';

import Home from './pages/Home'
import Inscription from './pages/Inscription'
import Connexion from './pages/Connexion'
import Chat from './pages/Chat'
import AddFriend from './pages/AddFriend'

class App extends Component {
  render() {
    return (
      
      <div className="App">
        <Route render={({location}) => (
          <Switch location={location}>
            <Route exact path='/' component={Home}/>
            <Route exact path='/inscription' component={Inscription}/>
            <Route exact path='/connexion' component={Connexion}/>
            <Route exact path='/chat' component={Chat}/>
            <Route exact path='/friend' component={AddFriend}/>
          </Switch>
      )} />
      </div>

    );
  }
}

export default App;
