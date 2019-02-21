import React, { Component } from 'react';
import logo from '../logo.svg';
import NewProfil from '../components/Profil';

class Home extends Component {
  
    constructor(props) {
        super(props)

        this.state = {
         
        }
    }

  render() {
    const {title} = this.props
    return (

      <div className="App">
          <NewProfil name="Paul" age="18 ans"></NewProfil>   
      </div>

    )
  }
}

export default Home;