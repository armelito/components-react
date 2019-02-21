import React, { Component } from 'react'
import Header from '../components/home/header/Header';
import TextContainer from '../components/inscription/Container';

class Inscription extends Component {

  render() {
    return (
      <div className="AppOrange">
        <Header></Header>
        <TextContainer></TextContainer>
      </div>

    )
  }
}

export default Inscription;